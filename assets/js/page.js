// hero resizer
function hero() {
  jQuery('#hero').css({
    width: jQuery(window).width(),
    height: jQuery(window).height()
  });
}

// Smooth Scroll Register click handler for ID anchors
$('a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// navbar - preload
(function navbar() {

  // var navButton = document.getElementById("nav-menu-button"),
  // var navButton = document.getElementById("nav-container"),
  //   navUl = document.getElementsByClassName("nav-ul");

  function toggleMobileMenu() {
    $('.nav-ul')[0].style.transition = "max-height 0.5s";
    $('.nav-ul')[0].classList.toggle("hide-ul");
  }
  // navLink.onclick = toggleMobileMenu;
  //  navButton.onclick = toggleMobileMenu;
  $('#nav-menu-button, nav a').click(toggleMobileMenu)

}());
