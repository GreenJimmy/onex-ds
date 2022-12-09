# Badge

[component-header:onex-badge]

```html preview
<onex-badge>Badge</onex-badge>
```

```jsx react
import { OneXBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexBadge>Badge</OneXBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<onex-badge variant="primary">Primary</onex-badge>
<onex-badge variant="success">Success</onex-badge>
<onex-badge variant="neutral">Neutral</onex-badge>
<onex-badge variant="warning">Warning</onex-badge>
<onex-badge variant="danger">Danger</onex-badge>
```

```jsx react
import { OneXBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexBadge variant="primary">Primary</OneXBadge>
    <OnexBadge variant="success">Success</OneXBadge>
    <OnexBadge variant="neutral">Neutral</OneXBadge>
    <OnexBadge variant="warning">Warning</OneXBadge>
    <OnexBadge variant="danger">Danger</OneXBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<onex-badge variant="primary" pill>Primary</onex-badge>
<onex-badge variant="success" pill>Success</onex-badge>
<onex-badge variant="neutral" pill>Neutral</onex-badge>
<onex-badge variant="warning" pill>Warning</onex-badge>
<onex-badge variant="danger" pill>Danger</onex-badge>
```

```jsx react
import { OneXBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexBadge variant="primary" pill>
      Primary
    </OneXBadge>
    <OnexBadge variant="success" pill>
      Success
    </OneXBadge>
    <OnexBadge variant="neutral" pill>
      Neutral
    </OneXBadge>
    <OnexBadge variant="warning" pill>
      Warning
    </OneXBadge>
    <OnexBadge variant="danger" pill>
      Danger
    </OneXBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <onex-badge variant="primary" pill pulse>1</onex-badge>
  <onex-badge variant="success" pill pulse>1</onex-badge>
  <onex-badge variant="neutral" pill pulse>1</onex-badge>
  <onex-badge variant="warning" pill pulse>1</onex-badge>
  <onex-badge variant="danger" pill pulse>1</onex-badge>
</div>

<style>
  .badge-pulse onex-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { OneXBadge } from '@shoelace-style/shoelace/dist/react';

const css = `
  .badge-pulse onex-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <OnexBadge variant="primary" pill pulse>
        1
      </OneXBadge>
      <OnexBadge variant="success" pill pulse>
        1
      </OneXBadge>
      <OnexBadge variant="neutral" pill pulse>
        1
      </OneXBadge>
      <OnexBadge variant="warning" pill pulse>
        1
      </OneXBadge>
      <OnexBadge variant="danger" pill pulse>
        1
      </OneXBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<onex-button>
  Requests
  <onex-badge pill>30</onex-badge>
</onex-button>

<onex-button style="margin-inline-start: 1rem;">
  Warnings
  <onex-badge variant="warning" pill>8</onex-badge>
</onex-button>

<onex-button style="margin-inline-start: 1rem;">
  Errors
  <onex-badge variant="danger" pill>6</onex-badge>
</onex-button>
```

```jsx react
import { OneXBadge, OneXButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexButton>
      Requests
      <OnexBadge pill>30</OneXBadge>
    </OneXButton>

    <OnexButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <OnexBadge variant="warning" pill>
        8
      </OneXBadge>
    </OneXButton>

    <OnexButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <OnexBadge variant="danger" pill>
        6
      </OneXBadge>
    </OneXButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<onex-menu style="max-width: 240px;">
  <onex-menu-label>Messages</onex-menu-label>
  <onex-menu-item>Comments <onex-badge slot="suffix" variant="neutral" pill>4</onex-badge></onex-menu-item>
  <onex-menu-item>Replies <onex-badge slot="suffix" variant="neutral" pill>12</onex-badge></onex-menu-item>
</onex-menu>
```

```jsx react
import { OneXBadge, OneXButton, OneXMenu, OneXMenuItem, OneXMenuLabel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--onex-panel-border-color)',
      borderRadius: 'var(--onex-border-radius-medium)'
    }}
  >
    <OnexMenuLabel>Messages</OneXMenuLabel>
    <OneXMenuItem>
      Comments
      <OnexBadge slot="suffix" variant="neutral" pill>
        4
      </OneXBadge>
    </OneXMenuItem>
    <OneXMenuItem>
      Replies
      <OnexBadge slot="suffix" variant="neutral" pill>
        12
      </OneXBadge>
    </OneXMenuItem>
  </OneXMenu>
);
```

[component-metadata:onex-badge]
