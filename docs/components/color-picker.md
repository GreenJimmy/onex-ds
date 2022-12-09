# Color Picker

[component-header:onex-color-picker]

```html preview
<onex-color-picker label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexColorPicker label="Select a color" />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Initial Value

Use the `value` attribute to set an initial value for the color picker.

```html preview
<onex-color-picker value="#4a90e2" label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexColorPicker value="#4a90e2" label="Select a color" />;
```

### Opacity

Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, or HSLA based on `format`.

```html preview
<onex-color-picker value="#f5a623ff" opacity label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexColorPicker opacity label="Select a color" />;
```

### Formats

Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, and `hsl`. Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.

To prevent users from toggling the format themselves, add the `no-format-toggle` attribute.

```html preview
<onex-color-picker format="hex" value="#4a90e2" label="Select a color"></onex-color-picker>
<onex-color-picker format="rgb" value="rgb(80, 227, 194)" label="Select a color"></onex-color-picker>
<onex-color-picker format="hsl" value="hsl(290, 87%, 47%)" label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexColorPicker format="hex" value="#4a90e2" />
    <OnexColorPicker format="rgb" value="rgb(80, 227, 194)" />
    <OnexColorPicker format="hsl" value="hsl(290, 87%, 47%)" />
  </>
);
```

### Sizes

Use the `size` attribute to change the color picker's trigger size.

```html preview
<onex-color-picker size="small" label="Select a color"></onex-color-picker>
<onex-color-picker size="medium" label="Select a color"></onex-color-picker>
<onex-color-picker size="large" label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexColorPicker size="small" label="Select a color" />
    <OnexColorPicker size="medium" label="Select a color" />
    <OnexColorPicker size="large" label="Select a color" />
  </>
);
```

### Inline

The color picker can be rendered inline instead of in a dropdown using the `inline` attribute.

```html preview
<onex-color-picker inline label="Select a color"></onex-color-picker>
```

```jsx react
import { OneXColorPicker } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexColorPicker inline label="Select a color" />;
```

[component-metadata:onex-color-picker]
