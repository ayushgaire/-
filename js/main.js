/* ===================================================================
   ナマステ カリカ — メインスクリプト
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ===== パーティーコース内容の描画（言語対応） ===== */
  const renderCourseItems = function () {
    if (!window.NKLang) return;
    document.querySelectorAll('.course-items[data-course]').forEach(function (el) {
      const key = 'course.' + el.getAttribute('data-course') + '.items';
      const raw = window.NKLang.t(key);
      if (!raw || raw === key) return;
      const sep = raw.indexOf('｜') !== -1 ? '｜' : '|';
      el.innerHTML = raw.split(sep).map(function (s) {
        return '<span>' + s.trim() + '</span>';
      }).join('');
    });
  };
  renderCourseItems();
  document.addEventListener('nk:langchange', renderCourseItems);

  /* ===== モバイル言語バーのオフセット ===== */
  const mlb = document.querySelector('.mobile-lang-bar');
  if (mlb) {
    const applyLangbarOffset = function () {
      if (window.matchMedia('(max-width: 720px)').matches) {
        document.body.classList.add('has-mobile-langbar');
      } else {
        document.body.classList.remove('has-mobile-langbar');
      }
    };
    applyLangbarOffset();
    window.addEventListener('resize', applyLangbarOffset);
  }

  /* ===== ローディング画面 ===== */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('hidden'); }, 600);
    });
    // フォールバック（loadが発火しない場合）
    setTimeout(function () { loader.classList.add('hidden'); }, 2500);
  }

  /* ===== ヘッダー スクロール効果 ===== */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = function () {
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ===== モバイルメニュー ===== */
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { navMenu.classList.remove('open'); });
    });
  }

  /* ===== スクロールアニメーション ===== */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ===== お問い合わせフォーム ===== */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        form.reset();
        setTimeout(function () { success.style.display = 'none'; }, 6000);
      }
    });
  }

  /* ===== ギャラリー ライトボックス ===== */
  initLightbox('.gallery-item img, .menu-gallery-item img');
});

/* ===== ライトボックス機能 ===== */
function initLightbox(selector) {
  const images = Array.from(document.querySelectorAll(selector));
  if (!images.length) return;

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (!lightbox || !lightboxImg) return;

  let currentIndex = 0;
  const srcList = images.map(function (img) { return img.getAttribute('src'); });

  function show(index) {
    currentIndex = (index + srcList.length) % srcList.length;
    lightboxImg.setAttribute('src', srcList[currentIndex]);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  images.forEach(function (img, i) {
    img.parentElement.addEventListener('click', function () { show(i); });
  });

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', function () { show(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { show(currentIndex + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
}
