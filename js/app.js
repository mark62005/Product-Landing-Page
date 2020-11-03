$(document).ready(function () {

  // menu btn start
  $('.menu-btn').click(function (e) {
    e.preventDefault();
    $('header .nav').toggleClass('active');
  });
  // menu btn end

  // lightbox start
  lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true,
    'positionFromTop': 70,
  })
  // lightbox end

  // scroll to top start
  $('.scroll-to-top a').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      { scrollTop: 0 }, 500);
  });
  // scroll to top end

});