import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--onex-input-font-family);
    font-weight: var(--onex-input-font-weight);
    line-height: var(--onex-line-height-normal);
    letter-spacing: var(--onex-input-letter-spacing);
    vertical-align: middle;
    transition: var(--onex-transition-fast) color, var(--onex-transition-fast) border,
      var(--onex-transition-fast) box-shadow, var(--onex-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--onex-input-background-color);
    border: solid var(--onex-input-border-width) var(--onex-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--onex-input-background-color-hover);
    border-color: var(--onex-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--onex-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--onex-input-background-color-focus);
    border-color: var(--onex-input-border-color-focus);
    color: var(--onex-input-color-focus);
    box-shadow: 0 0 0 var(--onex-focus-ring-width) var(--onex-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--onex-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--onex-input-background-color-disabled);
    border-color: var(--onex-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--onex-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--onex-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--onex-input-filled-background-color);
    color: var(--onex-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--onex-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--onex-input-filled-background-color-focus);
    outline: var(--onex-focus-ring);
    outline-offset: var(--onex-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--onex-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--onex-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--onex-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--onex-input-border-radius-small);
    font-size: var(--onex-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--onex-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--onex-input-border-radius-medium);
    font-size: var(--onex-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--onex-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--onex-input-border-radius-large);
    font-size: var(--onex-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--onex-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;
