# Radio Group

[component-header:onex-radio-group]

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<onex-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <onex-radio value="1">Option 1</onex-radio>
  <onex-radio value="2">Option 2</onex-radio>
  <onex-radio value="3">Option 3</onex-radio>
</onex-radio-group>
```

```jsx react
import { OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <OneXRadio value="1">Option 1</OneXRadio>
    <OneXRadio value="2">Option 2</OneXRadio>
    <OneXRadio value="3">Option 3</OneXRadio>
  </OneXRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<onex-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
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

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html preview
<form class="validation">
  <onex-radio-group label="Select an option" name="a" required>
    <onex-radio value="1">Option 1</onex-radio>
    <onex-radio value="2">Option 2</onex-radio>
    <onex-radio value="3">Option 3</onex-radio>
  </onex-radio-group>
  <br />
  <onex-button type="submit" variant="primary">Submit</onex-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { OneXButton, OneXIcon, OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <OneXRadioGroup label="Select an option" name="a" required onSlChange={handleChange}>
        <OneXRadio value="1">
          Option 1
        </OneXRadio>
        <OneXRadiovalue="2">
          Option 2
        </OneXRadio>
        <OneXRadio value="3">
          Option 3
        </OneXRadio>
      </OneXRadioGroup>
      <br />
      <OnexButton type="submit" variant="primary">
        Submit
      </OneXButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <onex-radio-group label="Select an option" name="a" value="1">
    <onex-radio value="1">Not me</onex-radio>
    <onex-radio value="2">Me neither</onex-radio>
    <onex-radio value="3">Choose me</onex-radio>
  </onex-radio-group>
  <br />
  <onex-button type="submit" variant="primary">Submit</onex-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('onex-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('onex-radio-group').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('onex-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { OneXButton, OneXIcon, OneXRadio, OneXRadioGroup } from '@shoelace-style/shoelace/dist/react';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <OneXRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onSlChange={handleChange}>
        <OneXRadio value="1">Not me</OneXRadio>
        <OneXRadio value="2">Me neither</OneXRadio>
        <OneXRadio value="3">Choose me</OneXRadio>
      </OneXRadioGroup>
      <br />
      <OnexButton type="submit" variant="primary">
        Submit
      </OneXButton>
    </form>
  );
};
```

[component-metadata:onex-radio-group]
