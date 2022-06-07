$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
		

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-right"></i></button>'
});