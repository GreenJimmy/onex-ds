# Button

[component-header:onex-button]

```html preview
<onex-button>Button</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexButton>Button</OneXButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<onex-button variant="default">Default</onex-button>
<onex-button variant="primary">Primary</onex-button>
<onex-button variant="success">Success</onex-button>
<onex-button variant="neutral">Neutral</onex-button>
<onex-button variant="warning">Warning</onex-button>
<onex-button variant="danger">Danger</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default">Default</OneXButton>
    <OnexButton variant="primary">Primary</OneXButton>
    <OnexButton variant="success">Success</OneXButton>
    <OnexButton variant="neutral">Neutral</OneXButton>
    <OnexButton variant="warning">Warning</OneXButton>
    <OnexButton variant="danger">Danger</OneXButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<onex-button size="small">Small</onex-button>
<onex-button size="medium">Medium</onex-button>
<onex-button size="large">Large</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton size="small">Small</OneXButton>
    <OnexButton size="medium">Medium</OneXButton>
    <OnexButton size="large">Large</OneXButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<onex-button variant="default" outline>Default</onex-button>
<onex-button variant="primary" outline>Primary</onex-button>
<onex-button variant="success" outline>Success</onex-button>
<onex-button variant="neutral" outline>Neutral</onex-button>
<onex-button variant="warning" outline>Warning</onex-button>
<onex-button variant="danger" outline>Danger</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" outline>
      Default
    </OneXButton>
    <OnexButton variant="primary" outline>
      Primary
    </OneXButton>
    <OnexButton variant="success" outline>
      Success
    </OneXButton>
    <OnexButton variant="neutral" outline>
      Neutral
    </OneXButton>
    <OnexButton variant="warning" outline>
      Warning
    </OneXButton>
    <OnexButton variant="danger" outline>
      Danger
    </OneXButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<onex-button size="small" pill>Small</onex-button>
<onex-button size="medium" pill>Medium</onex-button>
<onex-button size="large" pill>Large</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton size="small" pill>
      Small
    </OneXButton>
    <OnexButton size="medium" pill>
      Medium
    </OneXButton>
    <OnexButton size="large" pill>
      Large
    </OneXButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<onex-icon>` in the default slot.

```html preview
<onex-button variant="default" size="small" circle>
  <onex-icon name="gear" label="Settings"></onex-icon>
</onex-button>

<onex-button variant="default" size="medium" circle>
  <onex-icon name="gear" label="Settings"></onex-icon>
</onex-button>

<onex-button variant="default" size="large" circle>
  <onex-icon name="gear" label="Settings"></onex-icon>
</onex-button>
```

```jsx react
import { OneXButton, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" size="small" circle>
      <OnexIcon name="gear" />
    </OneXButton>
    <OnexButton variant="default" size="medium" circle>
      <OnexIcon name="gear" />
    </OneXButton>
    <OnexButton variant="default" size="large" circle>
      <OnexIcon name="gear" />
    </OneXButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<onex-button variant="text" size="small">Text</onex-button>
<onex-button variant="text" size="medium">Text</onex-button>
<onex-button variant="text" size="large">Text</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="text" size="small">
      Text
    </OneXButton>
    <OnexButton variant="text" size="medium">
      Text
    </OneXButton>
    <OnexButton variant="text" size="large">
      Text
    </OneXButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<onex-button href="https://example.com/">Link</onex-button>
<onex-button href="https://example.com/" target="_blank">New Window</onex-button>
<onex-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</onex-button>
<onex-button href="https://example.com/" disabled>Disabled</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton href="https://example.com/">Link</OneXButton>
    <OnexButton href="https://example.com/" target="_blank">
      New Window
    </OneXButton>
    <OnexButton href="/assets/images/wordmark.svg" download="shoelace.svg">
      Download
    </OneXButton>
    <OnexButton href="https://example.com/" disabled>
      Disabled
    </OneXButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<onex-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</onex-button>
<onex-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</onex-button>
<onex-button variant="default" size="large" style="width: 100%;">Large</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </OneXButton>
    <OnexButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </OneXButton>
    <OnexButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </OneXButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<onex-button variant="default" size="small">
  <onex-icon slot="prefix" name="gear"></onex-icon>
  Settings
</onex-button>

<onex-button variant="default" size="small">
  <onex-icon slot="suffix" name="arrow-counterclockwise"></onex-icon>
  Refresh
</onex-button>

<onex-button variant="default" size="small">
  <onex-icon slot="prefix" name="link-45deg"></onex-icon>
  <onex-icon slot="suffix" name="box-arrow-up-right"></onex-icon>
  Open
</onex-button>

<br /><br />

<onex-button variant="default">
  <onex-icon slot="prefix" name="gear"></onex-icon>
  Settings
</onex-button>

<onex-button variant="default">
  <onex-icon slot="suffix" name="arrow-counterclockwise"></onex-icon>
  Refresh
</onex-button>

<onex-button variant="default">
  <onex-icon slot="prefix" name="link-45deg"></onex-icon>
  <onex-icon slot="suffix" name="box-arrow-up-right"></onex-icon>
  Open
</onex-button>

<br /><br />

<onex-button variant="default" size="large">
  <onex-icon slot="prefix" name="gear"></onex-icon>
  Settings
</onex-button>

<onex-button variant="default" size="large">
  <onex-icon slot="suffix" name="arrow-counterclockwise"></onex-icon>
  Refresh
</onex-button>

<onex-button variant="default" size="large">
  <onex-icon slot="prefix" name="link-45deg"></onex-icon>
  <onex-icon slot="suffix" name="box-arrow-up-right"></onex-icon>
  Open
</onex-button>
```

