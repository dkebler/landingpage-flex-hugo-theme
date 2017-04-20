// Smooth Scroll Init - Register click handler for ID anchors
$('a[href*="#"]:not(a[modal])').click(function () {
  if (location.pathname.replace(/\/$/, "") == this.pathname.replace(/\/$/, "") && location.hostname == this.hostname) {
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

// using an image for phone and toggle hide it
$('#cell').click(function () { $('#cell-number').toggleClass("hide"); });
// $('#phone').click(function () { alert('phone clicked'); return false; });

function navbarSpacer() {
  $('.nav-bar-spacer').css({
    height: $(".nav-bar__header").outerHeight(true),
  });
}

// hero resizer
function heroResize(bfr = 30) {
  var h = $(window).height() - $(".nav-bar__header").outerHeight(true),
    w = $(window).width(),
    fr = bfr * h / w
    // console.log('w,h,fr', w, h, fr)
    // minimum base font ratio
  fr = (fr > bfr) ? bfr : fr
    // adjust for short viewport height
  fr = (w / h > 1 && h < 700) ? 30 * w / h : fr
    //console.log('fr after', fr)

  $('#hero').css({
    width: w + 15,
    height: h / w > 1.5 ? w * 1.5 : h,
  });

  var mf = w / h > 1 ? 0 : 12

  $('#hero').flowtype({
    maxFont: 30,
    minFont: mf,
    fontRatio: fr
  });
}

function typeResize(fr = 20) {
  $('main:not(#hero)').flowtype({
    // maximum: 1000,
    minFont: 12,
    maxFont: 25,
    fontRatio: fr
  })
}

// Lightbox for Gallery

function lightgallery(id) {
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

// Modal tool.  Must use modal template for content
(function ($) {

  // extend jquery so remove handlers can be added and removed at the right time in a group
  $.fn.modalHandlers = function (state = 'on') {

    if (state === 'on') {
      $(document).on('click', modalClickOutside);
      $(document).keypress(modalEsc);
      this.find('a[modal-close]').on('click', modalClickCloser);
      return this
    }

    if (state === 'off') {
      $(document).off('click', modalClickOutside);
      $(document).off('keypress', modalEsc);
      this.find('a[modal-close]').off('click', modalClickCloser);
      return this
    }

    return false;

  };

  // modal event handlers - add more if you want - add them to extension above
  function modalEsc(event) {
    if (event.key === "Escape") { modalHide() }
  }

  function modalClickOutside(event) {
    var container = $(".section__container--modal");
    if (!container.is(event.target) && // If the target of the click isn't the container...
      container.has(event.target).length === 0) // ... nor a descendant of the container
    { modalHide(); }
  }

  function modalClickCloser(event) {
    modalHide();
  }

  // modal show and hide
  function modalShow(modal_hash) {
    var closer = "<a modal-close class='fa-stack fa-2x' ><i class='fa fa-circle-thin fa-stack-2x'></i><i class='fa fa-close fa-stack-1x'></i></a>"
    $(modal_hash).find('.section__headline').append(closer).end().modalHandlers().addClass("current").css('display', 'flex');
  }

  function modalHide() {
    $('.section--modal.current').hide().modalHandlers("off").removeClass("current").find('a[modal-close]').remove;
  }

  // Register click event for all modal links on page
  $("a[modal]").click(function () {
    if (location.pathname.replace(/\/$/, "") == this.pathname.replace(/\/$/, "") && location.hostname == this.hostname) {
      var target = this.hash;
      modalShow(target);
    } else {
      alert(`modal display of off page content not supported`);
    }
    return false;
  });

}(jQuery));

// end modal
