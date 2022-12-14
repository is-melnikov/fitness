const VIDEO = document.querySelector('.video');
const VIDEO_LINK = document.querySelector('.video__link');
const VIDEO_BUTTON = document.querySelector('.video__button');
const VIDEO_IFRAME = document.querySelector('.video__iframe');

VIDEO_IFRAME.classList.add('video__iframe--nojs');

const playVideo = () => {
  const onLinkClick = (evt) => {
    evt.preventDefault();

    VIDEO.innerHTML = '';

    const IFRAME = '<iframe class="video__link" width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw" frameborder="0"></iframe>';

    VIDEO.insertAdjacentHTML('beforeend', IFRAME);
  };

  VIDEO_LINK.addEventListener('click', onLinkClick);
  VIDEO_BUTTON.addEventListener('click', onLinkClick);

};

export {playVideo};
