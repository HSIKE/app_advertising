(($) => {
  $('[data-i18n]').each((i, domEl) => {
    const el = $(domEl);
    el.text(window.lang[el.attr('data-i18n')]);
  });
})(window.Zepto);