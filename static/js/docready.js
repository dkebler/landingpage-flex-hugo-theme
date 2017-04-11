function resizeElements() {
  navbarSpacer();
  heroResize();
  // tagResize('iframe');
  // tagResize('.thumb--yt');
  typeResize(); // for section content
  $('.section__content--modal').perfectScrollbar('update');
};

function initialize() {
  hljs.initHighlightingOnLoad();
  $('.section__content--modal').perfectScrollbar();
  resizeElements()
};

initialize();

// requires jquery
$(document).ready(function () {

  // bind resize events
  $(window).resize(function () {
    resizeElements()
  });

});
