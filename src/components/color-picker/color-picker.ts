import Color from 'color';
import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defaultValue } from '../../internal/default-value';
import { drag } from '../../internal/drag';
import { FormSubmitController } from '../../internal/form';
import { clamp } from '../../internal/math';
import ShoelaceElement from '../../internal/shoelace-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../button-group/button-group';
import '../button/button';
import '../dropdown/dropdown';
import '../icon/icon';
import '../input/input';
import '../visually-hidden/visually-hidden';
import styles from './color-picker.styles';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type OneXDropdown from '../dropdown/dropdown';
import type OneXInput from '../input/input';
import type { CSSResultGroup } from 'lit';

const hasEyeDropper = 'EyeDropper' in window;

interface EyeDropperConstructor {
  new (): EyeDropperInterface;
}

interface EyeDropperInterface {
  open: () => Promise<{ sRGBHex: string }>;
}

declare const EyeDropper: EyeDropperConstructor;

/**
 * @summary Color pickers allow the user to select a color.
 *
 * @since 2.0
 * @status stable
 *
 * @dependency onex-button
 * @dependency onex-button-group
 * @dependency onex-dropdown
 * @dependency onex-input
 * @dependency onex-visually-hidden
 *
 * @slot label - The color picker's form label. Alternatively, you can use the `label` attribute.
 *
 * @event onex-change Emitted when the color picker's value changes.
 * @event onex-input Emitted when the color picker receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart trigger - The color picker's dropdown trigger.
 * @csspart swatches - The container that holds the swatches.
 * @csspart swatch - Each individual swatch.
 * @csspart grid - The color grid.
 * @csspart grid-handle - The color grid's handle.
 * @csspart hue-slider - The hue slider.
 * @csspart opacity-slider - The opacity slider.
 * @csspart slider - Hue and opacity sliders.
 * @csspart slider-handle - Hue and opacity slider handles.
 * @csspart preview - The preview color.
 * @csspart input - The text input.
 * @csspart eye-dropper-button - The eye dropper button.
 * @csspart eye-dropper-button__button - The eye dropper button's exported `button` part.
 * @csspart eye-dropper-button__prefix - The eye dropper button's exported `prefix` part.
 * @csspart eye-dropper-button__label - The eye dropper button's exported `label` part.
 * @csspart eye-dropper-button__button-suffix - The eye dropper button's exported `suffix` part.
 * @csspart eye-dropper-button__caret - The eye dropper button's exported `caret` part.
 * @csspart format-button - The format button.
 * @csspart format-button__button - The format button's exported `button` part.
 * @csspart format-button__prefix - The format button's exported `prefix` part.
 * @csspart format-button__label - The format button's exported `label` part.
 * @csspart format-button__button-suffix - The format button's exported `suffix` part.
 * @csspart format-button__caret - The format button's exported `caret` part.
 *
 * @cssproperty --grid-width - The width of the color grid.
 * @cssproperty --grid-height - The height of the color grid.
 * @cssproperty --grid-handle-size - The size of the color grid's handle.
 * @cssproperty --onexider-height - The height of the hue and alpha sliders.
 * @cssproperty --onexider-handle-size - The diameter of the slider's handle.
 * @cssproperty --swatch-size - The size of each predefined color swatch.
 */
@customElement('onex-color-picker')
export default class OneXColorPicker extends ShoelaceElement implements ShoelaceFormControl {
  static styles: CSSResultGroup = styles;

