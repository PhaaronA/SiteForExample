// "use strict"
$(function () {
    $(".reviews-content-slick").slick({
        dots: true,
        // autoplay: true,
        // autospeed: 2000,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".btn_up").fadeIn();
        } else {
            $(".btn_up").fadeOut();
        }
    });
    $(".btn_up").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 900);
    });
});


$(function () {

    $('.header-content-scroll').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#down').offset().top }, 1000);
        e.preventDefault();
    });

});

$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger, .menu-block-item, .menu__burger__sp, .menu-block__logo').toggleClass('active');
    })
})