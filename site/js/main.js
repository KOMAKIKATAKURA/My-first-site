$(function () {
    
    $('#hamburger').on('click', function () {
        $('#sp-menu').addClass('open');
    });
    $('#close-menu').on('click', function () {
        $('#sp-menu').removeClass('open');
    });


$('.top2').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true
autoplay: true,
  autoplaySpeed: 2000
});






});