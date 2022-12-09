import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--onex-font-sans);
    font-size: var(--onex-font-size-small);
    font-weight: var(--onex-font-weight-semibold);
    line-height: var(--onex-line-height-normal);
    letter-spacing: var(--onex-letter-spacing-normal);
    color: var(--onex-color-neutral-500);
    padding: var(--onex-spacing-2x-small) var(--onex-spacing-x-large);
    user-select: none;
  }
`;
