$(document).ready(function() {
  console.log("ready!");
  $('.slide-hor').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 2
  });
  $('.box-content > a').on('click', function() {
    console.log("ready to flys!");
    $('.compare-pre').show().animate({
      height: '40px',
      opacity: '1'
    }, 'slow');
  });
  $('.close').on('click', function() {
    console.log("ready to flys!");
    $('.compare-pre').hide().animate({
      height: '-100px',
      opacity: '0'
    }, 'slow');
  });
});