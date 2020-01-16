import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import template from './app/views/template';
import Content from './app/views/content';
import './main.scss';


template.createHeader();
template.createMain();
template.createNav();
template.createFooter();
template.createCard();

const clearInfo = () => {
  const mainCard = document.querySelector('.main__card');
  mainCard.innerHTML = '';
};

const renderInfo = (dish, dishName) => {
  const mainCard = document.querySelector('.main__card');
  mainCard.insertAdjacentHTML('afterbegin', Content.mainCardContent);
  const mainCardContent = document.querySelector('.main__card-content');
  mainCard.style.display = 'flex';
  mainCard.insertAdjacentHTML('afterbegin', `<h3>${dishName}</h3>`);
  mainCardContent.insertAdjacentHTML('afterbegin', dish);
};

const handleClick = (element) => {
  switch (element.target.id) {
    case 'pizza':
      clearInfo();
      renderInfo(Content.pizza, 'Pizza');
      break;
    case 'hamburger':
      clearInfo();
      renderInfo(Content.hamburger, 'Hamburger');
      break;
    case 'wings':
      clearInfo();
      renderInfo(Content.wings, 'Wings');
      break;
    default:
  }
};

window.addEventListener('click', handleClick);
