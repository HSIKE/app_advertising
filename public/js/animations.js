(function() {
  document.querySelector('.logo img').classList.add('animate');
  document.querySelectorAll('.slogan p').forEach((el) => {
    el.classList.add('animate');
  });

  document.querySelectorAll('.btn').forEach((el) => {
    el.classList.add('animate');
  });
})();