import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--onex-input-font-family);
    font-size: var(--onex-input-font-size-medium);
    font-weight: var(--onex-input-font-weight);
    color: var(--onex-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--onex-toggle-size);
    height: var(--onex-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--onex-toggle-size);
    height: var(--onex-toggle-size);
    border: solid var(--onex-input-border-width) var(--onex-input-border-color);
    border-radius: 50%;
    background-color: var(--onex-input-background-color);
    color: transparent;
    transition: var(--onex-transition-fast) border-color, var(--onex-transition-fast) background-color,
      var(--onex-transition-fast) color, var(--onex-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--onex-input-border-color-hover);
    background-color: var(--onex-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-primary-600);
    background-color: var(--onex-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--onex-color-primary-500);
    background-color: var(--onex-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--onex-focus-ring);
    outline-offset: var(--onex-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--onex-input-label-color);
    line-height: var(--onex-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
