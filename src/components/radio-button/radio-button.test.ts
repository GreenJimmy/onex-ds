import { expect, fixture, html } from '@open-wc/testing';
import type OneXRadioGroup from '../radio-group/radio-group';
import type OneXRadioButton from './radio-button';

describe('<onex-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<OneXRadioGroup>(html`
      <onex-radio-group value="1">
        <onex-radio-button id="radio-1" value="1"></onex-radio-button>
        <onex-radio-button id="radio-2" value="2" disabled></onex-radio-button>
      </onex-radio-group>
    `);
    const radio1 = radioGroup.querySelector<OneXRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<OneXRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
