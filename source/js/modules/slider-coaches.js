const initSwiperCoaches = () => {
  const swiper = new Swiper('.coaches__swiper', {
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 22,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
    },
  });

  const slidesDuplicate = document.querySelectorAll('.swiper-slide-duplicate');

  slidesDuplicate.forEach((slide) => {
    slide.removeAttribute('tabindex');
  });
};

export {initSwiperCoaches};
