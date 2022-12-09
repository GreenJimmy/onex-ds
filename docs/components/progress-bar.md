# Progress Bar

[component-header:onex-progress-bar]

```html preview
<onex-progress-bar value="50"></onex-progress-bar>
```

```jsx react
import { OneXProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<onex-progress-bar value="50" label="Upload progress"></onex-progress-bar>
```

```jsx react
import { OneXProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<onex-progress-bar value="50" style="--height: 6px;"></onex-progress-bar>
```

```jsx react
import { OneXProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressBar value={50} style={{ '--height': '6px' }} />;
```

### Showing Values

Use the default slot to show a value.

```html preview
<onex-progress-bar value="50" class="progress-bar-values">50%</onex-progress-bar>

<br />

<onex-button circle><onex-icon name="dash" label="Decrease"></onex-icon></onex-button>
<onex-button circle><onex-icon name="plus" label="Increase"></onex-icon></onex-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OneXButton, OneXIcon, OneXProgressBar } from '@shoelace-style/shoelace/dist/react';

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
      <OnexProgressBar value={value}>{value}%</OneXProgressBar>

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

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<onex-progress-bar indeterminate></onex-progress-bar>
```

```jsx react
import { OneXProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexProgressBar indeterminate />;
```

[component-metadata:onex-progress-bar]
