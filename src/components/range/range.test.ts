import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { clickOnElement } from '../../internal/test';
import { serialize } from '../../utilities/form';
import type OneXRange from './range';

describe('<onex-range>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexRange>(html` <onex-range label="Name"></onex-range> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OnexRange>(html` <onex-range></onex-range> `);

    expect(el.name).to.equal('');
    expect(el.value).to.equal(0);
    expect(el.title).to.equal('');
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.invalid).to.be.false;
    expect(el.min).to.equal(0);
    expect(el.max).to.equal(100);
    expect(el.step).to.equal(1);
    expect(el.tooltip).to.equal('top');
    expect(el.defaultValue).to.equal(0);
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<OnexRange>(html` <onex-range title="Test"></onex-range> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexRange>(html` <onex-range disabled></onex-range> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.disabled).to.be.true;
  });

  describe('when the value changes', () => {
    it('should emit onex-change and onex-input when the value changes from clicking the slider', async () => {
      const el = await fixture<OnexRange>(html` <onex-range value="0"></onex-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);
      await clickOnElement(el, 'right');
      await el.updateComplete;

      expect(el.value).to.equal(100);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input and decrease the value when pressing left arrow', async () => {
      const el = await fixture<OnexRange>(html` <onex-range value="50"></onex-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);
      el.focus();
      await sendKeys({ press: 'ArrowLeft' });
      await el.updateComplete;

      expect(el.value).to.equal(49);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit onex-change and onex-input and decrease the value when pressing right arrow', async () => {
      const el = await fixture<OnexRange>(html` <onex-range value="50"></onex-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('onex-change', changeHandler);
      el.addEventListener('onex-input', inputHandler);
      el.focus();
      await sendKeys({ press: 'ArrowRight' });
      await el.updateComplete;

      expect(el.value).to.equal(51);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should not emit onex-change or onex-input when changing the value programmatically', async () => {
      const el = await fixture<OnexRange>(html` <onex-range value="0"></onex-range> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.value = 50;

      await el.updateComplete;
    });

    it('should not emit onex-change or onex-input when stepUp() is called programmatically', async () => {
      const el = await fixture<OnexRange>(html` <onex-range step="2" value="2"></onex-range> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.stepUp();
      await el.updateComplete;
    });

    it('should not emit onex-change or onex-input when stepDown() is called programmatically', async () => {
      const el = await fixture<OnexRange>(html` <onex-range step="2" value="2"></onex-range> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.stepDown();
      await el.updateComplete;
    });
  });

  describe('step', () => {
    it('should increment by step when stepUp() is called', async () => {
      const el = await fixture<OnexRange>(html` <onex-range step="2" value="2"></onex-range> `);

      el.stepUp();
      await el.updateComplete;
      expect(el.value).to.equal(4);
    });

    it('should decrement by step when stepDown() is called', async () => {
      const el = await fixture<OnexRange>(html` <onex-range step="2" value="2"></onex-range> `);

      el.stepDown();
      await el.updateComplete;
      expect(el.value).to.equal(0);
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-range name="a" value="1"></onex-range></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-range name="a" value="1"></onex-range></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-range name="a" value="99"></onex-range>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const input = form.querySelector('onex-range')!;
      input.value = 80;

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal(99);

      input.defaultValue = 0;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal(0);
    });
  });
});
