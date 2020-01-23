const pizzaModule = (() => {
  const name = 'Pizza';
  const info = `
          <img class="main__card-content-left" src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

          <p class="main__card-content-right">Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.</p>
  `;
  return { name, info }
})();

export default pizzaModule;