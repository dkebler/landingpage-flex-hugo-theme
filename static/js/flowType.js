/*
 * Adapted from FlowType.JS v1.1
 * Copyright 2013-2014, Simple Focus http://simplefocus.com/
 *
 */
$.fn.flowtype = function (options) {

  // Establish default settings/variables
  // ====================================
  var settings = $.extend({
      maximum: 9999,
      minimum: 1,
      maxFont: 9999,
      minFont: 1,
      fontRatio: 35
    }, options),

    // the magic math
    // =================
    resize = function (el) {
      var $el = $(el),
        elw = $el.width(),
        width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
        fontBase = width / settings.fontRatio,
        fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
      $el.css('font-size', fontSize + 'px');
    };

  // Make the magic visible
  // ======================
  this.each(function () {
    // resize text in each element
    resize(this);
  });

};
