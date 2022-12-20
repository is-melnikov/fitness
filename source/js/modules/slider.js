const COACHES_LIST = document.querySelector('.coaches__list');
const BUTTONS = document.querySelectorAll('.coaches__button');

const doWithoutJs = () => {
  COACHES_LIST.classList.remove('coaches__nojs');

  BUTTONS.forEach((button)=> {
    button.classList.remove('coaches__button--nojs');
  });
};

export {doWithoutJs};


