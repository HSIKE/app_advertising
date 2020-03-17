(function() {
  function handler() {
    const vh = window.innerHeight;

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
    });

    const createNotification = document.querySelector('.create');
    const { height, top } = createNotification.getBoundingClientRect();
    if (top * 2 + height <= vh) {
      document.querySelector('.create .img').classList.add('animate');
      document.querySelector('.notification-toast .img').classList.add('animate');
    }
  }
  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('scroll', handler);
})();