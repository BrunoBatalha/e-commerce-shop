$(document).ready(function(){

    $('.responsive').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    $('.slick-prev').text('')
    $('.slick-prev').addClass("fas fa-arrow-circle-left")

    $('.slick-next').text('')
    $('.slick-next').addClass("fas fa-arrow-circle-right")

});


// fas fa-arrow-circle-right