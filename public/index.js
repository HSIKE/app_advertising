(($) => {
  $('[data-i18n]').each((i, domEl) => {
    const el = $(domEl);
    el.text(window.lang[i]);
  });
})(window.Zepto);