# Resize Observer

[component-header:onex-resize-observer]

The resize observer will report changes to the dimensions of the elements it wraps through the `onex-resize` event. When emitted, a collection of [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to `event.detail` that contains the target element and information about its dimensions.

```html preview
<div class="resize-observer-overview">
  <onex-resize-observer>
    <div>Resize this box and watch the console 👉</div>
  </onex-resize-observer>
</div>

<script>
  const container = document.querySelector('.resize-observer-overview');
  const resizeObserver = container.querySelector('onex-resize-observer');

  resizeObserver.addEventListener('onex-resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--onex-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
</style>
```

```jsx react
import { OneXResizeObserver } from '@shoelace-style/shoelace/dist/react';

const css = `
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--onex-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const App = () => (
  <>
    <div className="resize-observer-overview">
      <OnexResizeObserver onSlResize={event => console.log(event.detail)}>
        <div>Resize this box and watch the console 👉</div>
      </OneXResizeObserver>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-resize-observer]
