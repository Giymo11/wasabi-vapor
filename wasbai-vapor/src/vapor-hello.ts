import { LitElement, html, property, customElement } from 'lit-element';

@customElement("vapor-hello")
export class VaporHello extends LitElement {

    @property()
    name = "Giymo11";

    render() {
        return html`<h1>${this.name}</h1>`;
    }
}

