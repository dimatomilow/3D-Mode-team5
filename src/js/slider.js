$(document).ready(() => {
  $('.hero__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$('.hero__slider').on('init reInit', (e, slick) => {
  if (slick.slideCount <= slick.options.slidesToShow) {
    slick.slickAdd(slick.$slides.clone());
  }
});
