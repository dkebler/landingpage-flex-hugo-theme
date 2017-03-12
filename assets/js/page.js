// hero resizer
function heroResize() {
  $('#hero').css({
    width: $(window).width(),
    height: $(window).height()
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

// navbar mobile toggle - preload
(function navbarInit() {

  function toggleMobileMenu() {
    $('.nav-bar__menu')[0].style.transition = "max-height 0.5s";
    $('.nav-bar__menu')[0].classList.toggle("hide-menu");
  }
  $('.nav-bar__menu-button, .nav-bar__menu-item > a').click(toggleMobileMenu)

}());

function iframeResize(maxWidth = 450) {
  var windowWidth = $(window).width()
  var width = (windowWidth > maxWidth) ? maxWidth : windowWidth - 20
    // alert(`before ww width ${windowWidth} ${width}`)
  jQuery('iframe').fitToParent({
    heightOffset: 0, // (int) Put some space around the element
    // widthOffset: 5, // (int) Put some space around the element
    // boxHeight: , // (int) Will look for .size-parent, or fallback to parent size
    boxWidth: width, // (int) Will look for .size-parent, or fallback to parent size
    callback: function (newWidth, newHeight) {
      // alert(`after w h ${newWidth} ${newHeight}`)
      // Fires after fitting is complete
    }
  })
}

// debouncing function for window resize from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function ($, sr) {
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced() {
        var obj = this,
          args = arguments;

        function delayed() {
          if (!execAsap)
            func.apply(obj, args);
          timeout = null;
        };

        if (timeout)
          clearTimeout(timeout);
        else if (execAsap)
          func.apply(obj, args);

        timeout = setTimeout(delayed, threshold || 100);
      };
    }
    // smartresize
  jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');
