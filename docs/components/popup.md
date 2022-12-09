# Popup

[component-header:onex-popup]

This component's name is inspired by [`<popup>`](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md). It uses [Floating UI](https://floating-ui.com/) under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.

Popup doesn't provide any styles — just positioning! The popup's preferred placement, distance, and skidding (offset) can be configured using attributes. An arrow that points to the anchor can be shown and customized to your liking. Additional positioning options are available and described in more detail below.

!> Popup is a low-level utility built specifically for positioning elements. Do not mistake it for a [tooltip](/components/tooltip) or similar because _it does not facilitate an accessible experience!_ Almost every correct usage of `<onex-popup>` will involve building other components. It should rarely, if ever, occur directly in your HTML.

```html preview
<div class="popup-overview">
  <onex-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <div class="popup-overview-options">
    <onex-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <onex-menu-item value="top">top</onex-menu-item>
      <onex-menu-item value="top-start">top-start</onex-menu-item>
      <onex-menu-item value="top-end">top-end</onex-menu-item>
      <onex-menu-item value="bottom">bottom</onex-menu-item>
      <onex-menu-item value="bottom-start">bottom-start</onex-menu-item>
      <onex-menu-item value="bottom-end">bottom-end</onex-menu-item>
      <onex-menu-item value="right">right</onex-menu-item>
      <onex-menu-item value="right-start">right-start</onex-menu-item>
      <onex-menu-item value="right-end">right-end</onex-menu-item>
      <onex-menu-item value="left">left</onex-menu-item>
      <onex-menu-item value="left-start">left-start</onex-menu-item>
      <onex-menu-item value="left-end">left-end</onex-menu-item>
    </onex-select>
    <onex-input type="number" name="distance" label="distance" value="0"></onex-input>
    <onex-input type="number" name="skidding" label="Skidding" value="0"></onex-input>
  </div>

  <div class="popup-overview-options">
    <onex-switch name="active" checked>Active</onex-switch>
    <onex-switch name="arrow">Arrow</onex-switch>
  </div>
</div>

<script>
  const container = document.querySelector('.popup-overview');
  const popup = container.querySelector('onex-popup');
  const select = container.querySelector('onex-select[name="placement"]');
  const distance = container.querySelector('onex-input[name="distance"]');
  const skidding = container.querySelector('onex-input[name="skidding"]');
  const active = container.querySelector('onex-switch[name="active"]');
  const arrow = container.querySelector('onex-switch[name="arrow"]');

  select.addEventListener('onex-change', () => (popup.placement = select.value));
  distance.addEventListener('onex-input', () => (popup.distance = distance.value));
  skidding.addEventListener('onex-input', () => (popup.skidding = skidding.value));
  active.addEventListener('onex-change', () => (popup.active = active.checked));
  arrow.addEventListener('onex-change', () => (popup.arrow = arrow.checked));
</script>

<style>
  .popup-overview onex-popup {
    --arrow-color: var(--onex-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options onex-select {
    width: 160px;
  }

  .popup-overview-options onex-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSelect, OneXMenuItem, OneXInput, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-overview onex-popup {
    --arrow-color: var(--onex-color-primary-600);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options onex-select {
    width: 160px;
  }

  .popup-overview-options onex-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [distance, setDistance] = useState(0);
  const [skidding, setSkidding] = useState(0);
  const [active, setActive] = useState(true);
  const [arrow, setArrow] = useState(false);

  return (
    <>
      <div className="popup-overview">
        <OnexPopup
          placement={placement}
          active={active || null}
          distance={distance}
          skidding={skidding}
          arrow={arrow || null}
        >
          <span slot="anchor" />
          <div className="box" />
        </OneXPopup>

        <div className="popup-overview-options">
          <OnexSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onSlChange={event => setPlacement(event.target.value)}
          >
            <OneXMenuItem value="top">top</OneXMenuItem>
            <OneXMenuItem value="top-start">top-start</OneXMenuItem>
            <OneXMenuItem value="top-end">top-end</OneXMenuItem>
            <OneXMenuItem value="bottom">bottom</OneXMenuItem>
            <OneXMenuItem value="bottom-start">bottom-start</OneXMenuItem>
            <OneXMenuItem value="bottom-end">bottom-end</OneXMenuItem>
            <OneXMenuItem value="right">right</OneXMenuItem>
            <OneXMenuItem value="right-start">right-start</OneXMenuItem>
            <OneXMenuItem value="right-end">right-end</OneXMenuItem>
            <OneXMenuItem value="left">left</OneXMenuItem>
            <OneXMenuItem value="left-start">left-start</OneXMenuItem>
            <OneXMenuItem value="left-end">left-end</OneXMenuItem>
          </OneXSelect>
          <OnexInput
            type="number"
            name="distance"
            label="distance"
            value={distance}
            onOneXInput={event => setDistance(event.target.value)}
          />
          <OnexInput
            type="number"
            name="skidding"
            label="Skidding"
            value={skidding}
            onOneXInput={event => setSkidding(event.target.value)}
          />
        </div>

        <div className="popup-overview-options">
          <OnexSwitch checked={active} onSlChange={event => setActive(event.target.checked)}>
            Active
          </OneXSwitch>
          <OnexSwitch checked={arrow} onSlChange={event => setArrow(event.target.checked)}>
            Arrow
          </OneXSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

?> A popup's anchor should not be styled with `display: contents` since the coordinates will not be eligible for calculation. However, if the anchor is a `<slot>` element, popup will use the first assigned element as the anchor. This behavior allows other components to pass anchors through more easily via composition.

## Examples

### Activating

Popups are inactive and hidden until the `active` attribute is applied. Removing the attribute will tear down all positioning logic and listeners, meaning you can have many idle popups on the page without affecting performance.

```html preview
<div class="popup-active">
  <onex-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <br />
  <onex-switch checked>Active</onex-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('onex-popup');
  const active = container.querySelector('onex-switch');

  active.addEventListener('onex-change', () => (popup.active = active.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
`;

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="popup-active">
        <OnexPopup placement="top" active={active}>
          <span slot="anchor" />
          <div className="box" />
        </OneXPopup>

        <br />
        <OnexSwitch checked={active} onSlChange={event => setActive(event.target.checked)}>
          Active
        </OneXSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### External Anchors

By default, anchors are slotted into the popup using the `anchor` slot. If your anchor needs to live outside of the popup, you can pass the anchor's `id` to the `anchor` attribute. Alternatively, you can pass an element reference to the `anchor` property to achieve the same effect without using an `id`.

```html preview
<span id="external-anchor"></span>

<onex-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</onex-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ onex-popup .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
</style>
```

```jsx react
import { OneXPopup } from '@shoelace-style/shoelace/dist/react';

const css = `
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ onex-popup .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <span id="external-anchor" />

      <OnexPopup anchor="external-anchor" placement="top" active>
        <div class="box" />
      </OneXPopup>

      <style>{css}</style>
    </>
  );
};
```

### Placement

Use the `placement` attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport if you're using positioning features such as `flip` and `shift`.

Since placement is preferred when using `flip`, you can observe the popup's current placement when it's active by looking at the `data-current-placement` attribute. This attribute will update as the popup flips to find available space and it will be removed when the popup is deactivated.

```html preview
<div class="popup-placement">
  <onex-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <onex-select label="Placement" value="top">
    <onex-menu-item value="top">top</onex-menu-item>
    <onex-menu-item value="top-start">top-start</onex-menu-item>
    <onex-menu-item value="top-end">top-end</onex-menu-item>
    <onex-menu-item value="bottom">bottom</onex-menu-item>
    <onex-menu-item value="bottom-start">bottom-start</onex-menu-item>
    <onex-menu-item value="bottom-end">bottom-end</onex-menu-item>
    <onex-menu-item value="right">right</onex-menu-item>
    <onex-menu-item value="right-start">right-start</onex-menu-item>
    <onex-menu-item value="right-end">right-end</onex-menu-item>
    <onex-menu-item value="left">left</onex-menu-item>
    <onex-menu-item value="left-start">left-start</onex-menu-item>
    <onex-menu-item value="left-end">left-end</onex-menu-item>
  </onex-select>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-placement onex-select {
    max-width: 280px;
  }
</style>

<script>
  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('onex-popup');
  const select = container.querySelector('onex-select');

  select.addEventListener('onex-change', () => (popup.placement = select.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSelect, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-placement onex-select {
    max-width: 280px;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="popup-active">
      <div className="popup-placement">
        <OnexPopup placement={placement} active>
          <span slot="anchor" />
          <div className="box" />
        </OneXPopup>

        <OnexSelect label="Placement" value={placement} onSlChange={event => setPlacement(event.target.value)}>
          <OneXMenuItem value="top">top</OneXMenuItem>
          <OneXMenuItem value="top-start">top-start</OneXMenuItem>
          <OneXMenuItem value="top-end">top-end</OneXMenuItem>
          <OneXMenuItem value="bottom">bottom</OneXMenuItem>
          <OneXMenuItem value="bottom-start">bottom-start</OneXMenuItem>
          <OneXMenuItem value="bottom-end">bottom-end</OneXMenuItem>
          <OneXMenuItem value="right">right</OneXMenuItem>
          <OneXMenuItem value="right-start">right-start</OneXMenuItem>
          <OneXMenuItem value="right-end">right-end</OneXMenuItem>
          <OneXMenuItem value="left">left</OneXMenuItem>
          <OneXMenuItem value="left-start">left-start</OneXMenuItem>
          <OneXMenuItem value="left-end">left-end</OneXMenuItem>
        </OneXSelect>
      </div>

      <style>{css}</style>
    </div>
  );
};
```

### Distance

Use the `distance` attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.

```html preview
<div class="popup-distance">
  <onex-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <onex-range min="-50" max="50" step="1" value="0" label="Distance"></onex-range>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-distance onex-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('onex-popup');
  const distance = container.querySelector('onex-range');

  distance.addEventListener('onex-change', () => (popup.distance = distance.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXRange } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-distance onex-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [distance, setDistance] = useState(0);

  return (
    <>
      <div className="popup-distance">
        <OnexPopup placement="top" distance={distance} active>
          <span slot="anchor" />
          <div class="box" />
        </OneXPopup>

        <OnexRange
          label="Distance"
          min="-50"
          max="50"
          step="1"
          value={distance}
          onSlChange={event => setDistance(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Skidding

The `skidding` attribute is similar to `distance`, but instead allows you to offset the popup along the anchor's axis. Both positive and negative values are allowed.

```html preview
<div class="popup-skidding">
  <onex-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <onex-range min="-50" max="50" step="1" value="0" label="Skidding"></onex-range>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-skidding onex-range {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('onex-popup');
  const skidding = container.querySelector('onex-range');

  skidding.addEventListener('onex-change', () => (popup.skidding = skidding.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXRange } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-skidding onex-range {
    max-width: 260px;
  }
`;

const App = () => {
  const [skidding, setSkidding] = useState(0);

  return (
    <>
      <div className="popup-skidding">
        <OnexPopup placement="top" skidding={skidding} active>
          <span slot="anchor"></span>
          <div className="box"></div>
        </OneXPopup>

        <OnexRange
          label="Skidding"
          min="-50"
          max="50"
          step="1"
          value={skidding}
          onSlChange={event => setSkidding(event.target.value)}
        />
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Arrows

Add an arrow to your popup with the `arrow` attribute. It's usually a good idea to set a `distance` to make room for the arrow. To adjust the arrow's color and size, use the `--arrow-color` and `--arrow-size` custom properties, respectively. You can also target the `arrow` part to add additional styles such as shadows and borders.

By default, the arrow will be aligned as close to the center of the _anchor_ as possible, considering available space and `arrow-padding`. You can use the `arrow-placement` attribute to force the arrow to align to the start, end, or center of the _popup_ instead.

```html preview
<div class="popup-arrow">
  <onex-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <div class="popup-arrow-options">
    <onex-select label="Placement" name="placement" value="top" class="popup-overview-select">
      <onex-menu-item value="top">top</onex-menu-item>
      <onex-menu-item value="top-start">top-start</onex-menu-item>
      <onex-menu-item value="top-end">top-end</onex-menu-item>
      <onex-menu-item value="bottom">bottom</onex-menu-item>
      <onex-menu-item value="bottom-start">bottom-start</onex-menu-item>
      <onex-menu-item value="bottom-end">bottom-end</onex-menu-item>
      <onex-menu-item value="right">right</onex-menu-item>
      <onex-menu-item value="right-start">right-start</onex-menu-item>
      <onex-menu-item value="right-end">right-end</onex-menu-item>
      <onex-menu-item value="left">left</onex-menu-item>
      <onex-menu-item value="left-start">left-start</onex-menu-item>
      <onex-menu-item value="left-end">left-end</onex-menu-item>
    </onex-select>

    <onex-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <onex-menu-item value="anchor">anchor</onex-menu-item>
      <onex-menu-item value="start">start</onex-menu-item>
      <onex-menu-item value="end">end</onex-menu-item>
      <onex-menu-item value="center">center</onex-menu-item>
    </onex-select>
  </div>

  <div class="popup-arrow-options">
    <onex-switch name="arrow" checked>Arrow</onex-switch>
  </div>

  <style>
    .popup-arrow onex-popup {
      --arrow-color: var(--onex-color-primary-600);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--onex-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--onex-color-primary-600);
      border-radius: var(--onex-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options onex-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script>
    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('onex-popup');
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener('onex-change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('onex-change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('onex-change', () => (popup.arrow = arrow.checked));
  </script>
</div>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSelect, OneXMenuItem, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-arrow onex-popup {
    --arrow-color: var(--onex-color-primary-600);
  }

  .popup-arrow span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-arrow .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-arrow-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-arrow-options onex-select {
    width: 160px;
  }

  .popup-arrow-options + .popup-arrow-options {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [placement, setPlacement] = useState('top');
  const [arrowPlacement, setArrowPlacement] = useState('anchor');
  const [arrow, setArrow] = useState(true);

  return (
    <>
      <div className="popup-arrow">
        <OnexPopup placement={placement} arrow={arrow || null} arrow-placement={arrowPlacement} distance="8" active>
          <span slot="anchor" />
          <div className="box" />
        </OneXPopup>

        <div className="popup-arrow-options">
          <OnexSelect
            label="Placement"
            name="placement"
            value={placement}
            className="popup-overview-select"
            onSlChange={event => setPlacement(event.target.value)}
          >
            <OneXMenuItem value="top">top</OneXMenuItem>
            <OneXMenuItem value="top-start">top-start</OneXMenuItem>
            <OneXMenuItem value="top-end">top-end</OneXMenuItem>
            <OneXMenuItem value="bottom">bottom</OneXMenuItem>
            <OneXMenuItem value="bottom-start">bottom-start</OneXMenuItem>
            <OneXMenuItem value="bottom-end">bottom-end</OneXMenuItem>
            <OneXMenuItem value="right">right</OneXMenuItem>
            <OneXMenuItem value="right-start">right-start</OneXMenuItem>
            <OneXMenuItem value="right-end">right-end</OneXMenuItem>
            <OneXMenuItem value="left">left</OneXMenuItem>
            <OneXMenuItem value="left-start">left-start</OneXMenuItem>
            <OneXMenuItem value="left-end">left-end</OneXMenuItem>
          </OneXSelect>

          <OnexSelect
            label="Arrow Placement"
            name="arrow-placement"
            value={arrowPlacement}
            onSlChange={event => setArrowPlacement(event.target.value)}
          >
            <OneXMenuItem value="anchor">anchor</OneXMenuItem>
            <OneXMenuItem value="start">start</OneXMenuItem>
            <OneXMenuItem value="end">end</OneXMenuItem>
            <OneXMenuItem value="center">center</OneXMenuItem>
          </OneXSelect>
        </div>

        <div className="popup-arrow-options">
          <OnexSwitch name="arrow" checked={arrow} onSlChange={event => setArrow(event.target.checked)}>
            Arrow
          </OneXSwitch>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Syncing with the Anchor's Dimensions

Use the `sync` attribute to make the popup the same width or height as the anchor element. This is useful for controls that need the popup to stay the same width or height as the trigger.

```html preview
<div class="popup-sync">
  <onex-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </onex-popup>

  <onex-select value="width" label="Sync">
    <onex-menu-item value="width">Width</onex-menu-item>
    <onex-menu-item value="height">Height</onex-menu-item>
    <onex-menu-item value="both">Both</onex-menu-item>
    <onex-menu-item value="">None</onex-menu-item>
  </onex-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-sync onex-select {
    width: 160px;
  }
</style>

<script>
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('onex-popup');
  const fixed = container.querySelector('onex-switch');
  const sync = container.querySelector('onex-select');

  sync.addEventListener('onex-change', () => (popup.sync = sync.value));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSelect, OneXMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-sync onex-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [sync, setSync] = useState('width');

  return (
    <>
      <div class="popup-sync">
        <OnexPopup placement="top" sync={sync} active>
          <span slot="anchor" />
          <div class="box" />
        </OneXPopup>

        <OnexSelect value={sync} label="Sync" onSlChange={event => setSync(event.target.value)}>
          <OneXMenuItem value="width">Width</OneXMenuItem>
          <OneXMenuItem value="height">Height</OneXMenuItem>
          <OneXMenuItem value="both">Both</OneXMenuItem>
          <OneXMenuItem value="">None</OneXMenuItem>
        </OneXSelect>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Positioning Strategy

By default, the popup is positioned using an absolute positioning strategy. However, if your anchor is fixed or exists within a container that has `overflow: auto|hidden`, the popup risks being clipped. To work around this, you can use a fixed positioning strategy by setting the `strategy` attribute to `fixed`.

The fixed positioning strategy reduces jumpiness when the anchor is fixed and allows the popup to break out containers that clip. When using this strategy, it's important to note that the content will be positioned _relative to its containing block_, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

In this example, you can see how the popup breaks out of the overflow container when it's fixed. The fixed positioning strategy tends to be less performant than absolute, so avoid using it unnecessarily.

Toggle the switch and scroll the container to see the difference.

```html preview
<div class="popup-strategy">
  <div class="overflow">
    <onex-popup placement="top" strategy="fixed" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </onex-popup>
  </div>

  <onex-switch checked>Fixed</onex-switch>
</div>

<style>
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-strategy onex-switch {
    margin-top: 1rem;
  }
</style>

<script>
  const container = document.querySelector('.popup-strategy');
  const popup = container.querySelector('onex-popup');
  const fixed = container.querySelector('onex-switch');

  fixed.addEventListener('onex-change', () => (popup.strategy = fixed.checked ? 'fixed' : 'absolute'));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-strategy .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-strategy span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-strategy .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }

  .popup-strategy onex-switch {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [fixed, setFixed] = useState(true);

  return (
    <>
      <div className="popup-strategy">
        <div className="overflow">
          <OnexPopup placement="top" strategy={fixed ? 'fixed' : 'absolute'} active>
            <span slot="anchor" />
            <div className="box" />
          </OneXPopup>
        </div>

        <OnexSwitch checked={fixed} onSlChange={event => setFixed(event.target.checked)}>
          Fixed
        </OneXSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip

When the popup doesn't have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the `flip` attribute. By default, the popup will flip to the opposite placement, but you can configure preferred fallback placements using `flip-fallback-placement` and `flip-fallback-strategy`. Additional options are available to control the flip behavior's boundary and padding.

Scroll the container to see how the popup flips to prevent clipping.

```html preview
<div class="popup-flip">
  <div class="overflow">
    <onex-popup placement="top" flip active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </onex-popup>
  </div>

  <br />
  <onex-switch checked>Flip</onex-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('onex-popup');
  const flip = container.querySelector('onex-switch');

  flip.addEventListener('onex-change', () => (popup.flip = flip.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
`;

const App = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="popup-flip">
        <div className="overflow">
          <OnexPopup placement="top" flip={flip} active>
            <span slot="anchor" />
            <div className="box" />
          </OneXPopup>
        </div>

        <br />
        <OnexSwitch checked={flip} onSlChange={event => setFlip(event.target.checked)}>
          Flip
        </OneXSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Flip Fallbacks

While using the `flip` attribute, you can customize the placement of the popup when the preferred placement doesn't have room. For this, use `flip-fallback-placements` and `flip-fallback-strategy`.

If the preferred placement doesn't have room, the first suitable placement found in `flip-fallback-placement` will be used. The value of this attribute must be a string including any number of placements separated by a space, e.g. `"right bottom"`.

If no fallback placement works, the final placement will be determined by `flip-fallback-strategy`. This value can be either `initial` (default), where the placement reverts to the position in `placement`, or `best-fit`, where the placement is chosen based on available space.

Scroll the container to see how the popup changes it's fallback placement to prevent clipping.

```html preview
<div class="popup-flip-fallbacks">
  <div class="overflow">
    <onex-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </onex-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
</style>
```

```jsx react
import { OneXPopup } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
`;

const App = () => {
  return (
    <>
      <div className="popup-flip-fallbacks">
        <div className="overflow">
          <OnexPopup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
            <span slot="anchor" />
            <div className="box" />
          </OneXPopup>
        </div>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Shift

When a popup is longer than its anchor, it risks being clipped by an overflowing container. In this case, use the `shift` attribute to shift the popup along its axis and back into view. You can customize the shift behavior using `shiftBoundary` and `shift-padding`.

Toggle the switch to see the difference.

```html preview
<div class="popup-shift">
  <div class="overflow">
    <onex-popup placement="top" shift shift-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </onex-popup>
  </div>

  <onex-switch checked>Shift</onex-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
</style>

<script>
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('onex-popup');
  const shift = container.querySelector('onex-switch');

  shift.addEventListener('onex-change', () => (popup.shift = shift.checked));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);
  }
`;

const App = () => {
  const [shift, setShift] = useState(true);

  return (
    <>
      <div className="popup-shift">
        <div className="overflow">
          <OnexPopup placement="top" shift={shift} shift-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </OneXPopup>
        </div>

        <OnexSwitch checked={shift} onSlChange={event => setShift(event.target.checked)}>
          Shift
        </OneXSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Auto-size

Use the `auto-size` attribute to tell the popup to resize when necessary to prevent it from getting clipped. Possible values are `horizontal`, `vertical`, and `both`. You can use `autoSizeBoundary` and `auto-size-padding` to customize the behavior of this option. Auto-size works well with `flip`, but if you're using `auto-size-padding` make sure `flip-padding` is the same value.

When using `auto-size`, one or both of `--auto-size-available-width` and `--auto-size-available-height` will be applied to the host element. These values determine the available space the popover has before clipping will occur. Since they cascade, you can use them to set a max-width/height on your popup's content and easily control its overflow.

Scroll the container to see the popup resize as its available space changes.

```html preview
<div class="popup-auto-size">
  <div class="overflow">
    <onex-popup placement="top" auto-size="both" auto-size-padding="10" active>
      <span slot="anchor"></span>
      <div class="box"></div>
    </onex-popup>
  </div>

  <br />
  <onex-switch checked>Auto-size</onex-switch>
</div>

<style>
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
</style>

<script>
  const container = document.querySelector('.popup-auto-size');
  const popup = container.querySelector('onex-popup');
  const autoSize = container.querySelector('onex-switch');

  autoSize.addEventListener('onex-change', () => (popup.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

```jsx react
import { useState } from 'react';
import { OneXPopup, OneXSwitch } from '@shoelace-style/shoelace/dist/react';

const css = `
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--onex-color-neutral-200);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--onex-color-neutral-600);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--onex-color-primary-600);
    border-radius: var(--onex-border-radius-medium);

    /* This sets the preferred size of the popup's content */
    width: 100px;
    height: 200px;

    /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
`;

const App = () => {
  const [autoSize, setAutoSize] = useState(true);

  return (
    <>
      <div className="popup-auto-size">
        <div className="overflow">
          <OnexPopup placement="top" auto-size={autoSize ? 'both' || null} auto-size-padding="10" active>
            <span slot="anchor" />
            <div className="box" />
          </OneXPopup>
        </div>

        <br />
        <OnexSwitch checked={autoSize} onSlChange={event => setAutoSize(event.target.checked)}>
          Auto-size
        </OneXSwitch>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:onex-popup]
