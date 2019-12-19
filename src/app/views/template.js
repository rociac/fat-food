import * as content from './content';

export const createMain = () => {
  const div = document.querySelector(".container");
  div.insertAdjacentHTML("afterbegin", content.main);
};

export const createHeader = () => {
  const body = document.querySelector('body');
  body.insertAdjacentHTML("afterbegin", content.header);
}

export const createNav = () => {
  const navContainer = document.querySelector('.main');
  navContainer.insertAdjacentHTML('afterbegin', content.nav);
}

export const createFooter = () => {
  const footerContainer = document.querySelector('.main');
  footerContainer.insertAdjacentHTML('afterend', content.footer);
}

export const createCard = () => {
  const cardContainer = document.querySelector('.main');
  cardContainer.insertAdjacentHTML('beforeend', content.mainCard);
}