import {LitElement, html, customElement} from 'https://cdn.skypack.dev/lit-element';;

const x = 1 * 2;

console.log("hello from client " + x);

@customElement('test-element')
class TestElement extends LitElement {
  render() {
    return html` <div>Hello from TestElement!</div> `;
  }
}
