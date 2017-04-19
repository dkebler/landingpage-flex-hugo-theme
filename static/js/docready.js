// TODO register these individually with window resize use self callled function
function resizeElements() {
  navbarSpacer();
  $('.box--embed iframe').fitToWindow()
  $('.box--image img').fitToWindow()
  heroResize();
  typeResize(); // for section content
  $('.section__content--modal').perfectScrollbar('update');
  $('.nav-bar__menu').perfectScrollbar('update');
  $('.code').perfectScrollbar('update');
};

function initialize() {
  hljs.initHighlightingOnLoad();
  $('.section__content--modal').perfectScrollbar();
  $('.nav-bar__menu').perfectScrollbar();
  $('code').perfectScrollbar('update');
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
