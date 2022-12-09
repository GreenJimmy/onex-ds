# Progress Ring

[component-header:onex-progress-ring]

```html preview
<onex-progress-ring value="25"></onex-progress-ring>
```

```jsx react
import { OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<onex-progress-ring value="50" style="--size: 200px;"></onex-progress-ring>
```

```jsx react
import { OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressRing value="50" style={{ '--size': '200px' }} />;
```

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html preview
<onex-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></onex-progress-ring>
```

```jsx react
import { OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<onex-progress-ring
  value="50"
  style="
    --track-color: pink; 
    --indicator-color: deeppink;
  "
></onex-progress-ring>
```

```jsx react
import { OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html preview
<onex-progress-ring value="50" label="Upload progress"></onex-progress-ring>
```

```jsx react
import { OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<onex-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</onex-progress-ring>

<br />

<onex-button circle><onex-icon name="dash" label="Decrease"></onex-icon></onex-button>
<onex-button circle><onex-icon name="plus" label="Increase"></onex-icon></onex-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OneXButton, OneXIcon, OneXProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <OnexProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </OneXProgressRing>

      <br />

      <OnexButton circle onClick={() => adjustValue(-10)}>
        <OnexIcon name="dash" label="Decrease" />
      </OneXButton>

      <OnexButton circle onClick={() => adjustValue(10)}>
        <OnexIcon name="plus" label="Increase" />
      </OneXButton>
    </>
  );
};
```

[component-metadata:onex-progress-ring]
