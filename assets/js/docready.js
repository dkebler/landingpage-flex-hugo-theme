// requires jquery
$(document).ready(function () {
  // Intialize all the media i.e. photos with "media" id
  // TODO use Hugo params to initialize multiple galleries/albums
  $("#4005").lightGallery({
    thumbnail: true,
    thumbWidth: 80,
    controls: true,
    loop: false,
    download: true,
    counter: true,
    // videojs: true
  });

  // initialize hero size
  heroResize();
  // iframeResize();
  // jQuery('iframe').fitToParent(); // for all iframes

  $('section').flowtype({
    // maximum: 1000,
    minFont: 12,
    maxFont: 25,
    fontRatio: 20
  });

  $('#hero').flowtype({
    maxFont: 60,
    fontRatio: 15
  });

  // resize elements on change
  $(window).resize(function () {
    heroResize();
    // iframeResize();
    // jQuery('iframe').fitToParent();
  });

});
