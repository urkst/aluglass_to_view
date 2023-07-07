document.addEventListener('DOMContentLoaded', function () {

    // micromodal-slide
    MicroModal.init({
        openTrigger: 'data-custom-open',
        closeTrigger: 'data-custom-close',
        disableScroll: true,
        disableFocus: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });

    $('[data-custom-open]').click(function () {
        $('.modal [name=form]').val($(this).data('form'));
    });
    $('[data-custom-close]').click(function () {
        $('.modal [name=form]').val('');
    });


    // home-callback-list-text
    $('.sect-home-callback__list li').each(function () {
        $(this).html($(this).text().replace(/([0-9.]+)/g, '<span>$1</span>')); // вибор и обарачивание цифр списка в span 
    });
});