  @query('[part~="input"]') input: OneXInput;
  @query('[part~="preview"]') previewButton: HTMLButtonElement;
  @query('.color-dropdown') dropdown: OneXDropdown;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this);
  private isSafeValue = false;
  private lastValueEmitted: string;
  private readonly localize = new LocalizeController(this);

  @state() private isDraggingGridHandle = false;
  @state() private isEmpty = false;
  @state() private inputValue = '';
  @state() private hue = 0;
  @state() private saturation = 100;
  @state() private lightness = 100;
  @state() private brightness = 100;
  @state() private alpha = 100;
  @state() invalid = false;

  /**
   * The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
   * in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
   * data.
   */
  @property() value = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = '';

  /**
   * The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
   * display HTML, you can use the `label` slot` instead.
   */
  @property() label = '';

  /**
   * The format to use. If opacity is enabled, these will translate to HEXA, RGBA, and HSLA respectively. The color
   * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
   */
  @property() format: 'hex' | 'rgb' | 'hsl' = 'hex';

  /** Renders the color picker inline rather than in a dropdown. */
  @property({ type: Boolean, reflect: true }) inline = false;

  /** Determines the size of the color picker's trigger. This has no effect on inline color pickers. */
  @property() size: 'small' | 'medium' | 'large' = 'medium';

  /** Removes the button that lets users toggle between format.   */
  @property({ attribute: 'no-format-toggle', type: Boolean }) noFormatToggle = false;

  /** The name of the form control, submitted as a name/value pair with form data. */
  @property() name = '';

  /** Disables the color picker. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  @property({ type: Boolean }) opacity = false;

  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  @property({ type: Boolean }) uppercase = false;

  /**
   * An array of predefined color swatches to display. Can include any format the color picker can parse, including
   * HEX(A), RGB(A), HSL(A), and CSS color names.
   */
  @property({ attribute: false }) swatches: string[] = [
    '#d0021b',
    '#f5a623',
    '#f8e71c',
    '#8b572a',
    '#7ed321',
    '#417505',
    '#bd10e0',
    '#9013fe',
    '#4a90e2',
    '#50e3c2',
    '#b8e986',
    '#000',
    '#444',
    '#888',
    '#ccc',
    '#fff'
  ];

  connectedCallback() {
    super.connectedCallback();

    if (this.value) {
      this.setColor(this.value);
      this.inputValue = this.value;
      this.lastValueEmitted = this.value;
      this.syncValues();
    } else {
      this.isEmpty = true;
      this.inputValue = '';
      this.lastValueEmitted = '';
    }
  }

  /** Returns the current value as a string in the specified format. */
  getFormattedValue(format: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' = 'hex') {
    const currentColor = this.parseColor(
      `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    );

    if (currentColor === null) {
      return '';
    }

    switch (format) {
      case 'hex':
        return currentColor.hex;
      case 'hexa':
        return currentColor.hexa;
      case 'rgb':
        return currentColor.rgb.string;
      case 'rgba':
        return currentColor.rgba.string;
      case 'hsl':
        return currentColor.hsl.string;
      case 'hsla':
        return currentColor.hsla.string;
      default:
        return '';
    }
  }

  getBrightness(lightness: number) {
    return clamp(-1 * ((200 * lightness) / (this.saturation - 200)), 0, 100);
  }

  getLightness(brightness: number) {
    return clamp(((((200 - this.saturation) * brightness) / 100) * 5) / 10, 0, 100);
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (!this.inline && this.input.invalid) {
      // If the input is inline and invalid, show the dropdown so the browser can focus on it
      this.dropdown.show();
      this.addEventListener('onex-after-show', () => this.input.reportValidity(), { once: true });
      return this.checkValidity();
    }

    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = this.input.invalid;
  }

  handleCopy() {
    this.input.select();
    document.execCommand('copy');
    this.previewButton.focus();

    // Show copied animation
    this.previewButton.classList.add('color-picker__preview-color--copied');
    this.previewButton.addEventListener('animationend', () => {
      this.previewButton.classList.remove('color-picker__preview-color--copied');
    });
  }

  handleFormatToggle() {
    const formats = ['hex', 'rgb', 'hsl'];
    const nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
    this.format = formats[nextIndex] as 'hex' | 'rgb' | 'hsl';
    this.setColor(this.value);
    this.emit('onex-change');
    this.emit('onex-input');
  }

  handleAlphaDrag(event: PointerEvent) {
    const container = this.shadowRoot!.querySelector<HTMLElement>('.color-picker__slider.color-picker__alpha')!;
    const handle = container.querySelector<HTMLElement>('.color-picker__slider-handle')!;
    const { width } = container.getBoundingClientRect();
    let oldValue = this.value;

    handle.focus();
    event.preventDefault();

    drag(container, {
      onMove: x => {
        this.alpha = clamp((x / width) * 100, 0, 100);
        this.syncValues();

        if (this.value !== oldValue) {
          oldValue = this.value;
          this.emit('onex-change');
          this.emit('onex-input');
        }
      },
      initialEvent: event
    });
  }

  handleHueDrag(event: PointerEvent) {
    const container = this.shadowRoot!.querySelector<HTMLElement>('.color-picker__slider.color-picker__hue')!;
    const handle = container.querySelector<HTMLElement>('.color-picker__slider-handle')!;
    const { width } = container.getBoundingClientRect();
    let oldValue = this.value;

    handle.focus();
    event.preventDefault();

    drag(container, {
      onMove: x => {
        this.hue = clamp((x / width) * 360, 0, 360);
        this.syncValues();

        if (this.value !== oldValue) {
          oldValue = this.value;
          this.emit('onex-change');
          this.emit('onex-input');
        }
      },
      initialEvent: event
    });
  }

  handleGridDrag(event: PointerEvent) {
    const grid = this.shadowRoot!.querySelector<HTMLElement>('.color-picker__grid')!;
    const handle = grid.querySelector<HTMLElement>('.color-picker__grid-handle')!;
    const { width, height } = grid.getBoundingClientRect();
    let oldValue = this.value;

    handle.focus();
    event.preventDefault();

    this.isDraggingGridHandle = true;

    drag(grid, {
      onMove: (x, y) => {
        this.saturation = clamp((x / width) * 100, 0, 100);
        this.brightness = clamp(100 - (y / height) * 100, 0, 100);
        this.lightness = this.getLightness(this.brightness);
        this.syncValues();

        if (this.value !== oldValue) {
          oldValue = this.value;
          this.emit('onex-change');
          this.emit('onex-input');
        }
      },
      onStop: () => (this.isDraggingGridHandle = false),
      initialEvent: event
    });
  }

  handleAlphaKeyDown(event: KeyboardEvent) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.alpha = clamp(this.alpha - increment, 0, 100);
      this.syncValues();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.alpha = clamp(this.alpha + increment, 0, 100);
      this.syncValues();
    }

    if (event.key === 'Home') {
      event.preventDefault();
      this.alpha = 0;
      this.syncValues();
    }

    if (event.key === 'End') {
      event.preventDefault();
      this.alpha = 100;
      this.syncValues();
    }

    if (this.value !== oldValue) {
      this.emit('onex-change');
      this.emit('onex-input');
    }
  }

  handleHueKeyDown(event: KeyboardEvent) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hue = clamp(this.hue - increment, 0, 360);
      this.syncValues();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.hue = clamp(this.hue + increment, 0, 360);
      this.syncValues();
    }

    if (event.key === 'Home') {
      event.preventDefault();
      this.hue = 0;
      this.syncValues();
    }

    if (event.key === 'End') {
      event.preventDefault();
      this.hue = 360;
      this.syncValues();
    }

    if (this.value !== oldValue) {
      this.emit('onex-change');
      this.emit('onex-input');
    }
  }

  handleGridKeyDown(event: KeyboardEvent) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.saturation = clamp(this.saturation - increment, 0, 100);
      this.lightness = this.getLightness(this.brightness);
      this.syncValues();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.saturation = clamp(this.saturation + increment, 0, 100);
      this.lightness = this.getLightness(this.brightness);
      this.syncValues();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.brightness = clamp(this.brightness + increment, 0, 100);
      this.lightness = this.getLightness(this.brightness);
      this.syncValues();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.brightness = clamp(this.brightness - increment, 0, 100);
      this.lightness = this.getLightness(this.brightness);
      this.syncValues();
    }

    if (this.value !== oldValue) {
      this.emit('onex-change');
      this.emit('onex-input');
    }
  }

  handleInputChange(event: CustomEvent) {
    const target = event.target as HTMLInputElement;
    const oldValue = this.value;

    // Prevent the <onex-input>'s onex-change event from bubbling up
    event.stopPropagation();

    if (this.input.value) {
      this.setColor(target.value);
      target.value = this.value;
    } else {
      this.value = '';
    }

    if (this.value !== oldValue) {
      this.emit('onex-change');
      this.emit('onex-input');
    }
  }

  handleInputInput(event: CustomEvent) {
    // Prevent the <onex-input>'s onex-input event from bubbling up
    event.stopPropagation();
  }

  handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const oldValue = this.value;

      if (this.input.value) {
        this.setColor(this.input.value);
        this.input.value = this.value;

        if (this.value !== oldValue) {
          this.emit('onex-change');
          this.emit('onex-input');
        }

        setTimeout(() => this.input.select());
      } else {
        this.hue = 0;
      }
    }
  }

  handleTouchMove(event: TouchEvent) {
    event.preventDefault();
  }

  normalizeColorString(colorString: string) {
    //
    // The color module we're using doesn't parse % values for the alpha channel in RGBA and HSLA. It also doesn't parse
    // hex colors when the # is missing. This pre-parser tries to normalize these edge cases to provide a better
    // experience for users who type in color values.
    //
    if (/rgba?/i.test(colorString)) {
      const rgba = colorString
        .replace(/[^\d.%]/g, ' ')
        .split(' ')
        .map(val => val.trim())
        .filter(val => val.length);

      if (rgba.length < 4) {
        rgba[3] = '1';
      }

      if (rgba[3].indexOf('%') > -1) {
        rgba[3] = (parseFloat(rgba[3].replace(/%/g, '')) / 100).toString();
      }

      return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
    }

    if (/hsla?/i.test(colorString)) {
      const hsla = colorString
        .replace(/[^\d.%]/g, ' ')
        .split(' ')
        .map(val => val.trim())
        .filter(val => val.length);

      if (hsla.length < 4) {
        hsla[3] = '1';
      }

      if (hsla[3].indexOf('%') > -1) {
        hsla[3] = (parseFloat(hsla[3].replace(/%/g, '')) / 100).toString();
      }

      return `hsla(${hsla[0]}, ${hsla[1]}, ${hsla[2]}, ${hsla[3]})`;
    }

    if (/^[0-9a-f]+$/i.test(colorString)) {
      return `#${colorString}`;
    }

    return colorString;
  }

  parseColor(colorString: string) {
    let parsed: Color;

    // The color module has a weak parser, so we normalize certain things to make the user experience better
    colorString = this.normalizeColorString(colorString);

    try {
      parsed = Color(colorString);
    } catch {
      return null;
    }

    const hslColor = parsed.hsl();

    const hsl = {
      h: hslColor.hue(),
      s: hslColor.saturationl(),
      l: hslColor.lightness(),
      a: hslColor.alpha()
    };

    const rgbColor = parsed.rgb();

    const rgb = {
      r: rgbColor.red(),
      g: rgbColor.green(),
      b: rgbColor.blue(),
      a: rgbColor.alpha()
    };

    const hex = {
      r: toHex(rgb.r),
      g: toHex(rgb.g),
      b: toHex(rgb.b),
      a: toHex(rgb.a * 255)
    };

    return {
      hsl: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        string: this.setLetterCase(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)
      },
      hsla: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        string: this.setLetterCase(
          `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${hsl.a.toFixed(2).toString()})`
        )
      },
      rgb: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        string: this.setLetterCase(`rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`)
      },
      rgba: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: rgb.a,
        string: this.setLetterCase(
          `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${rgb.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}`),
      hexa: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}${hex.a}`)
    };
  }

  setColor(colorString: string) {
    const newColor = this.parseColor(colorString);

    if (newColor === null) {
      return false;
    }

    this.hue = newColor.hsla.h;
    this.saturation = newColor.hsla.s;
    this.lightness = newColor.hsla.l;
    this.brightness = this.getBrightness(newColor.hsla.l);
    this.alpha = this.opacity ? newColor.hsla.a * 100 : 100;

    this.syncValues();

    return true;
  }

  setLetterCase(string: string) {
    if (typeof string !== 'string') {
      return '';
    }
    return this.uppercase ? string.toUpperCase() : string.toLowerCase();
  }

  async syncValues() {
    const currentColor = this.parseColor(
      `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    );

    if (currentColor === null) {
      return;
    }

    // Update the value
    if (this.format === 'hsl') {
      this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
    } else if (this.format === 'rgb') {
      this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
    } else {
      this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
    }

    // Setting this.value will trigger the watcher which parses the new value. We want to bypass that behavior because
    // we've already parsed the color here and conversion/rounding can lead to values changing slightly. When this
    // happens, dragging the grid handle becomes jumpy. After the next update, the usual behavior is restored.
    this.isSafeValue = true;
    this.value = this.inputValue;
    await this.updateComplete;
    this.isSafeValue = false;
  }

  handleAfterHide() {
    this.previewButton.classList.remove('color-picker__preview-color--copied');
  }

  handleEyeDropper() {
    if (!hasEyeDropper) {
      return;
    }

    const eyeDropper = new EyeDropper();

    eyeDropper
      .open()
      .then(colorSelectionResult => this.setColor(colorSelectionResult.sRGBHex))
      .catch(() => {
        // The user canceled, do nothing
      });
  }

  selectSwatch(color: string) {
    const oldValue = this.value;

    if (!this.disabled) {
      this.setColor(color);

      if (this.value !== oldValue) {
        this.emit('onex-change');
        this.emit('onex-input');
      }
    }
  }

  @watch('format', { waitUntilFirstUpdate: true })
  handleFormatChange() {
    this.syncValues();
  }

  @watch('opacity', { waitUntilFirstUpdate: true })
  handleOpacityChange() {
    this.alpha = 100;
  }

  @watch('value')
  handleValueChange(oldValue: string | undefined, newValue: string) {
    this.isEmpty = !newValue;

    if (!newValue) {
      this.hue = 0;
      this.saturation = 100;
      this.brightness = 100;
      this.lightness = this.getLightness(this.brightness);
      this.alpha = 100;
    }
    if (!this.isSafeValue && oldValue !== undefined) {
      const newColor = this.parseColor(newValue);

      if (newColor !== null) {
        this.inputValue = this.value;
        this.hue = newColor.hsla.h;
        this.saturation = newColor.hsla.s;
        this.lightness = newColor.hsla.l;
        this.brightness = this.getBrightness(newColor.hsla.l);
        this.alpha = newColor.hsla.a * 100;
      } else {
        this.inputValue = oldValue;
      }
    }

    if (this.value !== this.lastValueEmitted) {
      this.lastValueEmitted = this.value;
    }
  }

  render() {
    const gridHandleX = this.saturation;
    const gridHandleY = 100 - this.brightness;

    const colorPicker = html`
      <div
        part="base"
        class=${classMap({
          'color-picker': true,
          'color-picker--inline': this.inline,
          'color-picker--disabled': this.disabled
        })}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-labelledby="label"
        tabindex=${this.inline ? '0' : '-1'}
      >
        ${this.inline
          ? html`
              <onex-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </onex-visually-hidden>
            `
          : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${styleMap({ backgroundColor: `hsl(${this.hue}deg, 100%, 50%)` })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${classMap({
              'color-picker__grid-handle': true,
              'color-picker__grid-handle--dragging': this.isDraggingGridHandle
            })}
            style=${styleMap({
              top: `${gridHandleY}%`,
              left: `${gridHandleX}%`,
              backgroundColor: `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`
            })}
            role="application"
            aria-label="HSL"
            tabindex=${ifDefined(this.disabled ? undefined : '0')}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${styleMap({
                  left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
                })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${ifDefined(this.disabled ? undefined : '0')}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity
              ? html`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${styleMap({
                        backgroundImage: `linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`
                      })}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${styleMap({
                        left: `${this.alpha}%`
                      })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${ifDefined(this.disabled ? undefined : '0')}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `
              : ''}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term('copy')}
            style=${styleMap({
              '--preview-color': `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
            })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <onex-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? '' : this.inputValue}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term('currentValue')}
            @keydown=${this.handleInputKeyDown}
            @onex-change=${this.handleInputChange}
            @onex-input=${this.handleInputInput}
          ></onex-input>

          <onex-button-group>
            ${!this.noFormatToggle
              ? html`
                  <onex-button
                    part="format-button"
                    aria-label=${this.localize.term('toggleColorFormat')}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                  >
                    ${this.setLetterCase(this.format)}
                  </onex-button>
                `
              : ''}
            ${hasEyeDropper
              ? html`
                  <onex-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                  >
                    <onex-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term('selectAColorFromTheScreen')}
                    ></onex-icon>
                  </onex-button>
                `
              : ''}
          </onex-button-group>
        </div>

        ${this.swatches.length > 0
          ? html`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(swatch => {
                  return html`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${ifDefined(this.disabled ? undefined : '0')}
                      role="button"
                      aria-label=${swatch}
                      @click=${() => this.selectSwatch(swatch)}
                      @keydown=${(event: KeyboardEvent) =>
                        !this.disabled && event.key === 'Enter' && this.setColor(swatch)}
                    >
                      <div class="color-picker__swatch-color" style=${styleMap({ backgroundColor: swatch })}></div>
                    </div>
                  `;
                })}
              </div>
            `
          : ''}
      </div>
    `;

    // Render inline
    if (this.inline) {
      return colorPicker;
    }

    // Render as a dropdown
    return html`
      <onex-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @onex-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${classMap({
            'color-dropdown__trigger': true,
            'color-dropdown__trigger--disabled': this.disabled,
            'color-dropdown__trigger--small': this.size === 'small',
            'color-dropdown__trigger--medium': this.size === 'medium',
            'color-dropdown__trigger--large': this.size === 'large',
            'color-dropdown__trigger--empty': this.isEmpty,
            'color-picker__transparent-bg': true
          })}
          style=${styleMap({
            color: `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
          })}
          type="button"
        >
          <onex-visually-hidden>
            <slot name="label">${this.label}</slot>
          </onex-visually-hidden>
        </button>
        ${colorPicker}
      </onex-dropdown>
    `;
  }
}

function toHex(value: number) {
  const hex = Math.round(value).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

declare global {
  interface HTMLElementTagNameMap {
    'onex-color-picker': OneXColorPicker;
  }
}
