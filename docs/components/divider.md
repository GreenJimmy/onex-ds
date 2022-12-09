# Divider

[component-header:onex-divider]

```html preview
<onex-divider></onex-divider>
```

```jsx react
import { OneXDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<onex-divider style="--width: 4px;"></onex-divider>
```

```jsx react
import { OneXDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexDivider style={{ '--width': '4px' }} />;
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<onex-divider style="--color: tomato;"></onex-divider>
```

```jsx react
import { OneXDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexDivider style={{ '--color': 'tomato' }} />;
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <onex-divider style="--spacing: 2rem;"></onex-divider>
  Below
</div>
```

```jsx react
import { OneXDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    Above
    <OnexDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <onex-divider vertical></onex-divider>
  Middle
  <onex-divider vertical></onex-divider>
  Last
</div>
```

```jsx react
import { OneXDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <OnexDivider vertical />
    Middle
    <OnexDivider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item value="1">Option 1</onex-menu-item>
  <onex-menu-item value="2">Option 2</onex-menu-item>
  <onex-menu-item value="3">Option 3</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item value="4">Option 4</onex-menu-item>
  <onex-menu-item value="5">Option 5</onex-menu-item>
  <onex-menu-item value="6">Option 6</onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXDivider, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem value="1">Option 1</OneXMenuItem>
    <OneXMenuItem value="2">Option 2</OneXMenuItem>
    <OneXMenuItem value="3">Option 3</OneXMenuItem>
    <onex-divider />
    <OneXMenuItem value="4">Option 4</OneXMenuItem>
    <OneXMenuItem value="5">Option 5</OneXMenuItem>
    <OneXMenuItem value="6">Option 6</OneXMenuItem>
  </OneXMenu>
);
```

[component-metadata:onex-divider]
