(function () {
    'use strict';

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
        featureSlider.on('afterChange', handleRotation);
        function handleRotation(_slick, { currentSlide }) {
            var _a;
            const slickOptions = featureSlider.slick('getSlick');
            const slides = ((_a = slickOptions.$slides) === null || _a === void 0 ? void 0 : _a.length) || 0;
            const angle = 360 / slides;
            let ang = angle * currentSlide;
            sliderLogo.css({ '--angle': `${ang}deg` });
        }
    });

})();
