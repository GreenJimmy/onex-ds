# Select

[component-header:onex-select]

```html preview
<onex-select>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item value="option-4">Option 4</onex-menu-item>
  <onex-menu-item value="option-5">Option 5</onex-menu-item>
  <onex-menu-item value="option-6">Option 6</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXDivider, OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    <OnexDivider />
    <OneXMenuItem value="option-4">Option 4</OneXMenuItem>
    <OneXMenuItem value="option-5">Option 5</OneXMenuItem>
    <OneXMenuItem value="option-6">Option 6</OneXMenuItem>
  </OneXSelect>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<onex-select label="Select one">
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect label="Select one">
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<onex-select label="Experience" help-text="Please tell us your skill level.">
  <onex-menu-item value="1">Novice</onex-menu-item>
  <onex-menu-item value="2">Intermediate</onex-menu-item>
  <onex-menu-item value="3">Advanced</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect label="Experience" help-text="Please tell us your skill level.">
    <OneXMenuItem value="1">Novice</OneXMenuItem>
    <OneXMenuItem value="2">Intermediate</OneXMenuItem>
    <OneXMenuItem value="3">Advanced</OneXMenuItem>
  </OneXSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<onex-select placeholder="Select one">
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placeholder="Select one">
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable.

```html preview
<onex-select placeholder="Clearable" clearable>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placeholder="Clearable" clearable>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<onex-select filled>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect filled>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<onex-select pill>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect pill>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<onex-select placeholder="Disabled" disabled>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placeholder="Disabled" disabled>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Setting the Selection

Use the `value` attribute to set the current selection. When users interact with the control, its `value` will update to reflect the newly selected menu item's value. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<onex-select value="option-2">
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXDivider, OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect value="option-2">
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXSelect>
);
```

### Setting the Selection Imperatively

To programmatically set the selection, update the `value` property as shown below. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<div class="selecting-example">
  <onex-select>
    <onex-menu-item value="option-1">Option 1</onex-menu-item>
    <onex-menu-item value="option-2">Option 2</onex-menu-item>
    <onex-menu-item value="option-3">Option 3</onex-menu-item>
  </onex-select>

  <br />

  <onex-button data-option="option-1">Set 1</onex-button>
  <onex-button data-option="option-2">Set 2</onex-button>
  <onex-button data-option="option-3">Set 3</onex-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('onex-select');

  [...container.querySelectorAll('onex-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OneXButton, OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState('option-1');

  return (
    <>
      <OnexSelect value={value} onSlChange={event => setValue(event.target.value)}>
        <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
        <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
        <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
      </OneXSelect>

      <br />

      <OnexButton onClick={() => setValue('option-1')}>Set 1</OneXButton>
      <OnexButton onClick={() => setValue('option-2')}>Set 2</OneXButton>
      <OnexButton onClick={() => setValue('option-3')}>Set 3</OneXButton>
    </>
  );
};
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. With this option, `value` will be an array of strings instead of a string. It's a good practice to use `clearable` when this option is enabled.

```html preview
<onex-select placeholder="Select a few" multiple clearable>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item value="option-4">Option 4</onex-menu-item>
  <onex-menu-item value="option-5">Option 5</onex-menu-item>
  <onex-menu-item value="option-6">Option 6</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXDivider, OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placeholder="Select a few" multiple clearable>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    <OnexDivider />
    <OneXMenuItem value="option-4">Option 4</OneXMenuItem>
    <OneXMenuItem value="option-5">Option 5</OneXMenuItem>
    <OneXMenuItem value="option-6">Option 6</OneXMenuItem>
  </OneXSelect>
);
```

?> When using the `multiple` option, the value will be an array instead of a string. You may need to [set the selection imperatively](#setting-the-selection-imperatively) unless you're using a framework that supports binding properties declaratively.

### Grouping Options

Options can be grouped visually using menu labels and dividers.

```html preview
<onex-select placeholder="Select one">
  <onex-menu-label>Group 1</onex-menu-label>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-label>Group 2</onex-menu-label>
  <onex-menu-item value="option-4">Option 4</onex-menu-item>
  <onex-menu-item value="option-5">Option 5</onex-menu-item>
  <onex-menu-item value="option-6">Option 6</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXDivider, OneXMenuItem, OneXMenuLabel, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placeholder="Select one">
    <OnexMenuLabel>Group 1</OneXMenuLabel>
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    <OnexDivider></OneXDivider>
    <OnexMenuLabel>Group 2</OneXMenuLabel>
    <OneXMenuItem value="option-4">Option 4</OneXMenuItem>
    <OneXMenuItem value="option-5">Option 5</OneXMenuItem>
    <OneXMenuItem value="option-6">Option 6</OneXMenuItem>
  </OneXSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size.

```html preview
<onex-select placeholder="Small" size="small" multiple>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>

<br />

<onex-select placeholder="Medium" size="medium" multiple>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>

<br />

<onex-select placeholder="Large" size="large" multiple>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import { OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexSelect placeholder="Small" size="small" multiple>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    </OneXSelect>

    <br />

    <OnexSelect placeholder="Medium" size="medium" multiple>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    </OneXSelect>

    <br />

    <OnexSelect placeholder="Large" size="large" multiple>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
    </OneXSelect>
  </>
);
```

### Placement

The preferred placement of the select's menu can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<onex-select placement="top">
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
</onex-select>
```

```jsx react
import {
  OneXMenuItem,
  OneXSelect
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSelect placement="top">
    <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
    <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
    <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
  </OneXDropdown>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<onex-select placeholder="Small" size="small">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-select>
<br />
<onex-select placeholder="Medium" size="medium">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-select>
<br />
<onex-select placeholder="Large" size="large">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-menu-item value="option-1">Option 1</onex-menu-item>
  <onex-menu-item value="option-2">Option 2</onex-menu-item>
  <onex-menu-item value="option-3">Option 3</onex-menu-item>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-select>
```

```jsx react
import { OneXIcon, OneXMenuItem, OneXSelect } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexSelect placeholder="Small" size="small">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXSelect>
    <br />
    <OnexSelect placeholder="Medium" size="medium">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXSelect>
    <br />
    <OnexSelect placeholder="Large" size="large">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OneXMenuItem value="option-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="option-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="option-3">Option 3</OneXMenuItem>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXSelect>
  </>
);
```

[component-metadata:onex-select]
