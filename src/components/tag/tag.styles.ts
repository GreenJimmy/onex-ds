import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--onex-color-primary-50);
    border-color: var(--onex-color-primary-200);
    color: var(--onex-color-primary-800);
  }

  .tag--success {
    background-color: var(--onex-color-success-50);
    border-color: var(--onex-color-success-200);
    color: var(--onex-color-success-800);
  }

  .tag--neutral {
    background-color: var(--onex-color-neutral-50);
    border-color: var(--onex-color-neutral-200);
    color: var(--onex-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--onex-color-warning-50);
    border-color: var(--onex-color-warning-200);
    color: var(--onex-color-warning-800);
  }

  .tag--danger {
    background-color: var(--onex-color-danger-50);
    border-color: var(--onex-color-danger-200);
    color: var(--onex-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--onex-button-font-size-small);
    height: calc(var(--onex-input-height-small) * 0.8);
    line-height: calc(var(--onex-input-height-small) - var(--onex-input-border-width) * 2);
    border-radius: var(--onex-input-border-radius-small);
    padding: 0 var(--onex-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--onex-button-font-size-medium);
    height: calc(var(--onex-input-height-medium) * 0.8);
    line-height: calc(var(--onex-input-height-medium) - var(--onex-input-border-width) * 2);
    border-radius: var(--onex-input-border-radius-medium);
    padding: 0 var(--onex-spacing-small);
  }

  .tag--large {
    font-size: var(--onex-button-font-size-large);
    height: calc(var(--onex-input-height-large) * 0.8);
    line-height: calc(var(--onex-input-height-large) - var(--onex-input-border-width) * 2);
    border-radius: var(--onex-input-border-radius-large);
    padding: 0 var(--onex-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--onex-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--onex-border-radius-pill);
  }
`;
