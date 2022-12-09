# Dropdown

[component-header:onex-dropdown]

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<onex-dropdown>
  <onex-button slot="trigger" caret>Dropdown</onex-button>
  <onex-menu>
    <onex-menu-item>Dropdown Item 1</onex-menu-item>
    <onex-menu-item>Dropdown Item 2</onex-menu-item>
    <onex-menu-item>Dropdown Item 3</onex-menu-item>
    <onex-divider></onex-divider>
    <onex-menu-item checked>Checked</onex-menu-item>
    <onex-menu-item disabled>Disabled</onex-menu-item>
    <onex-divider></onex-divider>
    <onex-menu-item>
      Prefix
      <onex-icon slot="prefix" name="gift"></onex-icon>
    </onex-menu-item>
    <onex-menu-item>
      Suffix Icon
      <onex-icon slot="suffix" name="heart"></onex-icon>
    </onex-menu-item>
  </onex-menu>
</onex-dropdown>
```

```jsx react
import { OneXButton, OneXDivider, OneXDropdown, OneXIcon, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexDropdown>
    <OnexButton slot="trigger" caret>
      Dropdown
    </OneXButton>
    <OnexMenu>
      <OneXMenuItem>Dropdown Item 1</OneXMenuItem>
      <OneXMenuItem>Dropdown Item 2</OneXMenuItem>
      <OneXMenuItem>Dropdown Item 3</OneXMenuItem>
      <OnexDivider />
      <OneXMenuItem checked>Checked</OneXMenuItem>
      <OneXMenuItem disabled>Disabled</OneXMenuItem>
      <OnexDivider />
      <OneXMenuItem>
        Prefix
        <OnexIcon slot="prefix" name="gift" />
      </OneXMenuItem>
      <OneXMenuItem>
        Suffix Icon
        <OnexIcon slot="suffix" name="heart" />
      </OneXMenuItem>
    </OneXMenu>
  </OneXDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `onex-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <onex-dropdown>
    <onex-button slot="trigger" caret>Edit</onex-button>
    <onex-menu>
      <onex-menu-item value="cut">Cut</onex-menu-item>
      <onex-menu-item value="copy">Copy</onex-menu-item>
      <onex-menu-item value="paste">Paste</onex-menu-item>
    </onex-menu>
  </onex-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('onex-dropdown');

  dropdown.addEventListener('onex-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx react
import { OneXButton, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <OnexDropdown>
      <OnexButton slot="trigger" caret>
        Edit
      </OneXButton>
      <OnexMenu onOneXSelect={handleSelect}>
        <OneXMenuItem value="cut">Cut</OneXMenuItem>
        <OneXMenuItem value="copy">Copy</OneXMenuItem>
        <OneXMenuItem value="paste">Paste</OneXMenuItem>
      </OneXMenu>
    </OneXDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <onex-dropdown>
    <onex-button slot="trigger" caret>Edit</onex-button>
    <onex-menu>
      <onex-menu-item value="cut">Cut</onex-menu-item>
      <onex-menu-item value="copy">Copy</onex-menu-item>
      <onex-menu-item value="paste">Paste</onex-menu-item>
    </onex-menu>
  </onex-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('onex-menu-item[value="cut"]');
  const copy = container.querySelector('onex-menu-item[value="copy"]');
  const paste = container.querySelector('onex-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx react
import { OneXButton, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <OnexDropdown>
      <OnexButton slot="trigger" caret>
        Edit
      </OneXButton>
      <OnexMenu>
        <OneXMenuItem onClick={handleCut}>Cut</OneXMenuItem>
        <OneXMenuItem onClick={handleCopy}>Copy</OneXMenuItem>
        <OneXMenuItem onClick={handlePaste}>Paste</OneXMenuItem>
      </OneXMenu>
    </OneXDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<onex-dropdown placement="top-start">
  <onex-button slot="trigger" caret>Edit</onex-button>
  <onex-menu>
    <onex-menu-item>Cut</onex-menu-item>
    <onex-menu-item>Copy</onex-menu-item>
    <onex-menu-item>Paste</onex-menu-item>
    <onex-divider></onex-divider>
    <onex-menu-item>Find</onex-menu-item>
    <onex-menu-item>Replace</onex-menu-item>
  </onex-menu>
</onex-dropdown>
```

```jsx react
import { OneXButton, OneXDivider, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexDropdown placement="top-start">
    <OnexButton slot="trigger" caret>
      Edit
    </OneXButton>
    <OnexMenu>
      <OneXMenuItem>Cut</OneXMenuItem>
      <OneXMenuItem>Copy</OneXMenuItem>
      <OneXMenuItem>Paste</OneXMenuItem>
      <OnexDivider />
      <OneXMenuItem>Find</OneXMenuItem>
      <OneXMenuItem>Replace</OneXMenuItem>
    </OneXMenu>
  </OneXDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<onex-dropdown distance="30">
  <onex-button slot="trigger" caret>Edit</onex-button>
  <onex-menu>
    <onex-menu-item>Cut</onex-menu-item>
    <onex-menu-item>Copy</onex-menu-item>
    <onex-menu-item>Paste</onex-menu-item>
    <onex-divider></onex-divider>
    <onex-menu-item>Find</onex-menu-item>
    <onex-menu-item>Replace</onex-menu-item>
  </onex-menu>
</onex-dropdown>
```

```jsx react
import { OneXButton, OneXDivider, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexDropdown distance={30}>
    <OnexButton slot="trigger" caret>
      Edit
    </OneXButton>
    <OnexMenu>
      <OneXMenuItem>Cut</OneXMenuItem>
      <OneXMenuItem>Copy</OneXMenuItem>
      <OneXMenuItem>Paste</OneXMenuItem>
      <OnexDivider />
      <OneXMenuItem>Find</OneXMenuItem>
      <OneXMenuItem>Replace</OneXMenuItem>
    </OneXMenu>
  </OneXDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<onex-dropdown skidding="30">
  <onex-button slot="trigger" caret>Edit</onex-button>
  <onex-menu>
    <onex-menu-item>Cut</onex-menu-item>
    <onex-menu-item>Copy</onex-menu-item>
    <onex-menu-item>Paste</onex-menu-item>
    <onex-divider></onex-divider>
    <onex-menu-item>Find</onex-menu-item>
    <onex-menu-item>Replace</onex-menu-item>
  </onex-menu>
</onex-dropdown>
```

```jsx react
import { OneXButton, OneXDivider, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexDropdown skidding={30}>
    <OnexButton slot="trigger" caret>
      Edit
    </OneXButton>
    <OnexMenu>
      <OneXMenuItem>Cut</OneXMenuItem>
      <OneXMenuItem>Copy</OneXMenuItem>
      <OneXMenuItem>Paste</OneXMenuItem>
      <OnexDivider />
      <OneXMenuItem>Find</OneXMenuItem>
      <OneXMenuItem>Replace</OneXMenuItem>
    </OneXMenu>
  </OneXDropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <onex-dropdown>
    <onex-button slot="trigger" caret>No Hoist</onex-button>
    <onex-menu>
      <onex-menu-item>Item 1</onex-menu-item>
      <onex-menu-item>Item 2</onex-menu-item>
      <onex-menu-item>Item 3</onex-menu-item>
    </onex-menu>
  </onex-dropdown>

  <onex-dropdown hoist>
    <onex-button slot="trigger" caret>Hoist</onex-button>
    <onex-menu>
      <onex-menu-item>Item 1</onex-menu-item>
      <onex-menu-item>Item 2</onex-menu-item>
      <onex-menu-item>Item 3</onex-menu-item>
    </onex-menu>
  </onex-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--onex-panel-border-color);
    padding: var(--onex-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx react
import { OneXButton, OneXDivider, OneXDropdown, OneXIcon, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--onex-panel-border-color);
    padding: var(--onex-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <OnexDropdown>
        <OnexButton slot="trigger" caret>
          No Hoist
        </OneXButton>
        <OnexMenu>
          <OneXMenuItem>Item 1</OneXMenuItem>
          <OneXMenuItem>Item 2</OneXMenuItem>
          <OneXMenuItem>Item 3</OneXMenuItem>
        </OneXMenu>
      </OneXDropdown>

      <OnexDropdown hoist>
        <OnexButton slot="trigger" caret>
          Hoist
        </OneXButton>
        <OnexMenu>
          <OneXMenuItem>Item 1</OneXMenuItem>
          <OneXMenuItem>Item 2</OneXMenuItem>
          <OneXMenuItem>Item 3</OneXMenuItem>
        </OneXMenu>
      </OneXDropdown>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-dropdown]
