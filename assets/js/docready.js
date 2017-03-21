// requires jquery
$(document).ready(function () {

  // initialize
  heroResize();
  itemResize('iframe');
  typeResize(); // for section content
  lightbox('#4005') // TODO put this in template instead of hard coding using parameter

  // resize elements on change
  $(window).resize(function () {
    heroResize();
    itemResize('iframe');
    typeResize();
  });

});
