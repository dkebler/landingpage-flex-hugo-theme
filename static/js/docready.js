function resizeElements() {
  navbarSpacer();
  heroResize();
  tagResize('iframe');
  tagResize('.thumb--yt');
  typeResize(); // for section content
  $('.section__content--modal').perfectScrollbar('update');
};

hljs.initHighlightingOnLoad();
$('.section__content--modal').perfectScrollbar();

// requires jquery
$(document).ready(function () {
  resizeElements()
});

// resize elements on change
$(window).resize(function () {
  resizeElements()
});
