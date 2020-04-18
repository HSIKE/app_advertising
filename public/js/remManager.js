(function() {
  function resetRem() {
    const html = document.documentElement;
    const width = html.clientWidth || document.body.clientWidth || window.innerWidth;
    html.style.fontSize = width / 10 + "px";
    window.rem = width / 10;
  }
  window.addEventListener("DOMContentLoaded", resetRem);
  window.addEventListener("resize", resetRem);
})();
