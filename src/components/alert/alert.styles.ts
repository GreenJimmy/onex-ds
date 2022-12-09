import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--onex-panel-background-color);
    border: solid var(--onex-panel-border-width) var(--onex-panel-border-color);
    border-top-width: calc(var(--onex-panel-border-width) * 3);
    border-radius: var(--onex-border-radius-medium);
    font-family: var(--onex-font-sans);
    font-size: var(--onex-font-size-small);
    font-weight: var(--onex-font-weight-normal);
    line-height: 1.6;
    color: var(--onex-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--onex-font-size-large);
    padding-inline-start: var(--onex-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--onex-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--onex-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--onex-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--onex-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--onex-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--onex-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--onex-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--onex-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--onex-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--onex-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--onex-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--onex-font-size-medium);
    padding-inline-end: var(--onex-spacing-medium);
  }
`;
