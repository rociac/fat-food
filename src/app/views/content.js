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
        <li id="reservations"><a href="#">Reservations</a></li>
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

  const pizza = `
          <img class="main__card-content-left" src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          <p class="main__card-content-right">Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.</p>
`;

  const hamburger = `
          <img class="main__card-content-left" src="https://images.unsplash.com/photo-1567446991062-e8a1209f70b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          <p class="main__card-content-right">A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked[1] or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles; condiments such as ketchup, mayonnaise, mustard, relish, or "special sauce"; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.</p>
`;

  const wings = `
          <img class="main__card-content-left" src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80">

          <p class="main__card-content-right">A Buffalo wing, in the cuisine of the United States, is an unbreaded chicken wing section (flat or drumette) that is generally deep-fried then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving. They are traditionally served hot, along with celery sticks and carrot sticks with blue cheese dressing or ranch dressing for dipping. Locals refer to them merely as "wings."</p>
`;

  return {
    header,
    nav,
    main,
    mainCard,
    mainCardContent,
    footer,
    pizza,
    hamburger,
    wings
  }
})();

export default content;
