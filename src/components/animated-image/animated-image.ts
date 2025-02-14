import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import ShoelaceElement from '../../internal/shoelace-element';
import { watch } from '../../internal/watch';
import '../icon/icon';
import styles from './animated-image.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 *
 * @since 2.0
 * @status stable
 *
 * @dependency onex-icon
 *
 * @event onex-load - Emitted when the image loads successfully.
 * @event onex-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<onex-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<onex-icon>`.
 *
 * @part - control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
@customElement('onex-animated-image')
export default class OneXAnimatedImage extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  @state() frozenFrame: string;
  @state() isLoaded = false;

  @query('.animated-image__animated') animatedImage: HTMLImageElement;

  /** The path to the image to load. */
  @property() src: string;

  /** A description of the image used by assistive devices. */
  @property() alt: string;

  /** Plays the animation. When this attribute is remove, the animation will pause. */
  @property({ type: Boolean, reflect: true }) play: boolean;

  handleClick() {
    this.play = !this.play;
  }

  handleLoad() {
    const canvas = document.createElement('canvas');
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d')!.drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL('image/gif');

    if (!this.isLoaded) {
      this.emit('onex-load');
      this.isLoaded = true;
    }
  }

  handleError() {
    this.emit('onex-error');
  }

  @watch('play', { waitUntilFirstUpdate: true })
  handlePlayChange() {
    // When the animation starts playing, reset the src so it plays from the beginning. Since the src is cached, this
    // won't trigger another request.
    if (this.play) {
      this.animatedImage.src = '';
      this.animatedImage.src = this.src;
    }
  }

  @watch('src')
  handleSrcChange() {
    this.isLoaded = false;
  }

  render() {
    return html`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? 'false' : 'true'}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded
          ? html`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? 'true' : 'false'}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><onex-icon name="play-fill" library="system"></onex-icon></slot>
                <slot name="pause-icon"><onex-icon name="pause-fill" library="system"></onex-icon></slot>
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onex-animated-image': OneXAnimatedImage;
  }
}
