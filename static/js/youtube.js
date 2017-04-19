(function ($) {

  $(document).bind("DOMContentLoaded",
    function () {

      var playBtn = '<i class="fa fa-play-circle-o play-button"></i>'
      $('div[youtube_id]').each(function () {
        if ($(this).attr('nothumb') !== "yes") {
          var vid = $(this).attr('youtube_id');
          var bgi = `style="background-image: url(https://i.ytimg.com/vi/${vid}/mqdefault.jpg)"`
          var thumb = `<div class="thumb--yt" ${bgi} width="560" height="315">`
          $(this).append(thumb).children().append(playBtn).click(insertIframe).fitToWindow()

        } else { // if image thumbs turned off
          insertIframe.call(this)
        }

      })
    })

  function insertIframe() {
    var $box = $(this).parent()
    var id = $box.attr('youtube_id')
    var autoplay = "autoplay=1&"
    if (!id) { // image thumb is off not called by thumb so don't need parent
      $box = $(this)
      id = $box.attr('youtube_id')
      autoplay = ""
    }
    var mw = $box.attr('maxWidth');
    var wp = $box.attr('wPad');
    var start = $box.attr("start") || 1
    var list = ""
    if ($box.attr("list")) { list = `&list=${$box.attr("list")}` }
    var url = `https://www.youtube.com/embed/${id}?${autoplay}start=${start}`
    var vIframe = `<iframe width = "560" height = "315" src ="${url}${list}" frameborder = "0" allowfullscreen></iframe>`
    $box.html(vIframe).children().fitToWindow($box.data("maxWidth") || mw, $box.data("wPad") || wp)
  }

}(jQuery));

// TODO  grab the video title as well as the thumb for use in thumb display
// only works if server allows cross domain like s3
//http://stackoverflow.com/questions/1760231/how-do-i-get-the-title-of-a-youtube-video-if-i-have-the-video-id
// #var ytApiKey = "...";
// #var videoId = "ylLzyHk54Z0";
// #$.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey, function(data) {
// #alert(data.items[0].snippet.title);
// # });
