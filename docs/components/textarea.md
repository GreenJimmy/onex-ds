# Textarea

[component-header:onex-textarea]

```html preview
<onex-textarea></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<onex-textarea label="Comments"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<onex-textarea label="Feedback" help-text="Please tell us what you think."> </onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<onex-textarea rows="2"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<onex-textarea placeholder="Type something"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<onex-textarea placeholder="Type something" filled></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<onex-textarea placeholder="Textarea" disabled></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<onex-textarea placeholder="Small" size="small"></onex-textarea>
<br />
<onex-textarea placeholder="Medium" size="medium"></onex-textarea>
<br />
<onex-textarea placeholder="Large" size="large"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexTextarea placeholder="Small" size="small"></OneXTextarea>
    <br />
    <OnexTextarea placeholder="Medium" size="medium"></OneXTextarea>
    <br />
    <OnexTextarea placeholder="Large" size="large"></OneXTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<onex-textarea resize="none"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<onex-textarea resize="auto"></onex-textarea>
```

```jsx react
import { OneXTextarea } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexTextarea resize="auto" />;
```

[component-metadata:onex-textarea]
