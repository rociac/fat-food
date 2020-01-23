const content = (() => {
  const header = `
  <header>
    <h1 class="site__header">fat-food.</h1>
  </header>
`;

  const nav = `
    <nav class="nav">
      <ul class="nav__items">
        <li><a id="pizza" href="#">Pizzas</a></li>
        <li><a id="hamburger" href="#">Hamburgers</a></li>
        <li><a id="wings" href="#">Wings</a></li>
        <li class="reservations"><a id="reservations" href="#">Reservations</a></li>
      </ul>
    </nav>
    `;

  const main = `
  <main class="main">

    </main>
  `;

  const mainCard = `
  <div class="main__card">
  </div>
`;

  const mainCardContent = '<div class="main__card-content"></div>';

  const footer = `
  <div class="footer">
    <ul class="footer__social">
      <li>
        <i class="fab fa-facebook-f footer__social-icon"></i>
      </li>
      <li>
        <i class="fab fa-twitter footer__social-icon"></i>
      </li>
      <li>
        <i class="fab fa-instagram footer__social-icon"></i>
      </li>
    </ul>
  </div>
`;

  return {
    header,
    nav,
    main,
    mainCard,
    mainCardContent,
    footer
  }
})();

export default content;
