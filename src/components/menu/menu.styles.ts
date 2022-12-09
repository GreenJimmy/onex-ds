import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--onex-panel-background-color);
    border: solid var(--onex-panel-border-width) var(--onex-panel-border-color);
    border-radius: var(--onex-border-radius-medium);
    padding: var(--onex-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(onex-divider) {
    --spacing: var(--onex-spacing-x-small);
  }
`;
