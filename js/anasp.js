$(document).ready(function () {
    $('ul.navbar-nav > li').click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
    new WOW().init();
});
var header = $('.menu-sticky');
var win = $(window);

win.on('scroll', function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
        header.removeClass("sticky");
        header.addClass("header2");
    } else {
        header.addClass("sticky");
        header.removeClass("header2");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".header").slideDown(1000);
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 0) {
        $("header").css({ "opacity": "0" });
    } else {
        $("header").css({ "opacity": "1" });
    }
});




