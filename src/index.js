import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import * as template from './app/views/template';
import * as content from './app/views/content';
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
  mainCard.insertAdjacentHTML('afterbegin', content.mainCardContent);
  const mainCardContent = document.querySelector('.main__card-content');
  mainCard.style.display = 'flex';
  mainCard.insertAdjacentHTML('afterbegin', `<h3>${dishName}</h3>`);
  mainCardContent.insertAdjacentHTML('afterbegin', dish);
};

const handleClick = (element) => {
  switch (element.target.id) {
    case 'pizza':
      clearInfo();
      renderInfo(content.pizza, 'Pizza');
      break;
    case 'hamburger':
      clearInfo();
      renderInfo(content.hamburger, 'Hamburger');
      break;
    case 'wings':
      clearInfo();
      renderInfo(content.wings, 'Wings');
      break;
    case 'reservations':
      clearInfo();
      renderInfo(content.reservations, 'Reservations');
      break;
    default:
  }
};

window.addEventListener('click', handleClick);
