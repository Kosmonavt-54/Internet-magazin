/* прилипание шапки */

var height = window.screen.height;
height = height / 100 * 90;

$(window).scroll(function() {
    if ($(window).scrollTop() > height) {
        $('.nav-header').addClass('scroll');
    } else {
        $('.nav-header').removeClass('scroll')
    }
});


/* продолжить */

function weiter() {
    $('html,body').stop().animate({ scrollTop: $('#some_point1').offset().top }, 1000);
}

/* Галка в непроданные */

$(function() {
    $('.text-unsold').click(
        function() {
            $(this).toggleClass("unsold-active")
        }
    )
});