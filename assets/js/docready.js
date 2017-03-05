// requires jquery
$(document).ready(function () {
  $("#media").lightGallery({
    thumbnail: true,
    thumbWidth: 80,
    controls: true,
    loop: false,
    download: true,
    counter: true,
    // videojs: true
  });
  hero() // size the hero section initially
    // Resize event will run hero function.
  $(window).resize(function () {
    hero();
  });
});
