(function() {
  const vh = window.innerHeight;

  function scrollHandler() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const logo = document.querySelector('.home .logo');
    const slogan = document.querySelector('.home .slogan');
    const btns = document.querySelector('.home .btns');
    const guide = document.querySelector('.home .guide');
    const mobiles = document.querySelector('.summary .mobiles');
    const mobileList = document.querySelectorAll('.summary .mobile');

    const zoomFactor = Math.min(Math.max(scrolled / vh, 0), 1);

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
        opacity:${1 - 7 * zoomFactor};
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
        transform:translateY(${logoTranslateY + vh / rem}rem) scale(0.4);
      `;
      slogan.style.cssText = `
        position:absolute;
        transform:translateY(${sloganTranslateY + vh / rem}rem) scale(0.55);
      `;
      btns.style.cssText = 'opacity:1;position:absolute;';
      guide.style.cssText = 'visibility: visible;opacity:0;';
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