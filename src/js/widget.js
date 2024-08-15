/* eslint-disable class-methods-use-this */
/* eslint linebreak-style: ["error", "windows"] */
import isValid from './validator';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
      <form class="card-form-widget">
        <h3>Check your credit card number</h3>
        <ul class="cards list-unstyled">
          <li clacc="card visa">
            <img src="./img/Visa.png" alt="Visa">
          </li>
          <li class="card mastercard">
            <img src="./img/Mastercard.png" alt="Mastercard">
          </li>
          <li class="card american">
            <img src="./img/American-express.png" alt="American Express">
          </li>
          <li class="card discover">
            <img src="./img/Discover.png" alt="Discover">
          </li>
          <li class="card jcb">
            <img src="./img/JCB.png" alt="JCB">
          </li>
          <li class="card diners">
            <img src="./img/Diners-club.png" alt="Diners club">
          </li>
        </ul>
        <div class="form-control">
            <label for="card-number-input"></label>
            <input class="input" type="text" placeholder="Credit card number">
        </div>
        <button class="submit">Click to validate</button>
      </form>
    `;
  }

  static get selector() {
    return '.card-form-widget';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDom() {
    this.parentElement.innerHTML = CardFormWidget.markup;

    this.element = this.parentElement.querySelector(CardFormWidget.selector);
    this.submit = this.element.querySelector(CardFormWidget.submitSelector);
    this.input = this.element.querySelector(CardFormWidget.inputSelector);

    this.element.addEventListener('submit', () => this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    let value = this.input.value;

    if (isValid(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
