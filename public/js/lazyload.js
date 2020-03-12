(function() {
  function handler() {
    const vh = window.innerHeight;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const lazyImg = document.querySelectorAll('.img.lazyload');
    lazyImg.forEach((ele) => {
      const dtt = ele.getBoundingClientRect().top;
      if ((dtt <= vh + 100) && !ele.src) {
        ele.src = ele.dataset.src;
        ele.style.opacity = '1';
      }
    });

    const lazyAnimate = document.querySelectorAll('.lazy');
    lazyAnimate.forEach((ele) => {
      const dtt = ele.getBoundingClientRect().top;
      if (dtt <= vh - 40) {
        ele.classList.add('show')
      }
    })
  }
  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('scroll', handler);
})();