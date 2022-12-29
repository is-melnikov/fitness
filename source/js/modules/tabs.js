const initTabs = () => {
  const tabsWrapper = document.querySelector('.membership__tabs');
  const tabs = document.querySelectorAll('.membership__button');
  const tabsTitle = document.querySelectorAll('.membership__list-title');
  const tabsContent = document.querySelectorAll('.membership__wrapper');

  tabsWrapper.classList.remove('membership__tabs--nojs');

  tabsTitle.forEach((elem) => {
    elem.classList.remove('membership__list-title--nojs');
  });

  tabsContent.forEach((elem) => {
    elem.classList.remove('membership__wrapper--nojs');
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabsContent.forEach((item) => {
        item.classList.remove('membership__wrapper--current');
      });

      target.classList.add('membership__wrapper--current');

      tabs.forEach((tabitem) => {
        tabitem.classList.remove('membership__button--current');
      });

      tab.classList.add('membership__button--current');
    });
  });
};

export {initTabs};
