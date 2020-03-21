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

    const createSize = document.querySelector('.example.notification').getBoundingClientRect();
    if (createSize.top <= 0.3* vh) {
      document.querySelector('.create .img').classList.add('animate');
      document.querySelector('.notification-toast .img').classList.add('animate');
    }
    const lossSize = document.querySelector('.loss-mask').getBoundingClientRect();
    if (lossSize.top <= 0.3 * vh) {
      document.querySelector('.loss-mask').style.visibility = 'visible';
      document.querySelector('.loss1 .img').classList.add('animate');
      document.querySelector('.loss2 .img').classList.add('animate');
    }
    const shareSize = document.querySelector('.share-mask').getBoundingClientRect();
    if (shareSize.top <= 0.3 * vh) {
      document.querySelector('.share-mask').style.visibility = 'visible';
      document.querySelector('.share-card').style.visibility = 'visible';
      document.querySelector('.share-apps .img').classList.add('animate');
    }
    const priceSize = document.querySelector('img.price').getBoundingClientRect();
    if (priceSize.top <= 0.3 * vh) {
      document.querySelector('.price-toast .img').classList.add('animate')
    }
  }

  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('scroll', handler);
})();