document.addEventListener('DOMContentLoaded', function () {

    // Menu

    function toggleMenu() {
        $('.menu-toggle').toggleClass('menu-toggle_active');
        $('.top-menu').toggleClass('top-menu_active');
    }

    $('.menu-toggle').click(function () { toggleMenu(); });

    function closeMenu() {
        $('.menu-toggle').removeClass('menu-toggle_active');
        $('.top-menu').removeClass('top-menu_active');
    }

    $(document).click(function (e) {
        if ($(e.target).closest('.menu-container').length) return;
        closeMenu();
    });
});