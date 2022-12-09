# Tree

[component-header:onex-tree]

```html preview
<onex-tree>
  <onex-tree-item>
    Deciduous
    <onex-tree-item>Birch</onex-tree-item>
    <onex-tree-item>
      Maple
      <onex-tree-item>Field maple</onex-tree-item>
      <onex-tree-item>Red maple</onex-tree-item>
      <onex-tree-item>Sugar maple</onex-tree-item>
    </onex-tree-item>
    <onex-tree-item>Oak</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Coniferous
    <onex-tree-item>Cedar</onex-tree-item>
    <onex-tree-item>Pine</onex-tree-item>
    <onex-tree-item>Spruce</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Non-trees
    <onex-tree-item>Bamboo</onex-tree-item>
    <onex-tree-item>Cactus</onex-tree-item>
    <onex-tree-item>Fern</onex-tree-item>
  </onex-tree-item>
</onex-tree>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OneXTreeItem>
      Deciduous
      <OneXTreeItem>Birch</OneXTreeItem>
      <OneXTreeItem>
        Maple
        <OneXTreeItem>Field maple</OneXTreeItem>
        <OneXTreeItem>Red maple</OneXTreeItem>
        <OneXTreeItem>Sugar maple</OneXTreeItem>
      </OneXTreeItem>
      <OneXTreeItem>Oak</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Coniferous
      <OneXTreeItem>Cedar</OneXTreeItem>
      <OneXTreeItem>Pine</OneXTreeItem>
      <OneXTreeItem>Spruce</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Non-trees
      <OneXTreeItem>Bamboo</OneXTreeItem>
      <OneXTreeItem>Cactus</OneXTreeItem>
      <OneXTreeItem>Fern</OneXTreeItem>
    </OneXTreeItem>
  </OneXTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html preview
<onex-select id="selection-mode" value="single" label="Selection">
  <onex-menu-item value="single">Single</onex-menu-item>
  <onex-menu-item value="multiple">Multiple</onex-menu-item>
  <onex-menu-item value="leaf">Leaf</onex-menu-item>
</onex-select>

<br />

<onex-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('onex-change', () => {
    tree.querySelectorAll('onex-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <OnexSelect label="Selection" value={selection} onSlChange={event => setSelection(event.target.value)}>
        <OneXMenuItem value="single">single</OneXMenuItem>
        <OneXMenuItem value="multiple">multiple</OneXMenuItem>
        <OneXMenuItem value="leaf">leaf</OneXMenuItem>
      </OneXSelect>

      <br />

      <OnexTree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html preview
<onex-tree class="tree-with-lines">
  <onex-tree-item expanded>
    Deciduous
    <onex-tree-item>Birch</onex-tree-item>
    <onex-tree-item expanded>
      Maple
      <onex-tree-item>Field maple</onex-tree-item>
      <onex-tree-item>Red maple</onex-tree-item>
      <onex-tree-item>Sugar maple</onex-tree-item>
    </onex-tree-item>
    <onex-tree-item>Oak</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Coniferous
    <onex-tree-item>Cedar</onex-tree-item>
    <onex-tree-item>Pine</onex-tree-item>
    <onex-tree-item>Spruce</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Non-trees
    <onex-tree-item>Bamboo</onex-tree-item>
    <onex-tree-item>Cactus</onex-tree-item>
    <onex-tree-item>Fern</onex-tree-item>
  </onex-tree-item>
</onex-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <OneXTreeItem expanded>
      Deciduous
      <OneXTreeItem>Birch</OneXTreeItem>
      <OneXTreeItem expanded>
        Maple
        <OneXTreeItem>Field maple</OneXTreeItem>
        <OneXTreeItem>Red maple</OneXTreeItem>
        <OneXTreeItem>Sugar maple</OneXTreeItem>
      </OneXTreeItem>
      <OneXTreeItem>Oak</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Coniferous
      <OneXTreeItem>Cedar</OneXTreeItem>
      <OneXTreeItem>Pine</OneXTreeItem>
      <OneXTreeItem>Spruce</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Non-trees
      <OneXTreeItem>Bamboo</OneXTreeItem>
      <OneXTreeItem>Cactus</OneXTreeItem>
      <OneXTreeItem>Fern</OneXTreeItem>
    </OneXTreeItem>
  </OneXTree>
);
```

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `onex-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html preview
<onex-tree>
  <onex-tree-item lazy>Available Trees</onex-tree-item>
</onex-tree>

<script type="module">
  const lazyItem = document.querySelector('onex-tree-item[lazy]');

  lazyItem.addEventListener('onex-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('onex-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <OnexTree>
      <OneXTreeItem lazy={lazy} onSlLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <OneXTreeItem>{item}</OneXTreeItem>
        ))}
      </OneXTreeItem>
    </OneXTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html preview
<onex-tree class="custom-icons">
  <onex-icon name="plus-square" slot="expand-icon"></onex-icon>
  <onex-icon name="dash-square" slot="collapse-icon"></onex-icon>

  <onex-tree-item>
    Deciduous
    <onex-tree-item>Birch</onex-tree-item>
    <onex-tree-item>
      Maple
      <onex-tree-item>Field maple</onex-tree-item>
      <onex-tree-item>Red maple</onex-tree-item>
      <onex-tree-item>Sugar maple</onex-tree-item>
    </onex-tree-item>
    <onex-tree-item>Oak</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Coniferous
    <onex-tree-item>Cedar</onex-tree-item>
    <onex-tree-item>Pine</onex-tree-item>
    <onex-tree-item>Spruce</onex-tree-item>
  </onex-tree-item>

  <onex-tree-item>
    Non-trees
    <onex-tree-item>Bamboo</onex-tree-item>
    <onex-tree-item>Cactus</onex-tree-item>
    <onex-tree-item>Fern</onex-tree-item>
  </onex-tree-item>
</onex-tree>

<style>
  .custom-icons onex-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTree>
    <OnexIcon name="plus-square" slot="expand-icon"></OneXIcon>
    <OnexIcon name="dash-square" slot="collapse-icon"></OneXIcon>

    <OneXTreeItem>
      Deciduous
      <OneXTreeItem>Birch</OneXTreeItem>
      <OneXTreeItem>
        Maple
        <OneXTreeItem>Field maple</OneXTreeItem>
        <OneXTreeItem>Red maple</OneXTreeItem>
        <OneXTreeItem>Sugar maple</OneXTreeItem>
      </OneXTreeItem>
      <OneXTreeItem>Oak</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Coniferous
      <OneXTreeItem>Cedar</OneXTreeItem>
      <OneXTreeItem>Pine</OneXTreeItem>
      <OneXTreeItem>Spruce</OneXTreeItem>
    </OneXTreeItem>

    <OneXTreeItem>
      Non-trees
      <OneXTreeItem>Bamboo</OneXTreeItem>
      <OneXTreeItem>Cactus</OneXTreeItem>
      <OneXTreeItem>Fern</OneXTreeItem>
    </OneXTreeItem>
  </OneXTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html preview
<onex-tree class="tree-with-icons">
  <onex-tree-item expanded>
    <onex-icon name="folder"></onex-icon>
    Documents

    <onex-tree-item>
      <onex-icon name="folder"> </onex-icon>
      Photos
      <onex-tree-item>
        <onex-icon name="image"></onex-icon>
        birds.jpg
      </onex-tree-item>
      <onex-tree-item>
        <onex-icon name="image"></onex-icon>
        kitten.jpg
      </onex-tree-item>
      <onex-tree-item>
        <onex-icon name="image"></onex-icon>
        puppy.jpg
      </onex-tree-item>
    </onex-tree-item>

    <onex-tree-item>
      <onex-icon name="folder"></onex-icon>
      Writing
      <onex-tree-item>
        <onex-icon name="file"></onex-icon>
        draft.txt
      </onex-tree-item>
      <onex-tree-item>
        <onex-icon name="file-pdf"></onex-icon>
        final.pdf
      </onex-tree-item>
      <onex-tree-item>
        <onex-icon name="file-bar-graph"></onex-icon>
        sales.xls
      </onex-tree-item>
    </onex-tree-item>
  </onex-tree-item>
</onex-tree>
```

```jsx react
import { OneXIcon, OneXTree, OneXTreeItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  return (
    <OnexTree class="tree-with-icons">
      <OneXTreeItem expanded>
        <OnexIcon name="folder" />
        Root
        <OneXTreeItem>
          <OnexIcon name="folder" />
          Folder 1<OneXTreeItem>
            <OnexIcon name="files" />
            File 1 - 1
          </OneXTreeItem>
          <OneXTreeItem disabled>
            <OnexIcon name="files" />
            File 1 - 2
          </OneXTreeItem>
          <OneXTreeItem>
            <OnexIcon name="files" />
            File 1 - 3
          </OneXTreeItem>
        </OneXTreeItem>
        <OneXTreeItem>
          <OnexIcon name="files" />
          Folder 2<OneXTreeItem>
            <OnexIcon name="files" />
            File 2 - 1
          </OneXTreeItem>
          <OneXTreeItem>
            <OnexIcon name="files" />
            File 2 - 2
          </OneXTreeItem>
        </OneXTreeItem>
        <OneXTreeItem>
          <OnexIcon name="files" />
          File 1
        </OneXTreeItem>
      </OneXTreeItem>
    </OneXTree>
  );
};
```

[component-metadata:onex-tree]
