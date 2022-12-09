import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { clickOnElement } from '../../internal/test';
import type OneXRating from './rating';

describe('<onex-rating>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test"></onex-rating> `);
    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('role')).to.equal('slider');
    expect(base.getAttribute('aria-disabled')).to.equal('false');
    expect(base.getAttribute('aria-readonly')).to.equal('false');
    expect(base.getAttribute('aria-valuenow')).to.equal('0');
    expect(base.getAttribute('aria-valuemin')).to.equal('0');
    expect(base.getAttribute('aria-valuemax')).to.equal('5');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' rating ');
  });

  it('should be readonly with the readonly attribute', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test" readonly></onex-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-readonly')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--readonly ');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test" disabled></onex-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--disabled ');
  });

  it('should set max value by attribute', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test" max="12"></onex-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-valuemax')).to.equal('12');
  });

  it('should set selected value by attribute', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test" value="3"></onex-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-valuenow')).to.equal('3');
  });

  it('should emit onex-change when clicked', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating></onex-rating> `);
    const lastSymbol = el.shadowRoot!.querySelector<HTMLSpanElement>('.rating__symbol:last-child')!;
    const changeHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);

    await clickOnElement(lastSymbol);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal(5);
  });

  it('should emit onex-change when the value is changed with the keyboard', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating></onex-rating> `);
    const changeHandler = sinon.spy();

    el.addEventListener('onex-change', changeHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal(1);
  });

  it('should not emit onex-change when the value is changed programmatically', async () => {
    const el = await fixture<OnexRating>(html` <onex-rating label="Test" value="1"></onex-rating> `);
    el.addEventListener('onex-change', () => expect.fail('onex-change incorrectly emitted'));
    el.value = 5;
    await el.updateComplete;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<OnexRating>(html` <onex-rating label="Test"></onex-rating> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<OnexRating>(html` <onex-rating label="Test"></onex-rating> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });
});
