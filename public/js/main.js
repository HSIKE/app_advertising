(function() {
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