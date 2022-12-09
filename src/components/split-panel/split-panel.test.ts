import { expect, fixture, html } from '@open-wc/testing';

describe('<onex-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <onex-split-panel></onex-split-panel> `);

    expect(el).to.exist;
  });
});
