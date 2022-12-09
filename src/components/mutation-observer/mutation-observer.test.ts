import { expect, fixture, html } from '@open-wc/testing';

describe('<onex-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <onex-mutation-observer></onex-mutation-observer> `);

    expect(el).to.exist;
  });
});