```jsx react
import { OneXButton, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" size="small">
      <OnexIcon slot="prefix" name="gear"></OneXIcon>
      Settings
    </OneXButton>

    <OnexButton variant="default" size="small">
      <OnexIcon slot="suffix" name="arrow-counterclockwise"></OneXIcon>
      Refresh
    </OneXButton>

    <OnexButton variant="default" size="small">
      <OnexIcon slot="prefix" name="link-45deg"></OneXIcon>
      <OnexIcon slot="suffix" name="box-arrow-up-right"></OneXIcon>
      Open
    </OneXButton>

    <br />
    <br />

    <OnexButton variant="default">
      <OnexIcon slot="prefix" name="gear"></OneXIcon>
      Settings
    </OneXButton>

    <OnexButton variant="default">
      <OnexIcon slot="suffix" name="arrow-counterclockwise"></OneXIcon>
      Refresh
    </OneXButton>

    <OnexButton variant="default">
      <OnexIcon slot="prefix" name="link-45deg"></OneXIcon>
      <OnexIcon slot="suffix" name="box-arrow-up-right"></OneXIcon>
      Open
    </OneXButton>

    <br />
    <br />

    <OnexButton variant="default" size="large">
      <OnexIcon slot="prefix" name="gear"></OneXIcon>
      Settings
    </OneXButton>

    <OnexButton variant="default" size="large">
      <OnexIcon slot="suffix" name="arrow-counterclockwise"></OneXIcon>
      Refresh
    </OneXButton>

    <OnexButton variant="default" size="large">
      <OnexIcon slot="prefix" name="link-45deg"></OneXIcon>
      <OnexIcon slot="suffix" name="box-arrow-up-right"></OneXIcon>
      Open
    </OneXButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<onex-button size="small" caret>Small</onex-button>
<onex-button size="medium" caret>Medium</onex-button>
<onex-button size="large" caret>Large</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton size="small" caret>
      Small
    </OneXButton>
    <OnexButton size="medium" caret>
      Medium
    </OneXButton>
    <OnexButton size="large" caret>
      Large
    </OneXButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<onex-button variant="default" loading>Default</onex-button>
<onex-button variant="primary" loading>Primary</onex-button>
<onex-button variant="success" loading>Success</onex-button>
<onex-button variant="neutral" loading>Neutral</onex-button>
<onex-button variant="warning" loading>Warning</onex-button>
<onex-button variant="danger" loading>Danger</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" loading>
      Default
    </OneXButton>
    <OnexButton variant="primary" loading>
      Primary
    </OneXButton>
    <OnexButton variant="success" loading>
      Success
    </OneXButton>
    <OnexButton variant="neutral" loading>
      Neutral
    </OneXButton>
    <OnexButton variant="warning" loading>
      Warning
    </OneXButton>
    <OnexButton variant="danger" loading>
      Danger
    </OneXButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<onex-button variant="default" disabled>Default</onex-button>
<onex-button variant="primary" disabled>Primary</onex-button>
<onex-button variant="success" disabled>Success</onex-button>
<onex-button variant="neutral" disabled>Neutral</onex-button>
<onex-button variant="warning" disabled>Warning</onex-button>
<onex-button variant="danger" disabled>Danger</onex-button>
```

```jsx react
import { OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton variant="default" disabled>
      Default
    </OneXButton>

    <OnexButton variant="primary" disabled>
      Primary
    </OneXButton>

    <OnexButton variant="success" disabled>
      Success
    </OneXButton>

    <OnexButton variant="neutral" disabled>
      Neutral
    </OneXButton>

    <OnexButton variant="warning" disabled>
      Warning
    </OneXButton>

    <OnexButton variant="danger" disabled>
      Danger
    </OneXButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `onex-button[variant="primary"]`).

```html preview
<onex-button class="pink">Pink Button</onex-button>

<style>
  onex-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --onex-input-height-medium: 48px;
    --onex-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--onex-transition-medium) transform ease, var(--onex-transition-medium) border ease;
  }

  onex-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  onex-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  onex-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:onex-button]
