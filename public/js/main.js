(function() {
  (function() {
    var i18ns = document.querySelectorAll('[data-i18n]');
    for (var i = 0, len = i18ns.length; i < len; i ++) {
      var el = i18ns[i];
      el.innerText = window.i18n[el.dataset.i18n];
    }
    var platforms = document.querySelectorAll('.img.platform');
    for (var j = 0; j < platforms.length; j ++) {
      var ele = platforms[j];
      ele.src = window.isIOS ? ele.dataset.srcIos : ele.dataset.srcAndroid;
    }
    setInterval(() => {
      var slideLeft = document.querySelector('.slide-left');
      var slideRight = document.querySelector('.slide-right');
      var leftSize = slideLeft.getBoundingClientRect();
      var rightSize = slideRight.getBoundingClientRect();
      if (leftSize.left > -16 * window.rem) {
        slideLeft.style.left = `${leftSize.left - 2}px`;
      } else {
        slideLeft.style.left = '0';
      }
      if (rightSize.left < -5.215 * window.rem) {
        slideRight.style.left = `${rightSize.left + 2}px`
      } else {
        slideRight.style.left = `-${21.22 * window.rem}px`;
      }
    }, 50)
  })();

  function scrollHandler() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const home = document.querySelector('.page.home');
    const logo = document.querySelector('.home .logo');
    const slogan = document.querySelector('.home .slogan');
    const btns = document.querySelector('.home .btns');
    const guide = document.querySelector('.home .guide');
    const mobiles = document.querySelector('.summary .mobiles');
    const mobileList = document.querySelectorAll('.summary .mobile');

    const homeHeight = home.offsetHeight;
    const zoomFactor = Math.min(Math.max(scrolled / homeHeight, 0), 1);

    const logoTranslateY = (1 + 1.44 * zoomFactor) * 3.96;
    const sloganTranslateY = (1 + 0.12 * zoomFactor) * 9.81;

    if (zoomFactor >= 0 && zoomFactor < 1) {
      const logoZoom = 1 - 0.6 * zoomFactor;
      const sloganZoom = 1 - 0.45 * zoomFactor;
      const btnsOpacity = Math.max(1 - 5 * zoomFactor, 0);
      const btnsZoom = 1 - 0.5 * zoomFactor;

      logo.style.cssText = `
        position:fixed;
        transform:translateY(${logoTranslateY}rem) scale(${logoZoom});
      `;
      slogan.style.cssText = `
        position:fixed;
        transform:translateY(${sloganTranslateY}rem) scale(${sloganZoom});
      `;
      btns.style.cssText = `
        opacity:${btnsOpacity};
        position:fixed;
        visibility:${btnsOpacity > 0 ? 'visible' : 'hidden'}; 
        transform:scale(${btnsZoom});
      `;
      guide.style.cssText = `
        visibility: visible;
        opacity:${1 - 5 * zoomFactor};
        bottom:
      `;

      mobiles.style.position = 'fixed';
      mobileList.forEach((m) => {
        const translateY = m.dataset.topOrigin * (1 - zoomFactor) + m.dataset.top * zoomFactor;
        const translateX = m.dataset.leftOrigin * (1 - zoomFactor) + m.dataset.left * zoomFactor;
        m.style.cssText = `
          opacity: ${3 * zoomFactor};
          transform: translate3D(${translateX}rem, ${translateY}rem, 0);
        `;
      });
    } else if (zoomFactor >= 1) {
      logo.style.cssText = `
        position:absolute;
        transform:translateY(${logoTranslateY + homeHeight / window.rem}rem) scale(0.4);
      `;
      slogan.style.cssText = `
        position:absolute;
        transform:translateY(${sloganTranslateY + homeHeight / window.rem}rem) scale(0.55);
      `;
      btns.style.cssText = 'opacity:1;position:absolute;';
      guide.style.cssText = 'visibility:hidden;';

      mobiles.style.position = 'absolute';
      mobileList.forEach((m) => {
        const translateY = m.dataset.top;
        const translateX = m.dataset.left;
        m.style.cssText = `
          opacity: 1;
          transform: translate3D(${translateX}rem, ${translateY}rem, 0);
        `;
      });
    }
  }

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('DOMContentLoaded', scrollHandler);
})();