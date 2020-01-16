import Content from './content';

const Template = (() => {
  const createMain = () => {
    const div = document.querySelector('.container');
    div.insertAdjacentHTML('afterbegin', Content.main);
  }

  const createHeader = () => {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', Content.header);
  }

  const createNav = () => {
    const navContainer = document.querySelector('.main');
    navContainer.insertAdjacentHTML('afterbegin', Content.nav);
  }

  const createFooter = () => {
    const footerContainer = document.querySelector('.main');
    footerContainer.insertAdjacentHTML('afterend', Content.footer);
  }

  const createCard = () => {
    const cardContainer = document.querySelector('.main');
    cardContainer.insertAdjacentHTML('beforeend', Content.mainCard);
  }

  return {
    createMain,
    createHeader,
    createNav,
    createFooter,
    createCard
  }
})();

export default Template;

