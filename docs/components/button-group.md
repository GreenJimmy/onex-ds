# Button Group

[component-header:onex-button-group]

```html preview
<onex-button-group label="Alignment">
  <onex-button>Left</onex-button>
  <onex-button>Center</onex-button>
  <onex-button>Right</onex-button>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexButtonGroup label="Alignment">
    <OnexButton>Left</OneXButton>
    <OnexButton>Center</OneXButton>
    <OnexButton>Right</OneXButton>
  </OneXButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<onex-button-group label="Alignment">
  <onex-button size="small">Left</onex-button>
  <onex-button size="small">Center</onex-button>
  <onex-button size="small">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button size="medium">Left</onex-button>
  <onex-button size="medium">Center</onex-button>
  <onex-button size="medium">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button size="large">Left</onex-button>
  <onex-button size="large">Center</onex-button>
  <onex-button size="large">Right</onex-button>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButtonGroup label="Alignment">
      <OnexButton size="small">Left</OneXButton>
      <OnexButton size="small">Center</OneXButton>
      <OnexButton size="small">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton size="medium">Left</OneXButton>
      <OnexButton size="medium">Center</OneXButton>
      <OnexButton size="medium">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton size="large">Left</OneXButton>
      <OnexButton size="large">Center</OneXButton>
      <OnexButton size="large">Right</OneXButton>
    </OneXButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html preview
<onex-button-group label="Alignment">
  <onex-button variant="primary">Left</onex-button>
  <onex-button variant="primary">Center</onex-button>
  <onex-button variant="primary">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button variant="success">Left</onex-button>
  <onex-button variant="success">Center</onex-button>
  <onex-button variant="success">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button variant="neutral">Left</onex-button>
  <onex-button variant="neutral">Center</onex-button>
  <onex-button variant="neutral">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button variant="warning">Left</onex-button>
  <onex-button variant="warning">Center</onex-button>
  <onex-button variant="warning">Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button variant="danger">Left</onex-button>
  <onex-button variant="danger">Center</onex-button>
  <onex-button variant="danger">Right</onex-button>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButtonGroup label="Alignment">
      <OnexButton variant="primary">Left</OneXButton>
      <OnexButton variant="primary">Center</OneXButton>
      <OnexButton variant="primary">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton variant="success">Left</OneXButton>
      <OnexButton variant="success">Center</OneXButton>
      <OnexButton variant="success">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton variant="neutral">Left</OneXButton>
      <OnexButton variant="neutral">Center</OneXButton>
      <OnexButton variant="neutral">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton variant="warning">Left</OneXButton>
      <OnexButton variant="warning">Center</OneXButton>
      <OnexButton variant="warning">Right</OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton variant="danger">Left</OneXButton>
      <OnexButton variant="danger">Center</OneXButton>
      <OnexButton variant="danger">Right</OneXButton>
    </OneXButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<onex-button-group label="Alignment">
  <onex-button size="small" pill>Left</onex-button>
  <onex-button size="small" pill>Center</onex-button>
  <onex-button size="small" pill>Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button size="medium" pill>Left</onex-button>
  <onex-button size="medium" pill>Center</onex-button>
  <onex-button size="medium" pill>Right</onex-button>
</onex-button-group>

<br /><br />

<onex-button-group label="Alignment">
  <onex-button size="large" pill>Left</onex-button>
  <onex-button size="large" pill>Center</onex-button>
  <onex-button size="large" pill>Right</onex-button>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButtonGroup label="Alignment">
      <OnexButton size="small" pill>
        Left
      </OneXButton>
      <OnexButton size="small" pill>
        Center
      </OneXButton>
      <OnexButton size="small" pill>
        Right
      </OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton size="medium" pill>
        Left
      </OneXButton>
      <OnexButton size="medium" pill>
        Center
      </OneXButton>
      <OnexButton size="medium" pill>
        Right
      </OneXButton>
    </OneXButtonGroup>

    <br />
    <br />

    <OnexButtonGroup label="Alignment">
      <OnexButton size="large" pill>
        Left
      </OneXButton>
      <OnexButton size="large" pill>
        Center
      </OneXButton>
      <OnexButton size="large" pill>
        Right
      </OneXButton>
    </OneXButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<onex-button>` element.

