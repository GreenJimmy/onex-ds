# Switch

[component-header:onex-switch]

```html preview
<onex-switch>Switch</onex-switch>
```

```jsx react
import { OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexSwitch>Switch</OneXSwitch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<onex-switch checked>Checked</onex-switch>
```

```jsx react
import { OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexSwitch checked>Checked</OneXSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<onex-switch disabled>Disabled</onex-switch>
```

```jsx react
import { OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexSwitch disabled>Disabled</OneXSwitch>;
```

### Custom Size

Use the available custom properties to make the switch a different size.

```html preview
<onex-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;">Really big</onex-switch>
```

```jsx react
import { OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

[component-metadata:onex-switch]
