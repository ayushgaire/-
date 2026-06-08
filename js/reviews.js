/* ===================================================================
   ナマステ カリカ — Googleレビュー カルーセル
   実際のお客様の口コミ（英語原文）。著者名・評価・本文を表示。
   =================================================================== */

const GOOGLE_REVIEWS = [
  {
    name: "Derek Poshtar", stars: 5,
    text: "There is an excellent reason why this restaurant is highly rated. Great food, AMAZING staff and very reasonable prices. We will definitely be back. Seriously the nicest staff in Miyazaki.",
    food: 5, service: 5
  },
  {
    name: "Tazwar Utshas", stars: 5,
    text: "The food is tasty, portions are generous, and prices are reasonable. They also offer many halal options.",
  },
  {
    name: "Rishi Aryal", stars: 5,
    text: "Delicious food. Friendly staff. Neat and clean.",
  },
  {
    name: "Yulia Dwi Setia", stars: 5,
    text: "The staff confirmed they use halal meat.",
  },
  {
    name: "Gopal Budha", stars: 5,
    text: "Good food and good service.",
  },
  {
    name: "Bikesh Syantmg", stars: 5,
    text: "Food and service is very good. Excellent hospitality.",
  },
  {
    name: "Singh Krishna", stars: 5,
    text: "I liked the Nan especially.",
  },
  {
    name: "Suman Paudel", stars: 5,
    text: "Wow, the food is delicious.",
  },
  {
    name: "Jenish Tamang", stars: 5,
    text: "Excellent service and food.",
  },
  {
    name: "Rakshya Shrestha", stars: 5,
    text: "Food is so good.",
  },
  {
    name: "Prakash Gautam", stars: 5,
    text: "Delicious food.",
  },
  {
    name: "Matov Baker", stars: 5,
    text: "Nice restaurant with friendly staff.",
  }
];

(function () {
  function t(key) { return (window.NKLang ? window.NKLang.t(key) : key); }

  function initials(name) {
    return name.split(/\s+/).map(function (w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
  }

  function buildCard(r) {
    const ratings = (r.food || r.service)
      ? '<div class="greview-ratings">' +
          (r.food ? '<span>' + t('greviews.food') + ': ' + r.food + '/5</span>' : '') +
          (r.service ? '<span>' + t('greviews.service') + ': ' + r.service + '/5</span>' : '') +
        '</div>'
      : '';
    return '' +
      '<div class="greview-card">' +
        '<div class="greview-head">' +
          '<div class="greview-avatar">' + initials(r.name) + '</div>' +
          '<div class="greview-meta">' +
            '<div class="greview-name">' + r.name + '</div>' +
            '<div class="greview-stars">' + '★'.repeat(r.stars) + '</div>' +
          '</div>' +
          '<div class="greview-g" title="Google">G</div>' +
        '</div>' +
        '<p class="greview-text">' + r.text + '</p>' +
        ratings +
      '</div>';
  }

  function render() {
    const track = document.getElementById('greviewTrack');
    if (!track) return;
    // 2回繰り返してシームレスなループに
    let html = '';
    GOOGLE_REVIEWS.forEach(function (r) { html += buildCard(r); });
    track.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();

    // 矢印ボタンでスクロール
    const track = document.getElementById('greviewTrack');
    const prev = document.getElementById('greviewPrev');
    const next = document.getElementById('greviewNext');
    if (track && prev && next) {
      const step = 340;
      prev.addEventListener('click', function () { track.scrollBy({ left: -step, behavior: 'smooth' }); });
      next.addEventListener('click', function () { track.scrollBy({ left: step, behavior: 'smooth' }); });
    }
  });

  // 言語切替時に再描画（評価ラベル翻訳のため）
  document.addEventListener('nk:langchange', render);
})();
