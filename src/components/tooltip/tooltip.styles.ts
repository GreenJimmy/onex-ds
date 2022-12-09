import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--onex-tooltip-arrow-size);
    --arrow-color: var(--onex-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--onex-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--onex-tooltip-border-radius);
    background-color: var(--onex-tooltip-background-color);
    font-family: var(--onex-tooltip-font-family);
    font-size: var(--onex-tooltip-font-size);
    font-weight: var(--onex-tooltip-font-weight);
    line-height: var(--onex-tooltip-line-height);
    color: var(--onex-tooltip-color);
    padding: var(--onex-tooltip-padding);
    pointer-events: none;
  }
`;
