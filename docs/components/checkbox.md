# Checkbox

[component-header:onex-checkbox]

```html preview
<onex-checkbox>Checkbox</onex-checkbox>
```

```jsx react
import { OneXCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexCheckbox>Checkbox</OneXCheckbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<onex-checkbox checked>Checked</onex-checkbox>
```

```jsx react
import { OneXCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexCheckbox checked>Checked</OneXCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<onex-checkbox indeterminate>Indeterminate</onex-checkbox>
```

```jsx react
import { OneXCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexCheckbox indeterminate>Indeterminate</OneXCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<onex-checkbox disabled>Disabled</onex-checkbox>
```

```jsx react
import { OneXCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexCheckbox disabled>Disabled</OneXCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <onex-checkbox>Check me</onex-checkbox>
  <br />
  <onex-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</onex-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('onex-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('onex-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('onex-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { OneXButton, OneXCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <OnexCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </OneXCheckbox>
      <br />
      <OnexButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </OneXButton>
    </form>
  );
};
```

[component-metadata:onex-checkbox]
