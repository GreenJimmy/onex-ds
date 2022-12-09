import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type OneXSwitch from './switch';

describe('<onex-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch>Switch</onex-switch> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch title="Test"></onex-switch> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch disabled></onex-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);

    expect(el.invalid).to.be.false;
  });

  it('should emit onex-change and onex-input when clicked', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.addEventListener('onex-input', inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit onex-change when toggled with spacebar', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.addEventListener('onex-input', inputHandler);
    el.focus();
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit onex-change and onex-input when toggled with the right arrow', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.addEventListener('onex-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit onex-change and onex-input when toggled with the left arrow', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch checked></onex-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.addEventListener('onex-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowLeft' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.false;
  });

  it('should not emit onex-change or onex-input when checked is set by javascript', async () => {
    const el = await fixture<OnexSwitch>(html` <onex-switch></onex-switch> `);
    el.addEventListener('onex-change', () => expect.fail('onex-change incorrectly emitted'));
    el.addEventListener('onex-input', () => expect.fail('onex-change incorrectly emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-switch name="a" value="1" checked></onex-switch>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const switchEl = form.querySelector('onex-switch')!;
      switchEl.checked = false;

      await switchEl.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.true;

      switchEl.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.false;
    });
  });
});
