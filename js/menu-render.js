/* ===================================================================
   ナマステ カリカ — メニュー描画エンジン
   ランチ / グランドメニューのカード生成・検索・フィルター・辛さ表示
   多言語（NKLang）対応。言語切替時に renderMenu() が再呼び出しされる。
   =================================================================== */

(function () {
  let currentFilter = 'all';
  let currentSearch = '';

  function L() { return (window.NKLang ? window.NKLang.get() : 'ja'); }
  function t(key) { return (window.NKLang ? window.NKLang.t(key) : key); }

  // 辛さ表示（唐辛子アイコン）
  function spiceMarkup(level) {
    if (level <= 0) {
      return '<span class="spice-none">' + t('spice.0') + '</span>';
    }
    const peppers = '🌶'.repeat(level);
    const label = t('spice.' + level);
    return '<div class="item-spice">' +
             '<span class="spice-peppers" title="' + label + '">' + peppers + '</span>' +
             '<span class="spice-label">' + t('menu.spiceLabel') + ': ' + label + '</span>' +
           '</div>';
  }

  // 価格表示
  function priceMarkup(item, lang) {
    let note = '';
    if (item.priceNote) {
      note = (lang === 'en' && item.priceNoteEn) ? item.priceNoteEn : item.priceNote;
      note = ' <span class="price-note">' + note + '</span>';
    }
    return '<span class="item-price">¥' + item.price.toLocaleString() + note + '</span>';
  }

  // 1アイテムのカードHTML
  function cardMarkup(item, lang, popularLabel) {
    const name = (lang === 'en') ? item.en : item.ja;
    const subName = (lang === 'en') ? item.ja : item.en;
    const desc = (lang === 'en') ? item.descEn : item.descJa;
    const popular = item.popular
      ? '<span class="item-popular-badge">★ ' + popularLabel + '</span>' : '';
    return '' +
      '<article class="item-card" data-name="' + (item.ja + ' ' + item.en).toLowerCase() + '">' +
        '<div class="item-card-img">' +
          popular +
          '<span class="img-upload-tag">images/menu-items/' + item.img + '</span>' +
          '<img src="images/menu-items/' + item.img + '" alt="' + name + '" loading="lazy">' +
        '</div>' +
        '<div class="item-card-body">' +
          '<div>' +
            '<div class="item-name-ja">' + name + '</div>' +
            '<div class="item-name-en">' + subName + '</div>' +
          '</div>' +
          '<p class="item-desc">' + desc + '</p>' +
          '<div class="item-footer">' +
            priceMarkup(item, lang) +
            spiceMarkup(item.spice) +
          '</div>' +
        '</div>' +
      '</article>';
  }

  // マッチ判定（検索）
  function matchesSearch(item) {
    if (!currentSearch) return true;
    const hay = (item.ja + ' ' + item.en + ' ' + (item.descJa||'') + ' ' + (item.descEn||'')).toLowerCase();
    return hay.indexOf(currentSearch.toLowerCase()) !== -1;
  }

  // メニュー全体を描画
  function renderMenu(lang) {
    lang = lang || L();
    const root = document.getElementById('menuRoot');
    if (!root) return;
    const popularLabel = t('menu.popularBadgeShort');
    let html = '';
    let visibleCount = 0;

    // ---- 注目の人気メニュー（フィルター=all かつ 検索なしのときのみ） ----
    if (currentFilter === 'all' && !currentSearch && MENU_DATA.featured) {
      html += '<div class="featured-block" id="block-featured">';
      html += '<h3 class="menu-section-title">' + t('menu.featuredTitle') +
              ' <span class="ms-en">' + t('menu.featuredSub') + '</span></h3>';
      html += '<div class="featured-grid">';
      MENU_DATA.featured.forEach(function (f) {
        const name = (lang === 'en') ? f.en : f.ja;
        const subName = (lang === 'en') ? f.ja : f.en;
        html += '<div class="featured-card">' +
                  '<div class="featured-card-img">' +
                    '<span class="featured-tag">' + t(f.tag) + '</span>' +
                    '<span class="img-upload-tag">images/menu-items/' + f.img + '</span>' +
                    '<img src="images/menu-items/' + f.img + '" alt="' + name + '" loading="lazy">' +
                  '</div>' +
                  '<div class="featured-card-body">' +
                    '<div><div class="featured-name-ja">' + name + '</div>' +
                    '<div class="featured-name-en">' + subName + '</div></div>' +
                    '<div class="featured-price">¥' + f.price.toLocaleString() + '</div>' +
                  '</div>' +
                '</div>';
      });
      html += '</div></div>';
    }

    // ---- ランチメニュー（カテゴリ lunch / all のとき表示） ----
    if (currentFilter === 'all' || currentFilter === 'lunch') {
      const lunchItems = MENU_DATA.lunch.filter(matchesSearch);
      if (lunchItems.length) {
        html += '<div class="menu-block" id="block-lunch">';
        // ランチ大バナー
        html += '<div class="lunch-banner">' +
                  '<span class="lb-badge">' + t('menu.lunchBadge') + '</span>' +
                  '<h2>' + t('menu.lunchTitle') + '</h2>' +
                  '<div class="lb-hours">' + t('menu.lunchHours') + '</div>' +
                  '<p class="lb-notice">' + t('menu.lunchNotice') + '</p>' +
                '</div>';
        html += '<div class="menu-items-grid">';
        lunchItems.forEach(function (item) { html += cardMarkup(item, lang, popularLabel); visibleCount++; });
        html += '</div></div>';
      }
    }

    // ---- グランドメニュー ----
    const grandCats = MENU_DATA.grand;
    const catOrder = ['chicken','mutton','vegetable','seafood','nan','snacks','dinnerset','dessert'];

    // グランドのいずれかが表示対象か
    const showGrandHeader = (currentFilter === 'all' || catOrder.indexOf(currentFilter) !== -1);
    let grandHtml = '';
    catOrder.forEach(function (key) {
      if (currentFilter !== 'all' && currentFilter !== key && currentFilter !== 'lunch') {
        // 特定カテゴリ選択時は該当のみ
        if (currentFilter !== key) return;
      }
      if (currentFilter === 'lunch') return; // ランチのみ表示
      const cat = grandCats[key];
      if (!cat) return;
      const items = cat.items.filter(matchesSearch);
      if (!items.length) return;
      const catName = (lang === 'en') ? cat.catEn : cat.catJa;
      const catSub = (lang === 'en') ? cat.catJa : cat.catEn;
      grandHtml += '<div class="menu-block" id="block-' + key + '">';
      grandHtml += '<h3 class="menu-section-title">' + catName + ' <span class="ms-en">' + catSub + '</span></h3>';
      grandHtml += '<div class="menu-items-grid">';
      items.forEach(function (item) { grandHtml += cardMarkup(item, lang, popularLabel); visibleCount++; });
      grandHtml += '</div></div>';
    });

    if (grandHtml && showGrandHeader && currentFilter !== 'lunch') {
      // グランド大バナー（all または グランドカテゴリ選択時）
      let banner = '<div class="grand-banner">' +
                     '<span class="gb-badge">' + t('menu.grandBadge') + '</span>' +
                     '<h2>' + t('menu.grandTitle') + '</h2>' +
                     '<div class="gb-times"><span>' + t('menu.grandLunch') + '</span><span>' + t('menu.grandDinner') + '</span></div>' +
                     '<p class="gb-notice">' + t('menu.grandNotice') + '</p>' +
                   '</div>';
      html += banner + grandHtml;
    }

    root.innerHTML = html;

    // 結果なし
    const noRes = document.getElementById('menuNoResults');
    if (noRes) {
      noRes.style.display = (visibleCount === 0) ? 'block' : 'none';
      noRes.textContent = t('menu.noResults');
    }

    // 画像ラベルの再スキャンを通知
    document.dispatchEvent(new CustomEvent('nk:menurendered'));
  }

  // グローバル公開（lang.js から呼ばれる）
  window.renderMenu = renderMenu;

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('menuRoot');
    if (!root) return;

    // 検索
    const search = document.getElementById('menuSearch');
    if (search) {
      search.addEventListener('input', function () {
        currentSearch = this.value.trim();
        renderMenu();
      });
    }

    // カテゴリーフィルター
    document.querySelectorAll('.cat-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        currentFilter = this.getAttribute('data-cat');
        renderMenu();
        // フィルター上部までスクロール
        const sec = document.getElementById('menuRoot');
        if (sec) {
          const y = sec.getBoundingClientRect().top + window.scrollY - 140;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });

    // 初期描画
    renderMenu();
  });
})();
