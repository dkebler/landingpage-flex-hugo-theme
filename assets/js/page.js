// hero resizer
function heroResize() {
  jQuery('#hero').css({
    width: jQuery(window).width(),
    height: jQuery(window).height()
  });
}

// Smooth Scroll Init - Register click handler for ID anchors
$('a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      var targetOffset = target.offset().top - $(".nav-bar__header").outerHeight(true);
      // console.log(targetOffset, target.offset().top, $(".nav-bar__header").outerHeight())
      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000);
      return false;
    }
  }
});

// navbar - preload
(function navbarInit() {

  function toggleMobileMenu() {
    $('.nav-bar__menu')[0].style.transition = "max-height 0.5s";
    $('.nav-bar__menu')[0].classList.toggle("hide-menu");
  }
  $('.nav-bar__menu-button, .nav-bar__menu-item > a').click(toggleMobileMenu)

}());

// function iframeResize(percent = 1) {
//   console.log('window width', percent, $(window).width())
//   console.log('section_content', percent, $('.section__content').width())
//   console.log('box embed width', percent, $('.box__embed').width())
//   $('iframe').each(function (i) {
//     console.log('aspect', this.aspect)
//     $(this).attr('height', this.aspect * $('.box__embed').width())
//     $(this).attr('width', $('.box__embed').width())
//   })
//   console.log('new width and height', $('iframe')[0].width, $('iframe')[0].height)
//   console.log('new width and height', $('iframe')[1].width, $('iframe')[1].height)
// }
//
// // get all original iframe dimensions
// (function iframeInit() {
//   $('iframe').each(function (i) {
//     console.log(i, $(this).attr('height'), $(this).attr('width'));
//     this.aspect = $(this).attr('height') / $(this).attr('width')
//     console.log('aspect iframe', i, this.aspect)
//   })
// }());
