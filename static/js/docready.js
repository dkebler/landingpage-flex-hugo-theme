// requires jquery
$(document).ready(function () {

  // initialize
  navbarSpacer();
  // $('#page').css("width", $(window).width());
  heroResize();
  itemResize('iframe');
  typeResize(); // for section content
  hljs.initHighlightingOnLoad();

  // resize elements on change
  $(window).resize(function () {
    // $('#page').css("width", $(window).width());
    navbarSpacer();
    heroResize();
    itemResize('iframe');
    typeResize();
  });

});;
