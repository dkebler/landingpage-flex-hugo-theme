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

function itemResize(item, maxWidth = 450, widthPadding = 30) {
  let windowWidth = $(window).width()
  let width = (windowWidth > maxWidth) ? maxWidth : windowWidth - widthPadding
  console.log(`passed width ${width}`)
  jQuery(item).fitToParent({
    heightOffset: 0, // (int) Put some space around the element
    // widthOffset: 5, // (int) Put some space around the element
    // boxHeight: , // (int) Will look for .size-parent, or fallback to parent size
    boxWidth: width // (int) Will look for .size-parent, or fallback to parent size
      // callback: function (newWidth, newHeight) {
      //   // alert(`after w h ${newWidth} ${newHeight}`)
      //   // Fires after fitting is complete
      // }
  })
}

// /*
//  * throttledresize: special jQuery event that happens at a reduced rate compared to "resize"
//  *
//  * latest version and complete README available on Github:
//  * https://github.com/louisremi/jquery-smartresize
//  *
//  * Copyright 2012 @louis_remi
//  * Licensed under the MIT license.
//  *
//  * This saved you an hour of work?
//  * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
//  */
// (function ($) {
//
//   var $event = $.event,
//     $special,
//     dummy = { _: 0 },
//     frame = 0,
//     wasResized, animRunning;
//
//   $special = $event.special.throttledresize = {
//     setup: function () {
//       $(this).on("resize", $special.handler);
//     },
//     teardown: function () {
//       $(this).off("resize", $special.handler);
//     },
//     handler: function (event, execAsap) {
//       // Save the context
//       var context = this,
//         args = arguments;
//
//       wasResized = true;
//
//       if (!animRunning) {
//         setInterval(function () {
//           frame++;
//
//           if (frame > $special.threshold && wasResized || execAsap) {
//             // set correct event type
//             event.type = "throttledresize";
//             $event.dispatch.apply(context, args);
//             wasResized = false;
//             frame = 0;
//           }
//           if (frame > 9) {
//             $(dummy).stop();
//             animRunning = false;
//             frame = 0;
//           }
//         }, 30);
//         animRunning = true;
//       }
//     },
//     threshold: 0
//   };
//
// })(jQuery, 'throttledResize');
//
// // debouncing function for window resize from John Hann
// // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
// (function ($, sr) {
//   var debounce = function (func, threshold, execAsap) {
//       var timeout;
//
//       return function debounced() {
//         var obj = this,
//           args = arguments;
//
//         function delayed() {
//           if (!execAsap)
//             func.apply(obj, args);
//           timeout = null;
//         };
//
//         if (timeout)
//           clearTimeout(timeout);
//         else if (execAsap)
//           func.apply(obj, args);
//
//         timeout = setTimeout(delayed, threshold || 100);
//       };
//     }
//     // smartresize
//   jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn, 50)) : this.trigger(sr); };
//
// })(jQuery, 'debounceResize');
