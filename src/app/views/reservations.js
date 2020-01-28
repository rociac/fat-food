const reservationsModule = (() => {
  const name = 'Reservations';
  const form = `
    <div class="form__container">
      <form>

      <label for="name">Name </label>
      <input type="text" name="name">

      <label for="telephone">Phone Number </label>
      <input type="tel" name="telephone">

      <label for="persons">Persons </label>
      <input id="persons" type="number" name="telephone" min="1" max="25">

      <button class="btn">Make Reservation</button>
      </form>
    </div>
  `;
  return { name, form };
})();

export default reservationsModule;