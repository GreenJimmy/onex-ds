import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import ShoelaceElement from '../../internal/shoelace-element';
import styles from './visually-hidden.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 *
 * @since 2.0
 * @status stable
 *
 * @slot - The content to be visually hidden.
 */
@customElement('onex-visually-hidden')
export default class OneXVisuallyHidden extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onex-visually-hidden': OneXVisuallyHidden;
  }
}
