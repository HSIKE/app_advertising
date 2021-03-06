(function() {
  function handler() {
    const vh = window.innerHeight;

    const lazyImg = document.querySelectorAll('.img.lazyload');
    lazyImg.forEach((ele) => {
      const dtt = ele.getBoundingClientRect().top;
      if ((dtt <= 1.4 * vh) && !ele.src) {
        ele.src = ele.dataset.src;
        ele.style.opacity = '1';
      }
    });

    const lazyAnimate = document.querySelectorAll('.lazy');
    lazyAnimate.forEach((ele) => {
      const dtt = ele.getBoundingClientRect().top;
      if (dtt <= vh - 40) {
        ele.classList.add('animate')
      }
    });

    const createSize = document.querySelector('.example.notification').getBoundingClientRect();
    if (createSize.top <= 0.2 * vh) {
      document.querySelector('.create .img').classList.add('animate');
      document.querySelector('.notification-toast .img').classList.add('animate');
    }
    const lossSize = document.querySelector('.loss-mask').getBoundingClientRect();
    if (lossSize.top <= 0.2 * vh) {
      document.querySelector('.loss-mask').style.visibility = 'visible';
      document.querySelector('.loss1 .img').classList.add('animate');
      document.querySelector('.loss2 .img').classList.add('animate');
    }
    const shareSize = document.querySelector('.share-mask').getBoundingClientRect();
    if (shareSize.top <= 0.2 * vh) {
      document.querySelector('.share-mask').style.visibility = 'visible';
      document.querySelector('.share-card').style.visibility = 'visible';
      document.querySelector('.share-apps .img').classList.add('animate');
    }
    const priceSize = document.querySelector('img.price').getBoundingClientRect();
    if (priceSize.top <= 0.2 * vh) {
      document.querySelector('.price-toast .img').classList.add('animate')
    }
    const rotate = document.querySelector('.bybit').getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    if ((rotate.top <= 0.35 * vh) || (scrollTop + vh) === totalHeight) {
      document.querySelector('.bybit .img.rotate').classList.add('animate')
    }
  }

  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('scroll', handler);
})();
