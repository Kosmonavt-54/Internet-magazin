var height = window.screen.height;
height = height / 100 * 90;

$(window).scroll(function() {
    if ($(window).scrollTop() > height) {
        $('.nav-header').addClass('scroll');
    } else {
        $('.nav-header').removeClass('scroll')
    }
});