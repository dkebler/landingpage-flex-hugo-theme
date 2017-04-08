(function initialze() {
  navbarSpacer();
  heroResize();
  itemResize('iframe');
  typeResize(); // for section content
  hljs.initHighlightingOnLoad();
  $('.section__content--modal').perfectScrollbar();
})();

// requires jquery
$(document).ready(function () {

});

// resize elements on change
$(window).resize(function () {
  navbarSpacer();
  heroResize();
  itemResize('iframe');
  typeResize();
  $('.section__content--modal').perfectScrollbar('update');
});
