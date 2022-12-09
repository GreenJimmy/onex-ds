# Format Number

[component-header:onex-format-number]

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <onex-format-number value="1000"></onex-format-number>
  <br /><br />
  <onex-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></onex-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('onex-format-number');
  const input = container.querySelector('onex-input');

  input.addEventListener('onex-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXFormatNumber, OneXInput } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <OnexFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<onex-format-number type="percent" value="0"></onex-format-number><br />
<onex-format-number type="percent" value="0.25"></onex-format-number><br />
<onex-format-number type="percent" value="0.50"></onex-format-number><br />
<onex-format-number type="percent" value="0.75"></onex-format-number><br />
<onex-format-number type="percent" value="1"></onex-format-number>
```

```jsx react
import { OneXFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatNumber type="percent" value={0} />
    <br />
    <OnexFormatNumber type="percent" value={0.25} />
    <br />
    <OnexFormatNumber type="percent" value={0.5} />
    <br />
    <OnexFormatNumber type="percent" value={0.75} />
    <br />
    <OnexFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <onex-format-number value="2000" lang="en" minimum-fraction-digits="2"></onex-format-number><br />
German: <onex-format-number value="2000" lang="de" minimum-fraction-digits="2"></onex-format-number><br />
Russian: <onex-format-number value="2000" lang="ru" minimum-fraction-digits="2"></onex-format-number>
```

```jsx react
import { OneXFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    English: <OnexFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <OnexFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <OnexFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<onex-format-number type="currency" currency="USD" value="2000" lang="en-US"></onex-format-number><br />
<onex-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></onex-format-number><br />
<onex-format-number type="currency" currency="EUR" value="2000" lang="de"></onex-format-number><br />
<onex-format-number type="currency" currency="RUB" value="2000" lang="ru"></onex-format-number><br />
<onex-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></onex-format-number>
```

```jsx react
import { OneXFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <OnexFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <OnexFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <OnexFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <OnexFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:onex-format-number]
