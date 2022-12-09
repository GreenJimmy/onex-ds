import { expect, fixture, html } from '@open-wc/testing';
import type OneXMenuLabel from './menu-label';

describe('<onex-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<OnexMenuLabel>(html` <onex-menu-label>Test</onex-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
