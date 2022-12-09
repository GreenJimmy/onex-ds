# Format Date

[component-header:onex-format-date]

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<!-- Shoelace 2 release date 🎉 -->
<onex-format-date date="2020-07-15T09:17:00-04:00"></onex-format-date>
```

```jsx react
import { OneXFormatDate } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<onex-format-date month="long" day="numeric" year="numeric"></onex-format-date><br />

<!-- Time -->
<onex-format-date hour="numeric" minute="numeric"></onex-format-date><br />

<!-- Weekday -->
<onex-format-date weekday="long"></onex-format-date><br />

<!-- Month -->
<onex-format-date month="long"></onex-format-date><br />

<!-- Year -->
<onex-format-date year="numeric"></onex-format-date><br />

<!-- No formatting options -->
<onex-format-date></onex-format-date>
```

```jsx react
import { OneXFormatDate } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <OnexFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <OnexFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <OnexFormatDate weekday="long" />
    <br />

    {/* Month */}
    <OnexFormatDate month="long" />
    <br />

    {/* Year */}
    <OnexFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <OnexFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<onex-format-date hour="numeric" minute="numeric" hour-format="12"></onex-format-date><br />
<onex-format-date hour="numeric" minute="numeric" hour-format="24"></onex-format-date>
```

```jsx react
import { OneXFormatDate } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <OnexFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html preview
English: <onex-format-date lang="en"></onex-format-date><br />
French: <onex-format-date lang="fr"></onex-format-date><br />
Russian: <onex-format-date lang="ru"></onex-format-date>
```

```jsx react
import { OneXFormatDate } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    English: <OnexFormatDate lang="en" />
    <br />
    French: <OnexFormatDate lang="fr" />
    <br />
    Russian: <OnexFormatDate lang="ru" />
  </>
);
```

[component-metadata:onex-format-date]
