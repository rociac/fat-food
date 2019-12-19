import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import * as template from './app/views/template';
import * as content from './app/views/content';
import './main.scss';



template.createHeader();
template.createMain();
template.createNav();
template.createFooter();

const clearInfo = () => {
  const mainCard = document.querySelector('.main__card');
  mainCard.innerHTML = "";
}

const renderInfo = (dish) => {
  clearInfo();
  const mainCard = document.querySelector('.main__card');
  mainCard.insertAdjacentHTML('afterbegin', `<h3 class='dish-header'>${dish.id}</h3>`);
  const mainCardContent = document.querySelector('.main__card-content');
  mainCard.style.display = 'flex';
  mainCardContent.insertAdjacentHTML('afterbegin', dish);
}

const handleClick = (element) => {
  switch (element.target.id) {
    case 'pizza':
      renderInfo(content.pizza);
      break;
    case 'hamburguer':
      renderInfo(content.hamburguer);
      break;
    case 'wings':
      renderInfo(content.wings);
      break;
    case 'reservations':
      renderInfo(content.reservations);
      break;
  }
}

window.addEventListener('click', handleClick);



