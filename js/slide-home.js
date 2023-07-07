document.addEventListener('DOMContentLoaded', function () {

    // Swiper home-slider
    const homeSlider = new Swiper('.home-slider', {
        speed: 3000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        centeredSlides: true,
        runCallbacksOnInit: true,
        // loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // interval: 7000,
        pagination: {
            el: '.home-slider__pogination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let indT = total >= 10 ? total : `0${total}`;
                let indC = total >= 10 ? current : `0${current}`;
                return `<b>${indC}</b><span></span> ${indT}`;
            },
            clickable: true,
        },
        scrollbar: {
            el: '.home-siler__scrollbar',
            draggable: true
        },
        navigation: {
            prevEl: '.home-slider__prev',
            nextEl: '.home-slider__next'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },

        // остановка при наведении мыши
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    // this.autoplay.stop();
                    this.autoplay.start();
                });

                this.el.addEventListener('mouseleave', () => {
                    // this.autoplay.start();
                    this.autoplay.stop();
                });
            }
        },
    });

});