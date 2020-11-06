import { html, fixture, expect } from '@open-wc/testing';

import {WasbaiVapor} from '../src/WasbaiVapor.js';
import '../src/wasbai-vapor.js';

describe('WasbaiVapor', () => {
  let element: WasbaiVapor;
  beforeEach(async () => {
    element = await fixture(html`
      <wasbai-vapor></wasbai-vapor>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
