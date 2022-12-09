# Tree Item

[component-header:onex-tree-item]

```html preview
<onex-tree>
  <onex-tree-item>
    Item 1
    <onex-tree-item>Item A</onex-tree-item>
    <onex-tree-item>Item B</onex-tree-item>
    <onex-tree-item>Item C</onex-tree-item>
  </onex-tree-item>
  <onex-tree-item>Item 2</onex-tree-item>
  <onex-tree-item>Item 3</onex-tree-item>
</onex-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OneXTreeItem>
      Item 1
      <OneXTreeItem>Item A</OneXTreeItem>
      <OneXTreeItem>Item B</OneXTreeItem>
      <OneXTreeItem>Item C</OneXTreeItem>
    </OneXTreeItem>
    <OneXTreeItem>Item 2</OneXTreeItem>
    <OneXTreeItem>Item 3</OneXTreeItem>
  </OneXTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html preview
<onex-tree>
  <onex-tree-item>
    Item 1
    <onex-tree-item>
      Item A
      <onex-tree-item>Item Z</onex-tree-item>
      <onex-tree-item>Item Y</onex-tree-item>
      <onex-tree-item>Item X</onex-tree-item>
    </onex-tree-item>
    <onex-tree-item>Item B</onex-tree-item>
    <onex-tree-item>Item C</onex-tree-item>
  </onex-tree-item>
  <onex-tree-item>Item 2</onex-tree-item>
  <onex-tree-item>Item 3</onex-tree-item>
</onex-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OneXTreeItem>
      Item 1
      <OneXTreeItem>
        Item A
        <OneXTreeItem>Item Z</OneXTreeItem>
        <OneXTreeItem>Item Y</OneXTreeItem>
        <OneXTreeItem>Item X</OneXTreeItem>
      </OneXTreeItem>
      <OneXTreeItem>Item B</OneXTreeItem>
      <OneXTreeItem>Item C</OneXTreeItem>
    </OneXTreeItem>
    <OneXTreeItem>Item 2</OneXTreeItem>
    <OneXTreeItem>Item 3</OneXTreeItem>
  </OneXTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html preview
<onex-tree>
  <onex-tree-item selected>
    Item 1
    <onex-tree-item>Item A</onex-tree-item>
    <onex-tree-item>Item B</onex-tree-item>
    <onex-tree-item>Item C</onex-tree-item>
  </onex-tree-item>
  <onex-tree-item>Item 2</onex-tree-item>
  <onex-tree-item>Item 3</onex-tree-item>
</onex-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OneXTreeItem selected>
      Item 1
      <OneXTreeItem>Item A</OneXTreeItem>
      <OneXTreeItem>Item B</OneXTreeItem>
      <OneXTreeItem>Item C</OneXTreeItem>
    </OneXTreeItem>
    <OneXTreeItem>Item 2</OneXTreeItem>
    <OneXTreeItem>Item 3</OneXTreeItem>
  </OneXTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html preview
<onex-tree>
  <onex-tree-item expanded>
    Item 1
    <onex-tree-item expanded>
      Item A
      <onex-tree-item>Item Z</onex-tree-item>
      <onex-tree-item>Item Y</onex-tree-item>
      <onex-tree-item>Item X</onex-tree-item>
    </onex-tree-item>
    <onex-tree-item>Item B</onex-tree-item>
    <onex-tree-item>Item C</onex-tree-item>
  </onex-tree-item>
  <onex-tree-item>Item 2</onex-tree-item>
  <onex-tree-item>Item 3</onex-tree-item>
</onex-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OneXTreeItem expanded>
      Item 1
      <OneXTreeItem expanded>
        Item A
        <OneXTreeItem>Item Z</OneXTreeItem>
        <OneXTreeItem>Item Y</OneXTreeItem>
        <OneXTreeItem>Item X</OneXTreeItem>
      </OneXTreeItem>
      <OneXTreeItem>Item B</OneXTreeItem>
      <OneXTreeItem>Item C</OneXTreeItem>
    </OneXTreeItem>
    <OneXTreeItem>Item 2</OneXTreeItem>
    <OneXTreeItem>Item 3</OneXTreeItem>
  </OneXTree>
);
```

[component-metadata:onex-tree-item]
