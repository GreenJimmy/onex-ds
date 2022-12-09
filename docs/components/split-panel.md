# Split Panel

[component-header:onex-split-panel]

```html preview
<onex-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html preview
<onex-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html preview
<onex-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html preview
<onex-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html preview
<div class="split-panel-snapping">
  <onex-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </onex-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--onex-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--onex-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <OnexSplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OneXSplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html preview
<onex-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html preview
<div class="split-panel-primary">
  <onex-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </onex-split-panel>

  <onex-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <onex-menu-item value="">None</onex-menu-item>
    <onex-menu-item value="start">Start</onex-menu-item>
    <onex-menu-item value="end">End</onex-menu-item>
  </onex-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('onex-split-panel');
  const select = container.querySelector('onex-select');

  select.addEventListener('onex-change', () => (splitPanel.primary = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXSplitPanel, OneXSelect, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <OnexSplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OneXSplitPanel>

      <OnexSelect
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onSlChange={event => setPrimary(event.target.value)}
      >
        <OneXMenuItem value="">None</OneXMenuItem>
        <OneXMenuItem value="start">Start</OneXMenuItem>
        <OneXMenuItem value="end">End</OneXMenuItem>
      </OneXSelect>
    </>
  );
};
```

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html preview
<onex-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html preview
<onex-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div slot="end">
    <onex-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Bottom
      </div>
    </onex-split-panel>
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <OnexSplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OneXSplitPanel>
    </div>
  </OneXSplitPanel>
);
```

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html preview
<onex-split-panel style="--divider-width: 20px;">
  <onex-icon slot="divider" name="grip-vertical"></onex-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</onex-split-panel>
```

```jsx react
import { OneXSplitPanel, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexSplitPanel style={{ '--divider-width': '20px' }}>
    <OnexIcon slot="divider" name="grip-vertical" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--onex-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </OneXSplitPanel>
);
```

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html preview
<div class="split-panel-divider">
  <onex-split-panel>
    <onex-icon slot="divider" name="grip-vertical"></onex-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--onex-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </onex-split-panel>
</div>

<style>
  .split-panel-divider onex-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider onex-split-panel::part(divider) {
    background-color: var(--onex-color-pink-600);
  }

  .split-panel-divider onex-icon {
    position: absolute;
    border-radius: var(--onex-border-radius-small);
    background: var(--onex-color-pink-600);
    color: var(--onex-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-divider onex-split-panel::part(divider):focus-visible {
    background-color: var(--onex-color-primary-600);
  }

  .split-panel-divider onex-split-panel:focus-within onex-icon {
    background-color: var(--onex-color-primary-600);
    color: var(--onex-color-neutral-0);
  }
</style>
```

```jsx react
import { OneXSplitPanel, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .split-panel-divider onex-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider onex-split-panel::part(divider) {
    background-color: var(--onex-color-pink-600);
  }

  .split-panel-divider onex-icon {
    position: absolute;
    border-radius: var(--onex-border-radius-small);
    background: var(--onex-color-pink-600);
    color: var(--onex-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-divider onex-split-panel::part(divider):focus-visible {
    background-color: var(--onex-color-primary-600);
  }

  .split-panel-divider onex-split-panel:focus-within onex-icon {
    background-color: var(--onex-color-primary-600);
    color: var(--onex-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-divider">
      <OnexSplitPanel>
        <OnexIcon slot="divider" name="grip-vertical" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--onex-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </OneXSplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-split-panel]
