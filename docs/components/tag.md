# Tag

[component-header:onex-tag]

```html preview
<onex-tag variant="primary">Primary</onex-tag>
<onex-tag variant="success">Success</onex-tag>
<onex-tag variant="neutral">Neutral</onex-tag>
<onex-tag variant="warning">Warning</onex-tag>
<onex-tag variant="danger">Danger</onex-tag>
```

```jsx react
import { OneXTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexTag variant="primary">Primary</OneXTag>
    <OnexTag variant="success">Success</OneXTag>
    <OnexTag variant="neutral">Neutral</OneXTag>
    <OnexTag variant="warning">Warning</OneXTag>
    <OnexTag variant="danger">Danger</OneXTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<onex-tag size="small">Small</onex-tag>
<onex-tag size="medium">Medium</onex-tag>
<onex-tag size="large">Large</onex-tag>
```

```jsx react
import { OneXTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexTag size="small">Small</OneXTag>
    <OnexTag size="medium">Medium</OneXTag>
    <OnexTag size="large">Large</OneXTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<onex-tag size="small" pill>Small</onex-tag>
<onex-tag size="medium" pill>Medium</onex-tag>
<onex-tag size="large" pill>Large</onex-tag>
```

```jsx react
import { OneXTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexTag size="small" pill>
      Small
    </OneXTag>
    <OnexTag size="medium" pill>
      Medium
    </OneXTag>
    <OnexTag size="large" pill>
      Large
    </OneXTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <onex-tag size="small" removable>Small</onex-tag>
  <onex-tag size="medium" removable>Medium</onex-tag>
  <onex-tag size="large" removable>Large</onex-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('onex-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable onex-tag {
    transition: var(--onex-transition-medium) opacity;
  }
</style>
```

```jsx react
import { OneXTag } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tags-removable onex-tag {
    transition: var(--onex-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <OnexTag size="small" removable onSlRemove={handleRemove}>
          Small
        </OneXTag>

        <OnexTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </OneXTag>

        <OnexTag size="large" removable onSlRemove={handleRemove}>
          Large
        </OneXTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:onex-tag]
