# Tooltip

[component-header:onex-tooltip]

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<onex-tooltip content="This is a tooltip">
  <onex-button>Hover Me</onex-button>
</onex-tooltip>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTooltip content="This is a tooltip">
    <OnexButton>Hover Me</OneXButton>
  </OneXTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <onex-tooltip content="top-start" placement="top-start">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="top" placement="top">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="top-end" placement="top-end">
      <onex-button></onex-button>
    </onex-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <onex-tooltip content="left-start" placement="left-start">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="right-start" placement="right-start">
      <onex-button></onex-button>
    </onex-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <onex-tooltip content="left" placement="left">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="right" placement="right">
      <onex-button></onex-button>
    </onex-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <onex-tooltip content="left-end" placement="left-end">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="right-end" placement="right-end">
      <onex-button></onex-button>
    </onex-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <onex-tooltip content="bottom-start" placement="bottom-start">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="bottom" placement="bottom">
      <onex-button></onex-button>
    </onex-tooltip>

    <onex-tooltip content="bottom-end" placement="bottom-end">
      <onex-button></onex-button>
    </onex-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example onex-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) onex-tooltip:first-child onex-button,
  .tooltip-placement-example-row:nth-child(5) onex-tooltip:first-child onex-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) onex-tooltip:nth-child(2) onex-button,
  .tooltip-placement-example-row:nth-child(3) onex-tooltip:nth-child(2) onex-button,
  .tooltip-placement-example-row:nth-child(4) onex-tooltip:nth-child(2) onex-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example onex-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) onex-tooltip:first-child onex-button,
  .tooltip-placement-example-row:nth-child(5) onex-tooltip:first-child onex-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) onex-tooltip:nth-child(2) onex-button,
  .tooltip-placement-example-row:nth-child(3) onex-tooltip:nth-child(2) onex-button,
  .tooltip-placement-example-row:nth-child(4) onex-tooltip:nth-child(2) onex-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <OnexTooltip content="top-start" placement="top-start">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="top" placement="top">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="top-end" placement="top-end">
          <OnexButton />
        </OneXTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OnexTooltip content="left-start" placement="left-start">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="right-start" placement="right-start">
          <OnexButton />
        </OneXTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OnexTooltip content="left" placement="left">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="right" placement="right">
          <OnexButton />
        </OneXTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OnexTooltip content="left-end" placement="left-end">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="right-end" placement="right-end">
          <OnexButton />
        </OneXTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <OnexTooltip content="bottom-start" placement="bottom-start">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="bottom" placement="bottom">
          <OnexButton />
        </OneXTooltip>

        <OnexTooltip content="bottom-end" placement="bottom-end">
          <OnexButton />
        </OneXTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<onex-tooltip content="Click again to dismiss" trigger="click">
  <onex-button>Click to Toggle</onex-button>
</onex-tooltip>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTooltip content="Click again to dismiss" trigger="click">
    <OnexButton>Click to Toggle</OneXButton>
  </OneXTooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<onex-button style="margin-right: 4rem;">Toggle Manually</onex-button>

<onex-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <onex-avatar label="User"></onex-avatar>
</onex-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXAvatar, OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OnexButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </OneXButton>

      <OnexTooltip open={open} content="This is an avatar" trigger="manual">
        <OnexAvatar />
      </OneXTooltip>
    </>
  );
};
```

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--onex-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html preview
<onex-tooltip content="This is a tooltip" style="--onex-tooltip-arrow-size: 0;">
  <onex-button>No Arrow</onex-button>
</onex-tooltip>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div style={{ '--onex-tooltip-arrow-size': '0' }}>
    <OnexTooltip content="This is a tooltip">
      <OnexButton>Above</OneXButton>
    </OneXTooltip>

    <OnexTooltip content="This is a tooltip" placement="bottom">
      <OnexButton>Below</OneXButton>
    </OneXTooltip>
  </div>
);
```

To override it globally, set it in a root block in your stylesheet after the Shoelace stylesheet is loaded.

```css
:root {
  --onex-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<onex-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <onex-button>Hover me</onex-button>
</onex-tooltip>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <OnexButton>Hover Me</OneXButton>
  </OneXTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html preview
<onex-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <onex-button>Hover me</onex-button>
</onex-tooltip>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <OnexButton>Hover Me</OneXButton>
  </OneXTooltip>
);
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <onex-tooltip content="This is a tooltip">
    <onex-button>No Hoist</onex-button>
  </onex-tooltip>

  <onex-tooltip content="This is a tooltip" hoist>
    <onex-button>Hoist</onex-button>
  </onex-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--onex-panel-border-color);
    overflow: hidden;
    padding: var(--onex-spacing-medium);
  }
</style>
```

```jsx react
import { OneXButton, OneXTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--onex-panel-border-color);
    overflow: hidden;
    padding: var(--onex-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <OnexTooltip content="This is a tooltip">
        <OnexButton>No Hoist</OneXButton>
      </OneXTooltip>

      <OnexTooltip content="This is a tooltip" hoist>
        <OnexButton>Hoist</OneXButton>
      </OneXTooltip>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-tooltip]
