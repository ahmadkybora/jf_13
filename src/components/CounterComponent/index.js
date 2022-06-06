// define the component's HTML template
const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      width: 50px;
      height: 50px;

      border: 1px solid red;
      border-radius: 50%;

      background: tomato;

      color: white;
      font-weight: bold;

      cursor: pointer;
    }

    button:active {
      background-color: #D9391C;
    }

    span {
      display: inline-block;
      margin: 0 5px;
      min-width: 25px;

      text-align: center;
    }
  </style>

  <button id="increaseBtn">+</button>
  <span id="label"></span>
  <button id="decreaseBtn">-</button>
`;

export default class CounterComponent extends HTMLElement {
  // define the observedAttributes array 
  static get observedAttributes() {
    return ['value', 'step'];
  }

  // define getters and setters for attributes
  get value() {
    return this.getAttribute('value');
  }

  set value(val) {
    if (val) {
      this.setAttribute('value', val);
    } else {
      this.removeAttribute('value');
    }
  }

  get step() {
    return this.getAttribute('step');
  }

  set step(val) {
    if (val) {
      this.setAttribute('step', val);
    } else {
      this.removeAttribute('step');
    }
  }

  // define properties to store references to DOM elements in the component's template
  $increaseButton;
  $decreaseButton;
  $label;

  constructor() {
    // always do a super() call first to ensure that the component inherits the correct prototype chain and all properties and methods of the class it extends. 
    super();

    // optional: Attach Shadow DOM to the component
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // set references to the DOM elements from the component's template
    this.$increaseButton = this.shadowRoot.querySelector('#increaseBtn');
    this.$decreaseButton = this.shadowRoot.querySelector('#decreaseBtn');
    this.$label = this.shadowRoot.querySelector('#label');
  }

  /**
   * زمانیکه یک عنصر به دام متصل
   * میشود این متد فراخوانی میشود
   */
  connectedCallback() {
    // add event listeners on both buttons
    // we bind "this" to the callback of the listener to attach the component's scope.
    this.$increaseButton.addEventListener('click', this._increase.bind(this));
    this.$decreaseButton.addEventListener('click', this._decrease.bind(this));
    // console.log(this.$increaseButton);
    // console.log(this.$decreaseButton);
  }
  /**
   * این قلاب زمانی فعال میشود که عنصر بخواهد 
   * از دام حذف شود
   */
  disconnectedCallback() {
    // remove event listeners on both buttons
    this.$increaseButton.removeEventListener('click', this._increase.bind(this));
    this.$decreaseButton.removeEventListener('click', this._decrease.bind(this));
  }

  /**
   * 
   * @param {*} name 
   * @param {*} oldValue 
   * @param {*} newValue 
   * یکی از راه‌های انتقال داده‌ها به عناصر سفارشی
   * از طریق ویژگی‌ها است  بصورت پراپ یا اتریبیوت 
   * که می‌توان به صورت زیر تخصیص داد
   * افزودن، حذف، به‌روزرسانی یا جایگزینی ویژگی‌ها 
   * یا زمانی که نمونه‌ای از یک مؤلفه ارتقا می‌یابد،
   * فعال میشود
   */
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("nameValue: ", newValue);
    console.log("name: ", name);
    console.log("oldValue: ", oldValue);
    this.$label.innerHTML = newValue;
  }

  /**
   * ارسال دیتا به یک کامپوننت دیگر
   * طبق تحقیق
   */
  adoptedCallback() {
    console.log('I am adopted!');
  }

  _increase() {
    const step = +this.step;
    const value = +this.value;
    this.value = String(value + step);
  }

  _decrease() {
    const step = +this.step;
    const value = +this.value;
    this.value = String(value - step);
  }
}