import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--onex-font-sans);
    font-size: var(--onex-font-size-small);
    font-weight: var(--onex-font-weight-semibold);
    border-radius: var(--onex-border-radius-medium);
    color: var(--onex-color-neutral-600);
    padding: var(--onex-spacing-medium) var(--onex-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--onex-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--onex-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--onex-focus-ring);
    outline-offset: calc(-1 * var(--onex-focus-ring-width) - var(--onex-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--onex-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--onex-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--onex-font-size-small);
    margin-inline-start: var(--onex-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--onex-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
