let bestworksSlider = new Swiper('.bestworks-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 800,
    // количество слайдов для показа одновременно
    // slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        2400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 1,
        },
    },
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.bestworks-slider-button-next',
        prevEl: '.bestworks-slider-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    simulateTouch: true,
    touchRadio: 1,
    touchAngle: 45,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // mousewheel: {
    //     sensitivity: 1,
    //     eventsTarget: ".bestworks-slider"
    // },

    // freeMode: true,

});


// запуск автопрокрутки при наведении
let sliderBlock = document.querySelector
    ('.bestworks-slider');

sliderBlock.addEventListener("mouseenter", function (e) {
    bestworksSlider.params.autoplay.disableOnInteraction = false;
    bestworksSlider.params.autoplay.delay = 2000;
    bestworksSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
    bestworksSlider.autoplay.stop();
});