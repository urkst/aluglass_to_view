$(document).ready(function () {

    let bestItem = $(".best-item");
    let modalBestworksImage = $(".wrapper-bestworks-image-slider");
    let bestworksSliderCloseButton = $(".wrapper-bestworks-image-slider-close-button");

    let numbActivSlide = 0;
    let currentBestItemImg = "01";

     // фракция
    let mySliderAllSlides = document.querySelector('.image-slider__total');
    let mySliderCurrentSlide = document.querySelector('.image-slider__current');

    // открытие модального окна с 
    function toggleModal() {
        
        currentBestItemImg = $(this).attr("data-best-item-img");

        if (currentBestItemImg == "01") {
            numbActivSlide = 0;
            mySliderCurrentSlide.innerHTML = 1;
            // slideBestwork.params.initialSlide = 0;
            // slideBestwork.slideTo(0,800);
            // console.log(slideBestwork.params.initialSlide);
        }
        else if (currentBestItemImg == "02") {
            numbActivSlide = 1;
            mySliderCurrentSlide.innerHTML = 2;
            // slideBestwork.params.initialSlide = 1;
            // console.log(slideBestwork.params.initialSlide);
            // console.log(slideBestwork.slides);
            // slideBestwork.slideTo(1, 300);
        }
        else if (currentBestItemImg == "03") {
            numbActivSlide = 2;
            mySliderCurrentSlide.innerHTML = 3;
            // slideBestwork.params.initialSlide = 2;
            // console.log(slideBestwork.params.initialSlide);
        }
        else if (currentBestItemImg == "04") {
            numbActivSlide = 3;
            mySliderCurrentSlide.innerHTML = 4;
        }
        else if (currentBestItemImg == "05") {
            numbActivSlide = 4;
            mySliderCurrentSlide.innerHTML = 5;
        }
        else if (currentBestItemImg == "06") {
            numbActivSlide = 5;
            mySliderCurrentSlide.innerHTML = 6;
        }
        else if (currentBestItemImg == "07") {
            numbActivSlide = 6;
            mySliderCurrentSlide.innerHTML = 7;
        }
        else if (currentBestItemImg == "08") {
            numbActivSlide = 7;
            mySliderCurrentSlide.innerHTML = 8;
        }
        else if (currentBestItemImg == "09") {
            numbActivSlide = 8;
            mySliderCurrentSlide.innerHTML = 9;
        }
        else if (currentBestItemImg == "10") {
            numbActivSlide = 9;
            mySliderCurrentSlide.innerHTML = 10;
        }
        else if (currentBestItemImg == "11") {
            numbActivSlide = 10;
            mySliderCurrentSlide.innerHTML = 11;
        }
        else if (currentBestItemImg == "12") {
            numbActivSlide = 11;
            mySliderCurrentSlide.innerHTML = 12;
        }

        // слайдер
        let slideBestwork = new Swiper('.bestworks-image-slider', {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            pagination: {
                el: '.swiper-pagination',
                // type: 'bullets',
                // clickable: true,
                // dynamicBullets: true,
                // renderBullet: function (index, className) {
                //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
                // type: 'fraction',
                type: 'progressbar',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },

            simulateTouch: true,
            touchRadio: 1,
            touchAngle: 45,
            grabCursor: true,

            // hashNavigation: {
            //     watchState: true,
            // },

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },

            // mousewheel: {
            //     sensitivity: 1,
            //     eventsTarget: ".bestworks-image-slider__wrapper"
            // },

            autoHeight: true,

            slidesPerView: 1,

            watchOverflow: true,

            // spaceBetween: 30,

            // centeredSlides: false,

            // стартовый слайд
            // initialSlide: 0,
            initialSlide: numbActivSlide,

            loop: true,

            speed: 800,

            // freeMode: true,

            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },

            // effect: 'flip',
            // flipEffect: {
            //     slideShadows: true,
            //     limitRotation: true,
            // },

            // effect: 'cube',
            // cubeEffect: {
            //     slideShadows: true,
            //     shadow: true,
            //     shadowOffset: 20,
            //     shadowScale: 0.94
            // },

            // Подзагрузка изображений
            preloadImages: false,
            lazy: {
                loadOnTransitionStart: false,
                loadPrevNext: false,
            },
            watchSlidesProgress: true,
            watchSlidesVisibility: true,

            zoom: {
                maxRadio: 4,
                minRadio: 1,
            },

            // Свайпер превью
            thumbs: {
                swiper: {
                    el: '.image-mini-slider',
                    slidesPerView: 8,

                    simulateTouch: true,
                    touchRadio: 1,
                    touchAngle: 45,
                    grabCursor: true,

                    mousewheel: {
                        sensitivity: 1,
                        eventsTarget: ".image-mini-slider__wrapper"
                    },

                    loop: true,
                    freeMode: true,
                    
                }
            },

        });
        
        mySliderAllSlides.innerHTML = slideBestwork.slides.length - 2;
        // console.log(mySliderAllSlides.innerHTML);

        slideBestwork.on('slideChange', function () {
            let currentSlide = ++slideBestwork.realIndex;
            mySliderCurrentSlide.innerHTML = currentSlide;
        });
        
        // открыть модальнное окно
        modalBestworksImage.toggleClass('is-open-wrapper-bestworks-image-slider');
        $('body').toggleClass('no_scroll');
        $('header').toggleClass('header_none');
    }

    bestItem.on('click', toggleModal);
    bestworksSliderCloseButton.on('click', toggleModal);

    // slideBestwork.update();

});


