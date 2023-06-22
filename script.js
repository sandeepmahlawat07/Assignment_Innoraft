// Banner slick slider
$(document).ready(function(){
    $('.feature__banner--slider').slick({
        dots: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
            dots: true,
            arrows: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1
            }
        }
        ]
    });
});

// Mobile menu
$(document).ready(function() {
    $('.hamburger').on('click',function(){
        $(this).toggleClass('open');
        $('.menu__items--wrapper').toggleClass('active');
    })
});
  