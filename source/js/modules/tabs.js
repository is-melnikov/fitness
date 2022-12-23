const initTabs = () => {
  const tabs = document.querySelectorAll('.membership__button');
  const tabsContent = document.querySelectorAll('.membership__wrapper');

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
