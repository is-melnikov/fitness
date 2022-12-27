const COACHES_LIST = document.querySelector('.coaches__list');
const REVIEWS_LIST = document.querySelector('.reviews__list');
const BUTTONS_COACHES = document.querySelectorAll('.coaches__button');
const BUTTONS_REVIEWS = document.querySelectorAll('.reviews__button');

const doWithoutJs = () => {
  COACHES_LIST.classList.remove('coaches__nojs');
  REVIEWS_LIST.classList.remove('reviews__list--nojs');

  BUTTONS_COACHES.forEach((button) => {
    button.classList.remove('coaches__button--nojs');
  });

  BUTTONS_REVIEWS.forEach((button) => {
    button.classList.remove('reviews__button--nojs');
  });
};

export {doWithoutJs};


