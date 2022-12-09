import { expect, fixture, html } from '@open-wc/testing';

describe('<onex-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <onex-popup></onex-popup> `);

    expect(el).to.exist;
  });
});
