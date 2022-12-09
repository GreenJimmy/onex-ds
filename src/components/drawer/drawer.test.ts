// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type OneXDrawer from './drawer';

describe('<onex-drawer>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<OnexDrawer>(
      html` <onex-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit onex-show and onex-after-show when calling show()', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('onex-show', showHandler);
    el.addEventListener('onex-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit onex-hide and onex-after-hide when calling hide()', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('onex-hide', hideHandler);
    el.addEventListener('onex-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit onex-show and onex-after-show when setting open = true', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('onex-show', showHandler);
    el.addEventListener('onex-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit onex-hide and onex-after-hide when setting open = false', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('onex-hide', hideHandler);
    el.addEventListener('onex-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when onex-request-close is prevented', async () => {
    const el = await fixture<OnexDrawer>(html`
      <onex-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</onex-drawer>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;

    el.addEventListener('onex-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<OnexDrawer>(html` <onex-drawer><input /></onex-drawer> `);
    const input = el.querySelector<HTMLInputElement>('input')!;
    const initialFocusHandler = sinon.spy((event: InputEvent) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('onex-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it('should close when pressing Escape', async () => {
    const el = await fixture<OnexDrawer>(html` <onex-drawer open></onex-drawer> `);
    const hideHandler = sinon.spy();

    el.addEventListener('onex-hide', hideHandler);

    await sendKeys({ press: 'Escape' });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });
});
