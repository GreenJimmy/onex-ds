# Menu Item

[component-header:onex-menu-item]

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item>Option 1</onex-menu-item>
  <onex-menu-item>Option 2</onex-menu-item>
  <onex-menu-item>Option 3</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item checked>Checked</onex-menu-item>
  <onex-menu-item disabled>Disabled</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item>
    Prefix Icon
    <onex-icon slot="prefix" name="gift"></onex-icon>
  </onex-menu-item>
  <onex-menu-item>
    Suffix Icon
    <onex-icon slot="suffix" name="heart"></onex-icon>
  </onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXDivider, OneXIcon, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem>Option 1</OneXMenuItem>
    <OneXMenuItem>Option 2</OneXMenuItem>
    <OneXMenuItem>Option 3</OneXMenuItem>
    <OnexDivider />
    <OneXMenuItem checked>Checked</OneXMenuItem>
    <OneXMenuItem disabled>Disabled</OneXMenuItem>
    <OnexDivider />
    <OneXMenuItem>
      Prefix Icon
      <OnexIcon slot="prefix" name="gift" />
    </OneXMenuItem>
    <OneXMenuItem>
      Suffix Icon
      <OnexIcon slot="suffix" name="heart" />
    </OneXMenuItem>
  </OneXMenu>
);
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item>Option 1</onex-menu-item>
  <onex-menu-item checked>Option 2</onex-menu-item>
  <onex-menu-item>Option 3</onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem>Option 1</OneXMenuItem>
    <OneXMenuItem checked>Option 2</OneXMenuItem>
    <OneXMenuItem>Option 3</OneXMenuItem>
  </OneXMenu>
);
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item>Option 1</onex-menu-item>
  <onex-menu-item disabled>Option 2</onex-menu-item>
  <onex-menu-item>Option 3</onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem>Option 1</OneXMenuItem>
    <OneXMenuItem disabled>Option 2</OneXMenuItem>
    <OneXMenuItem>Option 3</OneXMenuItem>
  </OneXMenu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item>
    <onex-icon slot="prefix" name="house"></onex-icon>
    Home
  </onex-menu-item>

  <onex-menu-item>
    <onex-icon slot="prefix" name="envelope"></onex-icon>
    Messages
    <onex-badge slot="suffix" variant="primary" pill>12</onex-badge>
  </onex-menu-item>

  <onex-divider></onex-divider>

  <onex-menu-item>
    <onex-icon slot="prefix" name="gear"></onex-icon>
    Settings
  </onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXBadge, OneXDivider, OneXIcon, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem>
      <OnexIcon slot="prefix" name="house" />
      Home
    </OneXMenuItem>

    <OneXMenuItem>
      <OnexIcon slot="prefix" name="envelope" />
      Messages
      <OnexBadge slot="suffix" variant="primary" pill>
        12
      </OneXBadge>
    </OneXMenuItem>

    <OnexDivider />

    <OneXMenuItem>
      <OnexIcon slot="prefix" name="gear" />
      Settings
    </OneXMenuItem>
  </OneXMenu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `onex-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<onex-menu class="menu-value" style="max-width: 200px;">
  <onex-menu-item value="opt-1">Option 1</onex-menu-item>
  <onex-menu-item value="opt-2">Option 2</onex-menu-item>
  <onex-menu-item value="opt-3">Option 3</onex-menu-item>
</onex-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('onex-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

```jsx react
import { OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <OnexMenu style={{ maxWidth: '200px' }} onOneXSelect={handleSelect}>
      <OneXMenuItem value="opt-1">Option 1</OneXMenuItem>
      <OneXMenuItem value="opt-2">Option 2</OneXMenuItem>
      <OneXMenuItem value="opt-3">Option 3</OneXMenuItem>
    </OneXMenu>
  );
};
```

[component-metadata:onex-menu-item]
