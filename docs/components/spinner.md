# Spinner

[component-header:onex-spinner]

```html preview
<onex-spinner></onex-spinner>
```

```jsx react
import { OneXSpinner } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<onex-spinner></onex-spinner>
<onex-spinner style="font-size: 2rem;"></onex-spinner>
<onex-spinner style="font-size: 3rem;"></onex-spinner>
```

```jsx react
import { OneXSpinner } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexSpinner />
    <OnexSpinner style={{ fontSize: '2rem' }} />
    <OnexSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<onex-spinner style="font-size: 50px; --track-width: 10px;"></onex-spinner>
```

```jsx react
import { OneXSpinner } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<onex-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></onex-spinner>
```

```jsx react
import { OneXSpinner } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

[component-metadata:onex-spinner]
