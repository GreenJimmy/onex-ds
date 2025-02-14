import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type OneXInput from './input';

describe('<onex-input>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexInput>(html` <onex-input label="Name"></onex-input> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<OnexInput>(html` <onex-input></onex-input> `);

    expect(el.type).to.equal('text');
    expect(el.size).to.equal('medium');
    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.title).to.equal('');
    expect(el.filled).to.be.false;
    expect(el.pill).to.be.false;
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.clearable).to.be.false;
    expect(el.passwordToggle).to.be.false;
    expect(el.passwordVisible).to.be.false;
    expect(el.noSpinButtons).to.be.false;
    expect(el.placeholder).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.min).to.be.undefined;
    expect(el.max).to.be.undefined;
    expect(el.step).to.be.undefined;
    expect(el.pattern).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
    expect(el.valueAsDate).to.be.null;
    expect(isNaN(el.valueAsNumber)).to.be.true;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<OnexInput>(html` <onex-input title="Test"></onex-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexInput>(html` <onex-input disabled></onex-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.disabled).to.be.true;
  });

  describe('value methods', () => {
    it('should set the value as a date when using valueAsDate', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="date"></onex-input> `);
      const today = new Date();

      el.valueAsDate = today;

      expect(el.value).to.equal(today.toISOString().split('T')[0]);
    });

    it('should set the value as a number when using valueAsNumber', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number"></onex-input> `);
      const num = 12345;

      el.valueAsNumber = num;

      expect(el.value).to.equal(num.toString());
    });
  });

  it('should focus the input when clicking on the label', async () => {
    const el = await fixture<OnexInput>(html` <onex-input label="Name"></onex-input> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('onex-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<OnexInput>(html` <onex-input></onex-input> `);
      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<OnexInput>(html` <onex-input required></onex-input> `);
      expect(el.reportValidity()).to.be.false;
      expect(el.invalid).to.be.true;
    });

    it('should be invalid when the pattern does not match', async () => {
      const el = await fixture<OnexInput>(html` <onex-input pattern="^test" value="fail"></onex-input> `);
      expect(el.invalid).to.be.true;
      expect(el.reportValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<OnexInput>(html` <onex-input disabled required></onex-input> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-input name="a" value="1"></onex-input></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-input name="a" value="1"></onex-input></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when submitting a form', () => {
    it('should submit the form when pressing enter in a form without a submit button', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-input></onex-input></form> `);
      const input = form.querySelector('onex-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', submitHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });

    it('should prevent submission when pressing enter in an input and canceling the keydown event', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><onex-input></onex-input></form> `);
      const input = form.querySelector('onex-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
      const keydownHandler = sinon.spy((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });

      form.addEventListener('submit', submitHandler);
      input.addEventListener('keydown', keydownHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => keydownHandler.calledOnce);

      expect(keydownHandler).to.have.been.calledOnce;
      expect(submitHandler).to.not.have.been.called;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-input name="a" value="test"></onex-input>
          <onex-button type="reset">Reset</onex-button>
        </form>
      `);
      const button = form.querySelector('onex-button')!;
      const input = form.querySelector('onex-input')!;
      input.value = '1234';

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('test');

      input.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('');
    });
  });

  describe('when calling HTMLFormElement.reportValidity()', () => {
    it('should be invalid when the input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <onex-input required value=""></onex-input>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });

    it('should be valid when the input is empty, reportValidity() is called, and the form has novalidate', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <onex-input required value=""></onex-input>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.true;
    });

    it('should be invalid when a native input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <input required value=""></input>
          <onex-button type="submit">Submit</onex-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });
  });

  describe('when the value changes', () => {
    it('should emit onex-change and onex-input when the user types in the input', async () => {
      const el = await fixture<OnexInput>(html` <onex-input></onex-input> `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('onex-input', inputHandler);
      el.addEventListener('onex-change', changeHandler);
      el.focus();
      await sendKeys({ type: 'abc' });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it('should not emit onex-change or onex-input when the value is set programmatically', async () => {
      const el = await fixture<OnexInput>(html` <onex-input></onex-input> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.value = 'abc';

      await el.updateComplete;
    });

    it('should not emit onex-change or onex-input when calling setRangeText()', async () => {
      const el = await fixture<OnexInput>(html` <onex-input value="hi there"></onex-input> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText('hello');

      await el.updateComplete;
    });
  });

  describe('when type="number"', () => {
    it('should be valid when the value is within the boundary of a step', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step=".5" value="1.5"></onex-input> `);
      expect(el.invalid).to.be.false;
    });

    it('should be invalid when the value is not within the boundary of a step', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step=".5" value="1.25"></onex-input> `);
      expect(el.invalid).to.be.true;
    });

    it('should update validity when step changes', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step=".5" value="1.5"></onex-input> `);
      expect(el.invalid).to.be.false;

      el.step = 1;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });

    it('should increment by step when stepUp() is called', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step="2" value="2"></onex-input> `);

      el.stepUp();
      await el.updateComplete;
      expect(el.value).to.equal('4');
    });

    it('should decrement by step when stepDown() is called', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step="2" value="2"></onex-input> `);

      el.stepDown();
      await el.updateComplete;
      expect(el.value).to.equal('0');
    });

    it('should not emit onex-input or onex-change when stepUp() is called programmatically', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step="2" value="2"></onex-input> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.stepUp();

      await el.updateComplete;
    });

    it('should not emit onex-input and onex-change when stepDown() is called programmatically', async () => {
      const el = await fixture<OnexInput>(html` <onex-input type="number" step="2" value="2"></onex-input> `);

      el.addEventListener('onex-change', () => expect.fail('onex-change should not be emitted'));
      el.addEventListener('onex-input', () => expect.fail('onex-input should not be emitted'));
      el.stepDown();

      await el.updateComplete;
    });
  });

  describe('when using spellcheck', () => {
    it('should enable spellcheck when no attribute is present', async () => {
      const el = await fixture<OnexInput>(html` <onex-input></onex-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('true');
      expect(input.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<OnexInput>(html` <onex-input spellcheck="true"></onex-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('true');
      expect(input.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<OnexInput>(html` <onex-input spellcheck="false"></onex-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('false');
      expect(input.spellcheck).to.be.false;
    });
  });
});
