import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { clickOnElement } from '../../internal/test';
import type OneXColorPicker from './color-picker';

describe('<onex-color-picker>', () => {
  describe('when the value changes', () => {
    it('should not emit onex-change or onex-input when the value is changed programmatically', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const color = 'rgb(255, 204, 0)';

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-change should not be emitted'));
      el.value = color;
      await el.updateComplete;
    });

    it('should emit onex-change and onex-input when the color grid selector is moved', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const grid = el.shadowRoot!.querySelector<HTMLElement>('[part~="grid"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(grid); // click on the grid
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when the hue slider is moved', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const slider = el.shadowRoot!.querySelector<HTMLElement>('[part~="hue-slider"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(slider); // click on the hue slider
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when the opacity slider is moved', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker opacity></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const slider = el.shadowRoot!.querySelector<HTMLElement>('[part~="opacity-slider"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(slider); // click on the opacity slider
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when toggling the format', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker value="#fff"></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const formatButton = el.shadowRoot!.querySelector<HTMLElement>('[part~="format-button"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(formatButton); // click on the format button
      await el.updateComplete;

      expect(el.value).to.equal('rgb(255, 255, 255)');
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when clicking on a swatch', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const swatch = el.shadowRoot!.querySelector<HTMLElement>('[part~="swatch"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(swatch); // click on the swatch
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when selecting a color with the keyboard', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const gridHandle = el.shadowRoot!.querySelector<HTMLElement>('[part~="grid-handle"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      gridHandle.focus();
      await sendKeys({ press: 'ArrowRight' }); // move the grid handle
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when selecting a color with the keyboard', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const handle = el.shadowRoot!.querySelector<HTMLElement>('[part~="grid-handle"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      handle.focus();
      await sendKeys({ press: 'ArrowRight' }); // move the handle
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when selecting hue with the keyboard', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const handle = el.shadowRoot!.querySelector<HTMLElement>('[part~="hue-slider"] > span')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      handle.focus();
      await sendKeys({ press: 'ArrowRight' }); // move the handle
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when selecting opacity with the keyboard', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker opacity></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const handle = el.shadowRoot!.querySelector<HTMLElement>('[part~="opacity-slider"] > span')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      handle.focus();
      await sendKeys({ press: 'ArrowRight' }); // move the handle
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when entering a value in the color input and pressing enter', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker opacity></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const input = el.shadowRoot!.querySelector<HTMLElement>('[part~="input"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      input.focus(); // focus the input
      await el.updateComplete;
      await sendKeys({ type: 'fc0' }); // type in a color
      await sendKeys({ press: 'Enter' }); // press enter
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input when entering a value in the color input and blurring the field', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker opacity></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const input = el.shadowRoot!.querySelector<HTMLElement>('[part~="input"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      input.focus(); // focus the input
      await el.updateComplete;
      await sendKeys({ type: 'fc0' }); // type in a color
      input.blur(); // commit changes by blurring the field
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should render the correct format when selecting a swatch of a different format', async () => {
      const el = await fixture<OnexColorPicker>(html` <onex-color-picker format="rgb"></onex-color-picker> `);
      const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]')!;
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);

      el.swatches = ['#fff'];
      await el.updateComplete;
      const swatch = el.shadowRoot!.querySelector<HTMLElement>('[part~="swatch"]')!;

      await clickOnElement(trigger); // open the dropdown
      await aTimeout(200); // wait for the dropdown to open
      await clickOnElement(swatch); // click on the swatch
      await el.updateComplete;

      expect(el.value).to.equal('rgb(255, 255, 255)');
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });
  });

  it('should render in a dropdown', async () => {
    const el = await fixture<OnexColorPicker>(html` <onex-color-picker></onex-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('onex-dropdown');

    expect(dropdown).to.exist;
  });

  it('should not render in a dropdown when inline is enabled', async () => {
    const el = await fixture<OnexColorPicker>(html` <onex-color-picker inline></onex-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('onex-dropdown');

    expect(dropdown).to.not.exist;
  });

  it('should show opacity slider when opacity is enabled', async () => {
    const el = await fixture<OnexColorPicker>(html` <onex-color-picker opacity></onex-color-picker> `);
    const opacitySlider = el.shadowRoot!.querySelector('[part*="opacity-slider"]')!;

    expect(opacitySlider).to.exist;
  });

  it('should display a color when an initial value is provided', async () => {
    const el = await fixture<OnexColorPicker>(html` <onex-color-picker value="#000"></onex-color-picker> `);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]');

    expect(trigger?.style.color).to.equal('rgb(0, 0, 0)');
  });

  it('should display a color with opacity when an initial value with opacity is provided', async () => {
    const el = await fixture<OnexColorPicker>(
      html` <onex-color-picker opacity value="#ff000050"></onex-color-picker> `
    );
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="trigger"]');
    const previewButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="preview"]');
    const previewColor = getComputedStyle(previewButton).getPropertyValue('--preview-color');

    expect(trigger.style.color).to.equal('rgba(255, 0, 0, 0.314)');
    expect(previewColor.startsWith('hsla(0deg, 100%, 50%, 0.31')).to.be.true;
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-color-picker name="a" value="#FFFFFF"></onex-color-picker>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const colorPicker = form.querySelector('onex-color-picker')!;
      colorPicker.value = '#000000';

      await colorPicker.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await colorPicker.updateComplete;

      expect(colorPicker.value).to.equal('#FFFFFF');

      colorPicker.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await colorPicker.updateComplete;

      expect(colorPicker.value).to.equal('');
    });
  });
});
