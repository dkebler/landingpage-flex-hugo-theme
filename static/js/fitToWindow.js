/*!
 * adapted from
 * https://github.com/drewbaker/fitToParent
 */

(function ($) {

  $.fn.fitToWindow = function (maxWidth, wPad) {

    // console.log("in fit to Window")

    // if more than one element
    this.each(function () {
      let $el = $(this);

      // console.log(`element ${$el.prop("tagName")} ${$el.attr("class")} parent ${$el.parent().attr('class')}`)
      // console.log(`before ${maxWidth} ${wPad} ${$el.data('maxWidth')} ${$el.data('wPad')}`)
      var mw = $el.parent().attr('maxWidth');
      maxWidth = mw ? mw : maxWidth
      maxWidth = (maxWidth || $el.data('maxWidth')) || 450
      var wp = $el.parent().attr('wPad');
      wPad = wp ? wp : wPad
      wPad = (wPad || $el.data('wPad')) || 5

      let windowWidth = $(window).width()
      let newWidth = (windowWidth > maxWidth) ? maxWidth : windowWidth - 2 * wPad

      // console.log(`after ${maxWidth} ${wPad} ${newWidth}`)

      // Initial Aspect given in attributes by element itself
      let setWidth = $el.attr('width');
      let setHeight = $el.attr('height');

      if (!setWidth || !setHeight) {
        setWidth = $el.width();
        setHeight = $el.height();
      }

      // retrieve aspect ratio for element if none then set (first time)
      var aspect = $el.data('aspect');
      if (!aspect) {
        aspect = setWidth / setHeight;
        $el.data('aspect', aspect);
        // console.log(`aspect set ${aspect} = ${$el.data('aspect')}`)
        $el.data('maxWidth', maxWidth)
        $el.data('wPad', wPad)
          // console.log(`values set ${maxWidth} = ${$el.data('maxWidth')} ${wPad} = ${$el.data('wPad')}`)
          // console.log("REGISTERING RESIZE")
        $(window).resize({ el: $el }, function (event) {
          event.data.el.fitToWindow()
        })
      }

      newHeight = (newWidth / aspect);

      // TODO conform to enclosing .box with max-height set
      //  need to detect wrap so adjustement can be made
      // http://stackoverflow.com/questions/40012428/how-to-detect-css-flex-wrap-event
      // var maxParentHeight = parseInt($el.parents('.box').filter(function () {
      //   // var mel = $(this).attr('class');
      //   // var mxh = $(this).css('max-height')
      //   // console.log(`${mel} ${mxh}`)
      //   return $(this).css("max-height") != "none"
      // }).first().css('max-height'))
      //
      // console.log(`max-height of parent ${maxParentHeight}`)
      //
      // if (maxParentHeight) {
      //   newHeight = maxParentHeight;
      //   newWidth = (newHeight * aspect);
      // }

      // console.log(`new width and height before setting ${newWidth} ${newHeight}`)

      // Set new size of element
      $el.width(newWidth);
      $el.height(newHeight);
    });

  }

}(jQuery));

// one time fit a element based on selector to the window
let fitToWindow = function (sel) {
  if (sel) {
    $(sel).fitToWindow()
  } else { Alert("no selector provided for resize event to call fitToWindow") }
}

// register a selector to be fitted to window on window resize
let onResizeFitToWindow = function (sel) {
  if (sel) {
    $(window).resize(function () {
      $(sel).fitToWindow()
    })
  } else { Alert("no selector provided for resize event to call fitToWindow") }
}
