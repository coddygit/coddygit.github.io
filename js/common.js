$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.top-menu').addClass('fixed');
            $('.top-menu div.container').css({
                'max-width': '100%'
            })
        } else {
            $('.top-menu').removeClass('fixed');
            $('.top-menu div.container').css({
                'max-width': '1000px'
            })
        }
    });

});