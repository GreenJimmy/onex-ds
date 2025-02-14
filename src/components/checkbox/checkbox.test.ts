import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type OneXCheckbox from './checkbox';

describe('<onex-checkbox>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox>Checkbox</onex-checkbox> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox></onex-checkbox> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.indeterminate).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox title="Test"></onex-checkbox> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox disabled></onex-checkbox> `);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    expect(checkbox.disabled).to.be.true;
  });

  it('should be disabled when disabled property is set', async () => {
    const el = await fixture<OnexCheckbox>(html`<onex-checkbox></onex-checkbox>`);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    el.disabled = true;
    await el.updateComplete;

    expect(checkbox.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox></onex-checkbox> `);

    expect(el.invalid).to.be.false;
  });

  it('should emit onex-change and onex-input when clicked', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox></onex-checkbox> `);
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

  it('should emit onex-change and onex-input when toggled with spacebar', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox></onex-checkbox> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.addEventListener('onex-input', inputHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should not emit onex-change or onex-input when checked programmatically', async () => {
    const el = await fixture<OnexCheckbox>(html` <onex-checkbox></onex-checkbox> `);

    el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
    el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-checkbox name="a" value="1" checked></onex-checkbox>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('1');
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-checkbox name="a" checked></onex-checkbox>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('on');
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-checkbox name="a" value="1" checked></onex-checkbox>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const checkbox = form.querySelector('onex-checkbox')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      checkbox.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-checkbox name="a" value="1" checked></onex-checkbox>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const checkbox = form.querySelector('onex-checkbox')!;
      checkbox.checked = false;

      await checkbox.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.true;

      checkbox.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.false;
    });
  });

  describe('click', () => {
    it('should click the inner input', async () => {
      const el = await fixture<OnexCheckbox>(html`<onex-checkbox></onex-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const clickSpy = sinon.spy();

      checkbox.addEventListener('click', clickSpy, { once: true });

      el.click();
      await el.updateComplete;

      expect(clickSpy.called).to.equal(true);
      expect(el.checked).to.equal(true);
    });
  });

  describe('focus', () => {
    it('should focus the inner input', async () => {
      const el = await fixture<OnexCheckbox>(html`<onex-checkbox></onex-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const focusSpy = sinon.spy();

      checkbox.addEventListener('focus', focusSpy, { once: true });

      el.focus();
      await el.updateComplete;

      expect(focusSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(checkbox);
    });
  });

  describe('blur', () => {
    it('should blur the inner input', async () => {
      const el = await fixture<OnexCheckbox>(html`<onex-checkbox></onex-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const blurSpy = sinon.spy();

      checkbox.addEventListener('blur', blurSpy, { once: true });

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(blurSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('indeterminate', () => {
    it('should render indeterminate icon until checked', async () => {
      const el = await fixture<OnexCheckbox>(html`<onex-checkbox indeterminate></onex-checkbox>`);
      let indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).not.to.be.null;

      el.click();
      await el.updateComplete;

      indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).to.be.null;
    });
  });
});
