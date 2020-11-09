import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from "https://cdn.skypack.dev/lit-element";

const x = 1 * 2;

console.log("hello from client " + x);

@customElement("test-element")
class TestElement extends LitElement {
  render() {
    return html` <div>Hello from TestElement!</div> `;
  }
}

@customElement("vapor-95-card")
class Vapor95Card extends LitElement {

    @property()
    modernstyle = false;

  static get styles() {
    return css`
      :host {
        --color-bg: #c0c0c0;
        --size-border: 2px;
      }

      ::slotted(*) {
        padding-left: calc(var(--size-border) * 2);
        padding-right: calc(var(--size-border) * 2);
        margin: calc(var(--size-border) * 3);
      }

      ::slotted([slot="title"]) {
        background: linear-gradient(
          90deg,
          #b8e4ff 0%,
          #d0c7f7 50%,
          #ff90e8 100%
        );
      }

      :host([modernstyle="true"]) ::slotted([slot="title"]) {
          margin: 0;
          padding-left: calc(var(--size-border) * 5);
          padding-right: calc(var(--size-border) * 5);
          padding-top: calc(var(--size-border) * 3);
          padding-bottom: calc(var(--size-border) * 3);
      }

      .card {
        width: 800px;
        height: 480px;

        position: relative;
        z-index: 0;

        background: var(--color-bg);
        border-radius: 0;
     
        border-top: var(--size-border) solid var(--color-bg);
        border-left: var(--size-border) solid var(--color-bg);
        border-right: var(--size-border) solid black;
        border-bottom: var(--size-border) solid black;
      }

      :host([modernstyle="true"]) .card {
        border-top: calc(var(--size-border) * 2) solid white;
        border-left: calc(var(--size-border) * 2) solid white;
        border-right: calc(var(--size-border) * 2) solid #393939;
        border-bottom: calc(var(--size-border) * 2) solid #393939;
      }

      :host([modernstyle="true"]) .card:after {
          display: none;
      }

      .card:after {
        content: "";
        position: absolute;
        z-index: -1;

        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;

        background: var(--color-bg);

        border-top: var(--size-border) solid white;
        border-left: var(--size-border) solid white;
        border-right: var(--size-border) solid #656565;
        border-bottom: var(--size-border) solid #656565;
        border-radius: 0;
      }

    `;
  }

  render() {
    return html`<div class="card">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot></slot>
    </div>`;
  }
}
