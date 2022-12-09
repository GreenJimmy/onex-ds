# Icon Button

[component-header:onex-icon-button]

For a full list of icons that come bundled with Shoelace, refer to the [icon component](/components/icon).

```html preview
<onex-icon-button name="gear" label="Settings"></onex-icon-button>
```

```jsx react
import { OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<onex-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></onex-icon-button>
<onex-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></onex-icon-button>
<onex-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></onex-icon-button>
```

```jsx react
import { OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <OnexIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <OnexIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <onex-icon-button name="type-bold" label="Bold"></onex-icon-button>
  <onex-icon-button name="type-italic" label="Italic"></onex-icon-button>
  <onex-icon-button name="type-underline" label="Underline"></onex-icon-button>
</div>

<style>
  .icon-button-color onex-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color onex-icon-button::part(base):hover,
  .icon-button-color onex-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color onex-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const css = `
  .icon-button-color onex-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color onex-icon-button::part(base):hover,
  .icon-button-color onex-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color onex-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <OnexIconButton name="type-bold" label="Bold" />
      <OnexIconButton name="type-italic" label="Italic" />
      <OnexIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<onex-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></onex-icon-button>
```

```jsx react
import { OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<onex-tooltip content="Settings">
  <onex-icon-button name="gear" label="Settings"></onex-icon-button>
</onex-tooltip>
```

```jsx react
import { OneXIconButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTooltip content="Settings">
    <OnexIconButton name="gear" label="Settings" />
  </OneXTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<onex-icon-button name="gear" label="Settings" disabled></onex-icon-button>
```

```jsx react
import { OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexIconButton name="gear" label="Settings" disabled />;
```

[component-metadata:onex-icon-button]