```html preview
<onex-button-group label="Example Button Group">
  <onex-button>Button</onex-button>
  <onex-button>Button</onex-button>
  <onex-dropdown>
    <onex-button slot="trigger" caret>Dropdown</onex-button>
    <onex-menu>
      <onex-menu-item>Item 1</onex-menu-item>
      <onex-menu-item>Item 2</onex-menu-item>
      <onex-menu-item>Item 3</onex-menu-item>
    </onex-menu>
  </onex-dropdown>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexButtonGroup label="Example Button Group">
    <OnexButton>Button</OneXButton>
    <OnexButton>Button</OneXButton>
    <OnexDropdown>
      <OnexButton slot="trigger" caret>
        Dropdown
      </OneXButton>
      <OnexMenu>
        <OneXMenuItem>Item 1</OneXMenuItem>
        <OneXMenuItem>Item 2</OneXMenuItem>
        <OneXMenuItem>Item 3</OneXMenuItem>
      </OneXMenu>
    </OneXDropdown>
  </OneXButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<onex-button-group label="Example Button Group">
  <onex-button variant="primary">Save</onex-button>
  <onex-dropdown placement="bottom-end">
    <onex-button slot="trigger" variant="primary" caret>
      <onex-visually-hidden>More options</onex-visually-hidden>
    </onex-button>
    <onex-menu>
      <onex-menu-item>Save</onex-menu-item>
      <onex-menu-item>Save as&hellip;</onex-menu-item>
      <onex-menu-item>Save all</onex-menu-item>
    </onex-menu>
  </onex-dropdown>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup, OneXDropdown, OneXMenu, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexButtonGroup label="Example Button Group">
    <OnexButton variant="primary">Save</OneXButton>
    <OnexDropdown placement="bottom-end">
      <OnexButton slot="trigger" variant="primary" caret></OneXButton>
      <OnexMenu>
        <OneXMenuItem>Save</OneXMenuItem>
        <OneXMenuItem>Save as&hellip;</OneXMenuItem>
        <OneXMenuItem>Save all</OneXMenuItem>
      </OneXMenu>
    </OneXDropdown>
  </OneXButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<onex-button-group label="Alignment">
  <onex-tooltip content="I'm on the left">
    <onex-button>Left</onex-button>
  </onex-tooltip>

  <onex-tooltip content="I'm in the middle">
    <onex-button>Center</onex-button>
  </onex-tooltip>

  <onex-tooltip content="I'm on the right">
    <onex-button>Right</onex-button>
  </onex-tooltip>
</onex-button-group>
```

```jsx react
import { OneXButton, OneXButtonGroup, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButtonGroup label="Alignment">
      <OnexTooltip content="I'm on the left">
        <OnexButton>Left</OneXButton>
      </OneXTooltip>

      <OnexTooltip content="I'm in the middle">
        <OnexButton>Center</OneXButton>
      </OneXTooltip>

      <OnexTooltip content="I'm on the right">
        <OnexButton>Right</OneXButton>
      </OneXTooltip>
    </OneXButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <onex-button-group label="History">
    <onex-tooltip content="Undo">
      <onex-button><onex-icon name="arrow-counterclockwise" label="Undo"></onex-icon></onex-button>
    </onex-tooltip>
    <onex-tooltip content="Redo">
      <onex-button><onex-icon name="arrow-clockwise" label="Redo"></onex-icon></onex-button>
    </onex-tooltip>
  </onex-button-group>

  <onex-button-group label="Formatting">
    <onex-tooltip content="Bold">
      <onex-button><onex-icon name="type-bold" label="Bold"></onex-icon></onex-button>
    </onex-tooltip>
    <onex-tooltip content="Italic">
      <onex-button><onex-icon name="type-italic" label="Italic"></onex-icon></onex-button>
    </onex-tooltip>
    <onex-tooltip content="Underline">
      <onex-button><onex-icon name="type-underline" label="Underline"></onex-icon></onex-button>
    </onex-tooltip>
  </onex-button-group>

  <onex-button-group label="Alignment">
    <onex-tooltip content="Align Left">
      <onex-button><onex-icon name="justify-left" label="Align Left"></onex-icon></onex-button>
    </onex-tooltip>
    <onex-tooltip content="Align Center">
      <onex-button><onex-icon name="justify" label="Align Center"></onex-icon></onex-button>
    </onex-tooltip>
    <onex-tooltip content="Align Right">
      <onex-button><onex-icon name="justify-right" label="Align Right"></onex-icon></onex-button>
    </onex-tooltip>
  </onex-button-group>
</div>

<style>
  .button-group-toolbar onex-button-group:not(:last-of-type) {
    margin-right: var(--onex-spacing-x-small);
  }
</style>
```

```jsx react
import { OneXButton, OneXButtonGroup, OneXIcon, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .button-group-toolbar onex-button-group:not(:last-of-type) {
    margin-right: var(--onex-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <OnexButtonGroup label="History">
        <OnexTooltip content="Undo">
          <OnexButton>
            <OnexIcon name="arrow-counterclockwise"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
        <OnexTooltip content="Redo">
          <OnexButton>
            <OnexIcon name="arrow-clockwise"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
      </OneXButtonGroup>

      <OnexButtonGroup label="Formatting">
        <OnexTooltip content="Bold">
          <OnexButton>
            <OnexIcon name="type-bold"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
        <OnexTooltip content="Italic">
          <OnexButton>
            <OnexIcon name="type-italic"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
        <OnexTooltip content="Underline">
          <OnexButton>
            <OnexIcon name="type-underline"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
      </OneXButtonGroup>

      <OnexButtonGroup label="Alignment">
        <OnexTooltip content="Align Left">
          <OnexButton>
            <OnexIcon name="justify-left"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
        <OnexTooltip content="Align Center">
          <OnexButton>
            <OnexIcon name="justify"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
        <OnexTooltip content="Align Right">
          <OnexButton>
            <OnexIcon name="justify-right"></OneXIcon>
          </OneXButton>
        </OneXTooltip>
      </OneXButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-button-group]
