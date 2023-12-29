$(() => {
  const options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    dots: true,
    appendDots: '.feature-slider-dots',
  };

  const featureSlider = $('.feature-slider').slick(options);
  const sliderLogo = featureSlider.next('.slider-logo');
  let currentSlide = 0;

  featureSlider.on('afterChange', handleRotation);

  function handleRotation(_slick: unknown) {
    currentSlide++;

    const slickOptions = featureSlider.slick('getSlick');
    const slides = slickOptions.$slides?.length || 0;
    const angle = 360 / slides;
    let ang = angle * currentSlide;

    sliderLogo.addClass('add-transition').css({ '--angle': `${ang}deg` });
  }
});
