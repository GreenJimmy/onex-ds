import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --height: var(--onex-toggle-size);
    --thumb-size: calc(var(--onex-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--onex-input-font-family);
    font-size: var(--onex-input-font-size-medium);
    font-weight: var(--onex-input-font-weight);
    color: var(--onex-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--onex-color-neutral-400);
    border: solid var(--onex-input-border-width) var(--onex-color-neutral-400);
    border-radius: var(--height);
    transition: var(--onex-transition-fast) border-color, var(--onex-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--onex-color-neutral-0);
    border-radius: 50%;
    border: solid var(--onex-input-border-width) var(--onex-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--onex-transition-fast) translate ease, var(--onex-transition-fast) background-color,
      var(--onex-transition-fast) border-color, var(--onex-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--onex-color-neutral-400);
    border-color: var(--onex-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--onex-color-neutral-400);
    border-color: var(--onex-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-primary-600);
    outline: var(--onex-focus-ring);
    outline-offset: var(--onex-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--onex-color-primary-600);
    border-color: var(--onex-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--onex-color-primary-600);
    border-color: var(--onex-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--onex-color-primary-600);
    border-color: var(--onex-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--onex-color-neutral-0);
    border-color: var(--onex-color-primary-600);
    outline: var(--onex-focus-ring);
    outline-offset: var(--onex-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--onex-input-required-content);
    margin-inline-start: var(--onex-input-required-content-offset);
  }
`;
