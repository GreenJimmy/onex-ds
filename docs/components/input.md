# Input

[component-header:onex-input]

```html preview
<onex-input></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<onex-input label="What is your name?"></onex-input>
```

```jsx react
import { OneXIcon, OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<onex-input label="Nickname" help-text="What would you like people to call you?"></onex-input>
```

```jsx react
import { OneXIcon, OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<onex-input placeholder="Type something"></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<onex-input placeholder="Clearable" clearable></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html preview
<onex-input type="password" placeholder="Password Toggle" size="small" password-toggle></onex-input>
<br />
<onex-input type="password" placeholder="Password Toggle" size="medium" password-toggle></onex-input>
<br />
<onex-input type="password" placeholder="Password Toggle" size="large" password-toggle></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput type="password" placeholder="Password Toggle" size="small" password-toggle />
    <br />
    <OnexInput type="password" placeholder="Password Toggle" size="medium" password-toggle />
    <br />
    <OnexInput type="password" placeholder="Password Toggle" size="large" password-toggle />
  </>
);
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<onex-input placeholder="Type something" filled></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexInput placeholder="Type something" filled />;
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<onex-input placeholder="Small" size="small" pill></onex-input>
<br />
<onex-input placeholder="Medium" size="medium" pill></onex-input>
<br />
<onex-input placeholder="Large" size="large" pill></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput placeholder="Small" size="small" pill />
    <br />
    <OnexInput placeholder="Medium" size="medium" pill />
    <br />
    <OnexInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<onex-input type="email" placeholder="Email"></onex-input>
<br />
<onex-input type="number" placeholder="Number"></onex-input>
<br />
<onex-input type="date" placeholder="Date"></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput type="email" placeholder="Email" />
    <br />
    <OnexInput type="number" placeholder="Number" />
    <br />
    <OnexInput type="date" placeholder="Date" />
  </>
);
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<onex-input placeholder="Disabled" size="small" disabled></onex-input>
<br />
<onex-input placeholder="Disabled" size="medium" disabled></onex-input>
<br />
<onex-input placeholder="Disabled" size="large" disabled></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput placeholder="Disabled" size="small" disabled />
    <br />
    <OnexInput placeholder="Disabled" size="medium" disabled />
    <br />
    <OnexInput placeholder="Disabled" size="large" disabled />
  </>
);
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<onex-input placeholder="Small" size="small"></onex-input>
<br />
<onex-input placeholder="Medium" size="medium"></onex-input>
<br />
<onex-input placeholder="Large" size="large"></onex-input>
```

```jsx react
import { OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput placeholder="Small" size="small" />
    <br />
    <OnexInput placeholder="Medium" size="medium" />
    <br />
    <OnexInput placeholder="Large" size="large" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<onex-input placeholder="Small" size="small">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-input>
<br />
<onex-input placeholder="Medium" size="medium">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-input>
<br />
<onex-input placeholder="Large" size="large">
  <onex-icon name="house" slot="prefix"></onex-icon>
  <onex-icon name="chat" slot="suffix"></onex-icon>
</onex-input>
```

```jsx react
import { OneXIcon, OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexInput placeholder="Small" size="small">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXInput>
    <br />
    <OnexInput placeholder="Medium" size="medium">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXInput>
    <br />
    <OnexInput placeholder="Large" size="large">
      <OnexIcon name="house" slot="prefix"></OneXIcon>
      <OnexIcon name="chat" slot="suffix"></OneXIcon>
    </OneXInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html preview
<onex-input class="label-on-left" label="Name" help-text="Enter your name""></onex-input>
<onex-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></onex-input>
<onex-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></onex-textarea>

<style>
  .label-on-left {
    --label-width: 60px;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--onex-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--onex-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column: span 2;
    padding-left: calc(var(--label-width) + var(--gap-width));
  }
</style>
```

[component-metadata:onex-input]
