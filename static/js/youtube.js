(function ($) {

  $(document).bind("DOMContentLoaded",
    function () {
      // TODO also grad maxwith and window padding data
      var playBtn = '<i class="fa fa-play-circle-o play-button"></i>'
      $('div[youtube_id]').each(function () {
        var vid = $(this).attr('youtube_id');
        var mw = $(this).attr('maxWidth');
        var wp = $(this).attr('wPad');
        var bgi = `style="background-image: url(https://i.ytimg.com/vi/${vid}/mqdefault.jpg)"`
        var thumb = `<div class="thumb--yt" ${bgi} width="560" height="315">`
        $(this).append(thumb).children().append(playBtn).click(insertIframe).fitToWindow(mw, wp)
      })
    });

  function insertIframe() {
    var $box = $(this).parent()
    var id = $box.attr('youtube_id')
    var start = $box.attr("start") || 1
    var list = ""
    if ($box.attr("list")) { list = `&list=${$box.attr("list")}` }
    var url = `https://www.youtube.com/embed/${id}?autoplay=1&start=${start}`
    var vIframe = `<iframe width = "560" height = "315" src ="${url}${list}" frameborder = "0" allowfullscreen></iframe>`
    $box.html(vIframe).children().fitToWindow($box.data("maxWidth"), $box.data("wPad"))
  }

}(jQuery));
