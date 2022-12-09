# Menu Label

[component-header:onex-menu-label]

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-label>Fruits</onex-menu-label>
  <onex-menu-item value="apple">Apple</onex-menu-item>
  <onex-menu-item value="banana">Banana</onex-menu-item>
  <onex-menu-item value="orange">Orange</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-label>Vegetables</onex-menu-label>
  <onex-menu-item value="broccoli">Broccoli</onex-menu-item>
  <onex-menu-item value="carrot">Carrot</onex-menu-item>
  <onex-menu-item value="zucchini">Zucchini</onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXDivider, OneXMenu, OneXMenuLabel, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OnexMenuLabel>Fruits</OneXMenuLabel>
    <OneXMenuItem value="apple">Apple</OneXMenuItem>
    <OneXMenuItem value="banana">Banana</OneXMenuItem>
    <OneXMenuItem value="orange">Orange</OneXMenuItem>
    <OnexDivider />
    <OnexMenuLabel>Vegetables</OneXMenuLabel>
    <OneXMenuItem value="broccoli">Broccoli</OneXMenuItem>
    <OneXMenuItem value="carrot">Carrot</OneXMenuItem>
    <OneXMenuItem value="zucchini">Zucchini</OneXMenuItem>
  </OneXMenu>
);
```

[component-metadata:onex-menu-label]
