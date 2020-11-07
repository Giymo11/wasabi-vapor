import {
  LitElement,
  html,
  css,
  property,
  internalProperty,
  customElement,
} from 'lit-element';


// TODO: toggle "hello", toggle absolute vs cumulative gradient pos, enable setting your own gradient

@customElement('vapor-hello')
export class VaporHello extends LitElement {
  @property()
  name = 'Giymo11';

  @internalProperty()
  posX = 0;
  @internalProperty()
  posY = 0;

  static class_styles = html`
    <style>
      /* default styles, easy to override */
      :host {
        font-size: 8em;
        font-family: 'PT Sans', sans-serif;
      }

      h1 {
        display: inline-block;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        /*background-image: linear-gradient(
        115deg,
        transparent 0%,
        rgb(0, 231, 255) 30%,
        rgb(255, 0, 231) 70%,
        transparent 100%
      );*/

        background-image: repeating-linear-gradient(
          to right,
          orange,
          yellow,
          green,
          cyan,
          blue,
          violet,
          orange
        );

        background-position: 0% 0%;
        background-size: 300% 300%;
      }
    </style>
  `;

  get header() {
    if (this.shadowRoot) return this.shadowRoot.getElementById('header');
    else return null;
  }

  render() {
    return html`
      ${VaporHello.class_styles}
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
        rel="stylesheet"
      />

      <h1
        id="header"
        style=${`background-position: ${this.posX}px ${this.posY}px;`}
        @mousemove=${this._focusBackground}
      >
        ${"Hello " + this.name}
      </h1>
    `;
  }

  _focusBackground(e: MouseEvent) {
    if (!this.header) return;
    const rect = this.header.getBoundingClientRect();

    this.posX = this.posX + e.movementX;
    this.posY = this.posY + e.movementY;
    /*
    var height = rect.height;
    var width = rect.width;
    var left_percentage = Math.abs(Math.floor((100 / width) * left) - 100);
    var right_percentage = Math.abs(Math.floor((100 / height) * top) - 100);

    this.posX = left_percentage;
    this.posY = right_percentage;
    */
  }
}
