# Radio Button

[component-header:onex-radio-button]

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button value="1">Option 1</onex-radio-button>
  <onex-radio-button value="2">Option 2</onex-radio-button>
  <onex-radio-button value="3">Option 3</onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton value="1">Option 1</OneXRadioButton>
    <OneXRadioButton value="2">Option 2</OneXRadioButton>
    <OneXRadioButton value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button value="1">Option 1</onex-radio-button>
  <onex-radio-button value="2">Option 2</onex-radio-button>
  <onex-radio-button value="3">Option 3</onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton value="1">Option 1</OneXRadioButton>
    <OneXRadioButton value="2">Option 2</OneXRadioButton>
    <OneXRadioButton value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button value="1">Option 1</onex-radio-button>
  <onex-radio-button value="2" disabled>Option 2</onex-radio-button>
  <onex-radio-button value="3">Option 3</onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton value="1">Option 1</OneXRadioButton>
    <OneXRadioButton value="2" disabled>
      Option 2
    </OneXRadioButton>
    <OneXRadioButton value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button size="small" value="1">Option 1</onex-radio-button>
  <onex-radio-button size="small" value="2">Option 2</onex-radio-button>
  <onex-radio-button size="small" value="3">Option 3</onex-radio-button>
</onex-radio-group>

<br />

<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button size="medium" value="1">Option 1</onex-radio-button>
  <onex-radio-button size="medium" value="2">Option 2</onex-radio-button>
  <onex-radio-button size="medium" value="3">Option 3</onex-radio-button>
</onex-radio-group>

<br />

<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button size="large" value="1">Option 1</onex-radio-button>
  <onex-radio-button size="large" value="2">Option 2</onex-radio-button>
  <onex-radio-button size="large" value="3">Option 3</onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton size="small" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton size="small" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton size="small" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>

  <br />

  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton size="medium" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton size="medium" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton size="medium" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>

  <br />

  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton size="large" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton size="large" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton size="large" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button pill size="small" value="1">Option 1</onex-radio-button>
  <onex-radio-button pill size="small" value="2">Option 2</onex-radio-button>
  <onex-radio-button pill size="small" value="3">Option 3</onex-radio-button>
</onex-radio-group>

<br />

<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button pill size="medium" value="1">Option 1</onex-radio-button>
  <onex-radio-button pill size="medium" value="2">Option 2</onex-radio-button>
  <onex-radio-button pill size="medium" value="3">Option 3</onex-radio-button>
</onex-radio-group>

<br />

<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button pill size="large" value="1">Option 1</onex-radio-button>
  <onex-radio-button pill size="large" value="2">Option 2</onex-radio-button>
  <onex-radio-button pill size="large" value="3">Option 3</onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton pill size="small" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton pill size="small" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton pill size="small" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>

  <br />

  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton pill size="medium" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton pill size="medium" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton pill size="medium" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>

  <br />

  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton pill size="large" value="1">Option 1</OneXRadioButton>
    <OneXRadioButton pill size="large" value="2">Option 2</OneXRadioButton>
    <OneXRadioButton pill size="large" value="3">Option 3</OneXRadioButton>
  </OneXRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio-button value="1">
    <onex-icon slot="prefix" name="archive"></onex-icon>
    Option 1
  </onex-radio-button>

  <onex-radio-button value="2">
    <onex-icon slot="suffix" name="bag"></onex-icon>
    Option 2
  </onex-radio-button>

  <onex-radio-button value="3">
    <onex-icon slot="prefix" name="gift"></onex-icon>
    <onex-icon slot="suffix" name="cart"></onex-icon>
    Option 3
  </onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXIcon, OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadioButton value="1">
      <OnexIcon slot="prefix" name="archive" />
      Option 1
    </OneXRadioButton>

    <OneXRadioButton value="2">
      <OnexIcon slot="suffix" name="bag" />
      Option 2
    </OneXRadioButton>

    <OneXRadioButton value="3">
      <OnexIcon slot="prefix" name="gift" />
      <OnexIcon slot="suffix" name="cart" />
      Option 3
    </OneXRadioButton>
  </OneXRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<onex-radio-group label="Select an option" name="a" value="neutral">
  <onex-radio-button value="angry">
    <onex-icon name="emoji-angry" label="Angry"></onex-icon>
  </onex-radio-button>

  <onex-radio-button value="sad">
    <onex-icon name="emoji-frown" label="Sad"></onex-icon>
  </onex-radio-button>

  <onex-radio-button value="neutral">
    <onex-icon name="emoji-neutral" label="Neutral"></onex-icon>
  </onex-radio-button>

  <onex-radio-button value="happy">
    <onex-icon name="emoji-smile" label="Happy"></onex-icon>
  </onex-radio-button>

  <onex-radio-button value="laughing">
    <onex-icon name="emoji-laughing" label="Laughing"></onex-icon>
  </onex-radio-button>
</onex-radio-group>
```

```jsx react
import { OneXIcon, OneXRadioButton, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="neutral">
    <OneXRadioButton value="angry">
      <OnexIcon name="emoji-angry" label="Angry" />
    </OneXRadioButton>

    <OneXRadioButton value="sad">
      <OnexIcon name="emoji-frown" label="Sad" />
    </OneXRadioButton>

    <OneXRadioButton value="neutral">
      <OnexIcon name="emoji-neutral" label="Neutral" />
    </OneXRadioButton>

    <OneXRadioButton value="happy">
      <OnexIcon name="emoji-smile" label="Happy" />
    </OneXRadioButton>

    <OneXRadioButton value="laughing">
      <OnexIcon name="emoji-laughing" label="Laughing" />
    </OneXRadioButton>
  </OneXRadioGroup>
);
```

[component-metadata:onex-radio-button]
