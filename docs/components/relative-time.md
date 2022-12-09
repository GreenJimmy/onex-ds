# Relative Time

[component-header:onex-relative-time]

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html preview
<!-- Shoelace 2 release date 🎉 -->
<onex-relative-time date="2020-07-15T09:17:00-04:00"></onex-relative-time>
```

```jsx react
import { OneXRelativeTime } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html preview
<div class="relative-time-sync">
  <onex-relative-time sync></onex-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('onex-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx react
import { OneXRelativeTime } from '@shoelace-style/shoelace/dist/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <OnexRelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html preview
<onex-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></onex-relative-time><br />
<onex-relative-time date="2020-07-15T09:17:00-04:00" format="short"></onex-relative-time><br />
<onex-relative-time date="2020-07-15T09:17:00-04:00" format="long"></onex-relative-time>
```

```jsx react
import { OneXRelativeTime } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexRelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <OnexRelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <OnexRelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html preview
English: <onex-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></onex-relative-time><br />
Chinese: <onex-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></onex-relative-time><br />
German: <onex-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></onex-relative-time><br />
Greek: <onex-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></onex-relative-time><br />
Russian: <onex-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></onex-relative-time>
```

```jsx react
import { OneXRelativeTime } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    English: <OnexRelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <OnexRelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <OnexRelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <OnexRelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <OnexRelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```

[component-metadata:onex-relative-time]
