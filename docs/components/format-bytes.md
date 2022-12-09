# Format Bytes

[component-header:onex-format-bytes]

```html preview
<div class="format-bytes-overview">
  The file is <onex-format-bytes value="1000"></onex-format-bytes> in size. <br /><br />
  <onex-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></onex-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('onex-format-bytes');
  const input = container.querySelector('onex-input');

  input.addEventListener('onex-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXButton, OneXFormatBytes, OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <OnexFormatBytes value={value} /> in size.
      <br />
      <br />
      <OnexInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onOneXInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<onex-format-bytes value="12"></onex-format-bytes><br />
<onex-format-bytes value="1200"></onex-format-bytes><br />
<onex-format-bytes value="1200000"></onex-format-bytes><br />
<onex-format-bytes value="1200000000"></onex-format-bytes>
```

```jsx react
import { OneXFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatBytes value="12" />
    <br />
    <OnexFormatBytes value="1200" />
    <br />
    <OnexFormatBytes value="1200000" />
    <br />
    <OnexFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<onex-format-bytes value="12" unit="bit"></onex-format-bytes><br />
<onex-format-bytes value="1200" unit="bit"></onex-format-bytes><br />
<onex-format-bytes value="1200000" unit="bit"></onex-format-bytes><br />
<onex-format-bytes value="1200000000" unit="bit"></onex-format-bytes>
```

```jsx react
import { OneXFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatBytes value="12" unit="bit" />
    <br />
    <OnexFormatBytes value="1200" unit="bit" />
    <br />
    <OnexFormatBytes value="1200000" unit="bit" />
    <br />
    <OnexFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<onex-format-bytes value="12" lang="de"></onex-format-bytes><br />
<onex-format-bytes value="1200" lang="de"></onex-format-bytes><br />
<onex-format-bytes value="1200000" lang="de"></onex-format-bytes><br />
<onex-format-bytes value="1200000000" lang="de"></onex-format-bytes>
```

```jsx react
import { OneXFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatBytes value="12" lang="de" />
    <br />
    <OnexFormatBytes value="1200" lang="de" />
    <br />
    <OnexFormatBytes value="1200000" lang="de" />
    <br />
    <OnexFormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:onex-format-bytes]
