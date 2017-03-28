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

// navbar mobile toggle - preload
(function navbarInit() {

  function toggleMobileMenu() {
    $('.nav-bar__menu')[0].style.transition = "max-height 0.5s";
    $('.nav-bar__menu')[0].classList.toggle("hide-menu");
  }
  $('.nav-bar__menu-button, .nav-bar__menu-item > a').click(toggleMobileMenu)

}());

// hero resizer
function heroResize(bfr = 15) {
  var h = $(window).height(),
    w = $(window).width(),
    fr = bfr * h / w
    // console.log('w,h,fr', w, h, fr)
    // minimum base font ratio
  fr = (fr > bfr) ? bfr : fr
    // adjust for short viewport height
  fr = (w / h > 1 && h < 600) ? 15 * w / h : fr
    //console.log('fr after', fr)

  $('#hero').css({
    width: w + 10,
    height: h / w > 1.5 ? w * 1.5 : h,
    'margin-top': $('#nav-bar').height()
  });

  $('#hero').flowtype({
    maxFont: 50,
    minFont: 18,
    fontRatio: fr
  });
}

// child item resize based on parent container (i.e. flexbox)
function itemResize(item, maxWidth = 450, widthPadding = 30) {
  let windowWidth = $(window).width()
  let width = (windowWidth > maxWidth) ? maxWidth : windowWidth - widthPadding
    // console.log(`passed width ${width}`)
  jQuery(item).fitToParent({
    heightOffset: 0, // (int) Put some space around the element
    // widthOffset: 5, // (int) Put some space around the element
    // boxHeight: , // (int) Will look for .size-parent, or fallback to parent size
    boxWidth: width // (int) Will look for .size-parent, or fallback to parent size
      // callback: function (newWidth, newHeight) {}
  })
}

function typeResize() {
  $('.section').flowtype({
    // maximum: 1000,
    minFont: 12,
    maxFont: 25,
    fontRatio: 20
  })
}

// Lightbox for Gallery

function lightbox(id) {
  // Intialize all the media i.e. photos with "media" id
  // TODO use Hugo params to initialize multiple galleries/albums
  var lg = $(id).lightGallery({
    thumbnail: true,
    thumbWidth: 80,
    controls: true,
    loop: false,
    download: false,
    counter: true,
    // videojs: true
  });

  lg.on('onBeforeOpen.lg', function (event) {
    $('.nav-bar').css("display", "none")
  });

  lg.on('onCloseAfter.lg', function (event) {
    $('.nav-bar').css("display", "flex")
  });

}
