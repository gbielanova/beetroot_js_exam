new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 800,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        500: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 3,
        }

    }
});