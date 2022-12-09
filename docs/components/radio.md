# Radio

[component-header:onex-radio]

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio value="1">Option 1</onex-radio>
  <onex-radio value="2">Option 2</onex-radio>
  <onex-radio value="3">Option 3</onex-radio>
</onex-radio-group>
```

```jsx react
import { OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadio value="1">Option 1</OneXRadio>
    <OneXRadio value="2">Option 2</OneXRadio>
    <OneXRadio value="3">Option 3</OneXRadio>
  </OneXRadioGroup>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<onex-radio-group label="Select an option" name="a" value="3">
  <onex-radio value="1">Option 1</onex-radio>
  <onex-radio value="2">Option 2</onex-radio>
  <onex-radio value="3">Option 3</onex-radio>
</onex-radio-group>
```

```jsx react
import { OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="3">
    <OneXRadio value="1">Option 1</OneXRadio>
    <OneXRadio value="2">Option 2</OneXRadio>
    <OneXRadio value="3">Option 3</OneXRadio>
  </OneXRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<onex-radio-group label="Select an option" name="a" value="1">
  <onex-radio value="1">Option 1</onex-radio>
  <onex-radio value="2" disabled>Option 2</onex-radio>
  <onex-radio value="3">Option 3</onex-radio>
</onex-radio-group>
```

```jsx react
import { OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" name="a" value="1">
    <OneXRadio value="1">Option 1</OneXRadio>
    <OneXRadio value="2" disabled>
      Option 2
    </OneXRadio>
    <OneXRadio value="3">Option 3</OneXRadio>
  </OneXRadioGroup>
);
```

[component-metadata:onex-radio]
