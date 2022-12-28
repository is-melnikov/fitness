const initSwiperReviews = () => {
  const swiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};

export {initSwiperReviews};
