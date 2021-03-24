//header footer load=========================
$(document).ready(function() {
    $('header').load('header.html');
    $('footer').load('footer.html');
    $('.btmBox').load('btmbox.html');
});

//(slider)首頁輪播圖=========================
$(document).ready(function() {
    $('.sliderTop').slick({
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        speed: 1500,
        autoplaySpeed: 3000,
    });

    //(slider)中間輪播圖=========================
    $('.sliderItems').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });
});