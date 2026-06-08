/* ===================================================================
   ナマステ カリカ — 画像アップロードラベルの自動非表示
   仮画像（600x440）のときだけファイル名ラベルを表示し、
   実際の写真に差し替えられたら自動的にラベルを隠します。
   =================================================================== */

(function () {
  // 仮画像の正確なサイズ
  var PLACEHOLDER_W = 600;
  var PLACEHOLDER_H = 440;

  function isPlaceholder(img) {
    // 自然サイズが仮画像と完全一致 → まだ仮画像
    return img.naturalWidth === PLACEHOLDER_W && img.naturalHeight === PLACEHOLDER_H;
  }

  function updateLabel(img) {
    // 画像コンテナ内のラベルを探す
    var container = img.closest('.item-card-img, .featured-card-img, .menu-card-img');
    if (!container) return;
    var tag = container.querySelector('.img-upload-tag');
    if (!tag) return;
    // 仮画像なら表示、本番写真なら非表示
    if (isPlaceholder(img)) {
      tag.style.display = '';
    } else {
      tag.style.display = 'none';
    }
  }

  function checkImage(img) {
    if (img.complete && img.naturalWidth > 0) {
      updateLabel(img);
    } else {
      img.addEventListener('load', function () { updateLabel(img); }, { once: true });
      // 読み込み失敗時はラベルを残す（差し替え忘れに気づける）
      img.addEventListener('error', function () {
        var container = img.closest('.item-card-img, .featured-card-img, .menu-card-img');
        if (container) {
          var tag = container.querySelector('.img-upload-tag');
          if (tag) tag.style.display = '';
        }
      }, { once: true });
    }
  }

  function scanAll() {
    var imgs = document.querySelectorAll(
      '.item-card-img img, .featured-card-img img, .menu-card-img img'
    );
    imgs.forEach(checkImage);
  }

  document.addEventListener('DOMContentLoaded', scanAll);
  // メニューが動的に再描画されたとき（言語切替・絞り込み）にも再スキャン
  document.addEventListener('nk:langchange', function () {
    setTimeout(scanAll, 50);
  });
  document.addEventListener('nk:menurendered', function () {
    setTimeout(scanAll, 30);
  });
  // 念のため、メニュー描画後にも一度走らせる
  window.addEventListener('load', scanAll);
})();
