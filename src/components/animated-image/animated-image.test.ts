import { expect, fixture, html } from '@open-wc/testing';

describe('<onex-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <onex-animated-image></onex-animated-image> `);

    expect(el).to.exist;
  });
});
