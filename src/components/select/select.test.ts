import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { clickOnElement } from '../../internal/test';
import type OneXMenuItem from '../menu-item/menu-item';
import type OneXSelect from './select';

describe('<onex-select>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select>
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select disabled>
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    expect(el.dropdown.disabled).to.be.true;
    expect(el.control.tabIndex).to.equal(-1);
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select label="Select One">
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('onex-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit onex-change when the value is changed with the mouse', async () => {
      const el = await fixture<OnexSelect>(html`
        <onex-select value="option-1">
          <onex-menu-item value="option-1">Option 1</onex-menu-item>
          <onex-menu-item value="option-2">Option 2</onex-menu-item>
          <onex-menu-item value="option-3">Option 3</onex-menu-item>
        </onex-select>
      `);
      const trigger = el.shadowRoot!.querySelector<HTMLElement>('[part~="control"]')!;
      const secondOption = el.querySelectorAll<OneXMenuItem>('onex-menu-item')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger);
      await el.updateComplete;
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit onex-change and onex-input when the value is changed with the keyboard', async () => {
      const el = await fixture<OnexSelect>(html`
        <onex-select value="option-1">
          <onex-menu-item value="option-1">Option 1</onex-menu-item>
          <onex-menu-item value="option-2">Option 2</onex-menu-item>
          <onex-menu-item value="option-3">Option 3</onex-menu-item>
        </onex-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // select the first option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // select the second option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should not emit onex-change or onex-input when the value is changed programmatically', async () => {
      const el = await fixture<OnexSelect>(html`
        <onex-select value="option-1">
          <onex-menu-item value="option-1">Option 1</onex-menu-item>
          <onex-menu-item value="option-2">Option 2</onex-menu-item>
          <onex-menu-item value="option-3">Option 3</onex-menu-item>
        </onex-select>
      `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });
  });

  it('should open the menu when any letter key is pressed with onex-select is on focus', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select>
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(control.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the menu when ctrl + R is pressed with onex-select is on focus', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select>
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    const control = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__control')!;
    control.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(control.getAttribute('aria-expanded')).to.equal('false');
  });

  it('should focus on the custom control when constraint validation occurs', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <form>
        <onex-select required>
          <onex-menu-item value="option-1">Option 1</onex-menu-item>
          <onex-menu-item value="option-2">Option 2</onex-menu-item>
          <onex-menu-item value="option-3">Option 3</onex-menu-item>
        </onex-select>
      </form>
    `);
    const select = el.querySelector('onex-select')!;
    el.requestSubmit();

    expect(select.shadowRoot!.activeElement).to.equal(select.control);
  });

  it('should update the display label when a menu item changes', async () => {
    const el = await fixture<OnexSelect>(html`
      <onex-select value="option-1">
        <onex-menu-item value="option-1">Option 1</onex-menu-item>
        <onex-menu-item value="option-2">Option 2</onex-menu-item>
        <onex-menu-item value="option-3">Option 3</onex-menu-item>
      </onex-select>
    `);
    const displayLabel = el.shadowRoot!.querySelector('[part~="display-label"]')!;
    const menuItem = el.querySelector('onex-menu-item')!;

    expect(displayLabel.textContent?.trim()).to.equal('Option 1');
    menuItem.textContent = 'updated';

    await oneEvent(el, 'onex-label-change');
    await el.updateComplete;

    expect(displayLabel.textContent?.trim()).to.equal('updated');
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-select value="option-1">
            <onex-menu-item value="option-1">Option 1</onex-menu-item>
            <onex-menu-item value="option-2">Option 2</onex-menu-item>
            <onex-menu-item value="option-3">Option 3</onex-menu-item>
          </onex-select>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const select = form.querySelector('onex-select')!;
      const option2 = form.querySelectorAll('onex-menu-item')![1];

      option2.click();
      await option2.updateComplete;

      expect(select.value).to.equal('option-2');

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await select.updateComplete;

      expect(select.value).to.equal('option-1');
    });
  });
});
