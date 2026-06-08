/* ===================================================================
   ナマステ カリカ — 言語切替エンジン
   localStorage に保存・即時切替（リロード不要）
   =================================================================== */

(function () {
  const STORAGE_KEY = 'nk_lang';
  const DEFAULT_LANG = 'ja';

  function getLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ja' || saved === 'en') return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function t(key, lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    return (dict && dict[key] !== undefined) ? dict[key] : (I18N[DEFAULT_LANG][key] || key);
  }

  // 全 data-i18n 要素を翻訳
  function applyTranslations(lang) {
    // テキスト
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    // placeholder属性
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), lang));
    });
    // aria-label属性
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang));
    });

    // <html lang> と スイッチャーのアクティブ状態
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    // メニューページの再描画（存在する場合）
    if (typeof window.renderMenu === 'function') {
      window.renderMenu(lang);
    }
    // カスタムイベントで他スクリプトに通知
    document.dispatchEvent(new CustomEvent('nk:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (lang !== 'ja' && lang !== 'en') lang = DEFAULT_LANG;
    saveLang(lang);
    applyTranslations(lang);
  }

  // グローバル公開
  window.NKLang = {
    get: getLang,
    set: setLang,
    t: function (key) { return t(key, getLang()); },
    apply: function () { applyTranslations(getLang()); }
  };

  // 初期適用
  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(getLang());
    // スイッチャーのクリックを配線
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
  });
})();
