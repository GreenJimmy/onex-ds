# Menu

[component-header:onex-menu]

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<onex-menu style="max-width: 200px;">
  <onex-menu-item value="undo">Undo</onex-menu-item>
  <onex-menu-item value="redo">Redo</onex-menu-item>
  <onex-divider></onex-divider>
  <onex-menu-item value="cut">Cut</onex-menu-item>
  <onex-menu-item value="copy">Copy</onex-menu-item>
  <onex-menu-item value="paste">Paste</onex-menu-item>
  <onex-menu-item value="delete">Delete</onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXDivider, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu style={{ maxWidth: '200px' }}>
    <OneXMenuItem value="undo">Undo</OneXMenuItem>
    <OneXMenuItem value="redo">Redo</OneXMenuItem>
    <OnexDivider />
    <OneXMenuItem value="cut">Cut</OneXMenuItem>
    <OneXMenuItem value="copy">Copy</OneXMenuItem>
    <OneXMenuItem value="paste">Paste</OneXMenuItem>
    <OneXMenuItem value="delete">Delete</OneXMenuItem>
  </OneXMenu>
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:onex-menu]
