import { html, css, LitElement } from 'lit';

export class LitComp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--lit-comp-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },

      string:{type:String},
      myArray:{type:Array},
      myBool:{type:Boolean},
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.myString = 'Hello wordl';
    this.myArrya =['an', 'array', 'of','test', 'data'];
    this.myBool = true;

  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <hr>
      <p>${this.string}</p>
      <ul>
        ${this.myArrya.map(i => html`<li>${i}</li>`)}
  </ul>
  ${this.myBool?
  html`<p>Render some html  myBool is true </p>`:
  html`<p>Render some other HTML if bool is false</p>`}

    `;
  }
}
