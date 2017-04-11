/*!
 * adapted from
 * https://github.com/drewbaker/fitToParent
 */

(function ($) {

  $.fn.fitToWindow = function (maxWidth, wPad) {

    console.log("in fit to Window")

    // if more than one element
    this.each(function () {
      let $el = $(this);

      console.log(`${maxWidth} ${wPad} ${$el.data('maxWidth')} ${$el.data('wPad')}`)

      maxWidth = (maxWidth || $el.data('maxWidth')) || 450
      wPad = (wPad || $el.data('wPad')) || 5

      let windowWidth = $(window).width()
      let newWidth = (windowWidth > maxWidth) ? maxWidth : windowWidth - 2 * wPad

      console.log(`${maxWidth} ${wPad} ${newWidth} ${$el.parent().attr('youtube_id')}`)

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
        console.log(`aspect set ${aspect} = ${$el.data('aspect')}`)
        $el.data('maxWidth', maxWidth)
        $el.data('wPad', wPad)
        console.log(`values set ${maxWidth} = ${$el.data('maxWidth')} ${wPad} = ${$el.data('wPad')}`)
        console.log("REGISTERING RESIZE")
        $(window).resize({ el: $el }, function (event) {
          event.data.el.fitToWindow()
        })
      }

      newHeight = (newWidth / aspect);

      console.log(`new width and height before setting ${newWidth} ${newHeight}`)

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
