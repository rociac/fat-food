import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import template from './app/views/template';
import Content from './app/views/content';
import Pizza from './app/views/pizza';
import Hamburger from './app/views/hamburger';
import Wings from './app/views/wings';
import Reservations from './app/views/reservations';
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
      renderInfo(Pizza.info, Pizza.name);
      break;
    case 'hamburger':
      clearInfo();
      renderInfo(Hamburger.info, Hamburger.name);
      break;
    case 'wings':
      clearInfo();
      renderInfo(Wings.info, Wings.name);
      break;
    case 'reservations':
      clearInfo();
      renderInfo(Reservations.form, Reservations.name);
    default:
      break;
  }
};

window.addEventListener('click', handleClick);
