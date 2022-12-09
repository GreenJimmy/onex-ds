import { expect, fixture, html, waitUntil, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';
import type OneXMenuItem from './menu-item';

describe('<onex-menu-item>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<OneXMenuItem>(html`
      <onex-select>
        <onex-menu-item>Test</onex-menu-item>
      </onex-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OneXMenuItem>(html` <onex-menu-item>Test</onex-menu-item> `);

    expect(el.checked).to.be.false;
    expect(el.getAttribute('aria-checked')).to.equal('false');
    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<OneXMenuItem>(html` <onex-menu-item>Test</onex-menu-item> `);

    el.checked = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-checked')).to.equal('true');
    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('get text label', async () => {
    const el = await fixture<OneXMenuItem>(html` <onex-menu-item>Test</onex-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('emit onex-label-change event on label change', async () => {
    const el = await fixture<OneXMenuItem>(html` <onex-menu-item>Test</onex-menu-item> `);

    const labelChangeHandler = sinon.spy();
    el.textContent = 'New Text';
    el.addEventListener('onex-label-change', labelChangeHandler);
    await waitUntil(() => labelChangeHandler.calledOnce);
    expect(labelChangeHandler).to.have.been.calledOnce;
  });
});
