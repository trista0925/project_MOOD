//header footer load=========================
$(document).ready(function() {
    $('header').load('header.html');
    $('footer').load('footer.html');
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

$(function() {

    //(fixednav)導覽列下滑固定=========================
    var scrollTime; //負責視窗捲動時偵測等待的時間

    //(fixednav)判斷往上捲出的高度是否已超過header的高度, 如果header已捲出畫面則加上fixed的class名稱
    function checkHeader() {
        if ($(document).scrollTop() >= $('header').height()) {
            $('header').addClass('fixed');
        }
        if ($(document).scrollTop() == 0) {
            $('header').removeClass('fixed');
        }
    }
    checkHeader();

    //(fixednav)當視窗捲動時
    $(window).scroll(function() {
        clearTimeout(scrollTime);
        scrollTime = setTimeout(function() {
            checkHeader();
        }, 100);
    });
});