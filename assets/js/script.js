$(document).ready(function () {
  // Initialize carousel only if element exists
  if ($(".feedback-slider").length) {
    $(".feedback-slider").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      navText: [
        "<i class = 'fas fa-arrow-left'></i>",
        "<i class = 'fas fa-arrow-right'></i>",
      ],
    });
  }

  // stop animation on resize
  let resizeTimer;
  $(window).resize(function () {
    $(document.body).addClass("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      $(document.body).removeClass("resize-animation-stopper");
    }, 400);
  });

  // Mobile menu functionality
  $(".navbar-show-btn").click(function () {
    $(".navbar-box").addClass("navbar-box-show");
  });

  $(".navbar-hide-btn").click(function () {
    $(".navbar-box").removeClass("navbar-box-show");
  });

  // Set active nav based on current page
  var currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "index.html") {
    $('.nav-link[href="index.html"]').addClass("nav-active");
  } else {
    $('.nav-link[href="' + currentPage + '"]').addClass("nav-active");
  }
});
