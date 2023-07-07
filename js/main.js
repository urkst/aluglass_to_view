// "use strict";
$(function () {
    
    // анимация блока как работаем
    $(window).scroll(function () {
        $('.how-work-item__content-left').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInLeft");
            }
        });
        $('.how-work-item__arrow-bottom').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInDown");
            }
        });
        $('.how-work-item__content-right').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInRight");
            }
        });

        // анимация линий
        $('.line').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInLeft");
            }
        });

        // анимация слоганов
        $('.section-title__name').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInRight");
            }
        });

        // анимация блока партнеры
        $('.partners-item').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow + 650){
            $(this).addClass("fadeInUp");
            }
        });
    });

    
    // код модального окна блока о компании
    const readMore = $(".read-more");
    const modalAdvantages = $(".modal-sect-advantages");
    const modalClouseAdvantagesButton = $(".modal-clouse__advantages-button");
    const header = $(".header");

    // открыть окно
    readMore.on("click", function () {
        modalAdvantages.toggleClass('is-open-modal-bestworks-img');
        $('body').addClass('no_scroll');
        header.addClass('header_none');
    });

    // закрыть окно
    modalClouseAdvantagesButton.on("click", function () {
        modalAdvantages.toggleClass('is-open-modal-bestworks-img');
        $('body').removeClass('no_scroll');
        header.removeClass('header_none');
    });
});


// $(document).ready(function () {
    
// });