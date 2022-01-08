
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,

    },
    
    // If we need pagination
    pagination: {
        el: '.pagination1',
        type: 'bullets',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: 'button-next-2',
        prevEl: '.button-prev-1',

    },  

});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      speed: 1500,
      lazy : true,
      autoplay: {
        delay: 2500,

    },
      keyboard: { enabled: true },
      grabCursor: true,
      breakpoints: { 568: { slidesPerView: 2, slidesPerGroup: 2, autoplay:false }, 768:{slidesPerView: 3, slidesPerGroup: 3, autoplay:false},1200:{slidesPerView: 4, slidesPerGroup: 4, autoplay:false} },
      
    
    // Navigation arrows
    navigation: {
        nextEl: '.button-next-2',
        prevEl: '.button-prev-2',

    },  

});
