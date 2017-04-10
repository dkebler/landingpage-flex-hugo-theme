/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

(function ($) {

  $.fn.tagResize = function (el) {
    tagResize(el);
  }

  $(document).bind("DOMContentLoaded",
    function () {
      var attr = 'youtube_id';
      var $box = $('div[' + attr + ']');
      var vid = $box.attr(attr);
      var bgi = `style="background-image: url(https://i.ytimg.com/vi/${vid}/mqdefault.jpg)"`
      var thumb = `<div class="thumb--yt" ${bgi} width="560" height="315">`
      var playBtn = '<i class="fa fa-play-circle-o play-button"></i>'
      $box.append(thumb).children().append(playBtn).click(insertIframe)
        //.resize(sel + ' > img')
    });

  function insertIframe() {
    var $box = $(this).parent()
    id = $box.attr('youtube_id')
    var vIframe = `<iframe width = "560" height = "315" src = "https://www.youtube.com/embed/${id}?autoplay=1" frameborder = "0" allowfullscreen></iframe>`
    console.log(vIframe)
    $box.html(vIframe)
  }

  // .resize(sel + ' > iframe')
  // }

}(jQuery));
