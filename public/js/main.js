(function() {
  const i18ns = document.querySelectorAll('[data-i18n]');
  i18ns.forEach((el) => {
    el.innerHTML = window.i18n[el.dataset.i18n];
  });
  const platforms = document.querySelectorAll('.img.platform');
  platforms.forEach((el) => {
    el.src = window.isIOS ? el.dataset.srcIos : el.dataset.srcAndroid;
  });
  const stores = document.querySelectorAll('a.btn');
  stores.forEach((el) => {
    el.href = window.isIOS ? el.dataset.hrefIos : el.dataset.hrefAndroid;
  });

  window.addEventListener('load', function() {
    document.querySelector('.logo img').classList.add('animate');
    document.querySelectorAll('.slogan p').forEach((el) => {
      el.classList.add('animate');
    });
    document.querySelectorAll('.btn').forEach((el) => {
      el.classList.add('animate');
    });
  });

  setInterval(() => {
    const slideLeft = document.querySelector('.slide-left');
    const slideRight = document.querySelector('.slide-right');
    const leftSize = slideLeft.getBoundingClientRect();
    const rightSize = slideRight.getBoundingClientRect();
    if (leftSize.left > -16 * window.rem) {
      slideLeft.style.left = `${(leftSize.left - 1) / window.rem}rem`;
    } else {
      slideLeft.style.left = '0';
    }
    if (rightSize.left < -5.215 * window.rem) {
      slideRight.style.left = `${(rightSize.left + 1) / window.rem}rem`
    } else {
      slideRight.style.left = '-21.22rem';
    }
  }, 25);

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
