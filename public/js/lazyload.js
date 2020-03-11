(function() {
  function handler() {
    const vh = window.innerHeight;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const lazyImg = document.querySelectorAll('.img.lazy');
    lazyImg.forEach((ele) => {
      if ((ele.parentElement.offsetTop - vh - scrolled <= 200) && !ele.src) {
        ele.src = ele.dataset.src;
      }
    });
  }
  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('scroll', handler);
})();