# Breadcrumb

[component-header:onex-breadcrumb]

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item>Catalog</onex-breadcrumb-item>
  <onex-breadcrumb-item>Clothing</onex-breadcrumb-item>
  <onex-breadcrumb-item>Women's</onex-breadcrumb-item>
  <onex-breadcrumb-item>Shirts &amp; Tops</onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import { OneXBreadcrumb, OneXBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem>Catalog</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Clothing</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Women's</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Shirts &amp; Tops</OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item href="https://example.com/home">Homepage</onex-breadcrumb-item>

  <onex-breadcrumb-item href="https://example.com/home/services">Our Services</onex-breadcrumb-item>

  <onex-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</onex-breadcrumb-item>

  <onex-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import { OneXBreadcrumb, OneXBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem href="https://example.com/home">Homepage</OneXBreadcrumbItem>

    <OnexBreadcrumbItem href="https://example.com/home/services">Our Services</OneXBreadcrumbItem>

    <OnexBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</OneXBreadcrumbItem>

    <OnexBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<onex-breadcrumb>
  <onex-icon name="dot" slot="separator"></onex-icon>
  <onex-breadcrumb-item>First</onex-breadcrumb-item>
  <onex-breadcrumb-item>Second</onex-breadcrumb-item>
  <onex-breadcrumb-item>Third</onex-breadcrumb-item>
</onex-breadcrumb>

<br />

<onex-breadcrumb>
  <onex-icon name="arrow-right" slot="separator"></onex-icon>
  <onex-breadcrumb-item>First</onex-breadcrumb-item>
  <onex-breadcrumb-item>Second</onex-breadcrumb-item>
  <onex-breadcrumb-item>Third</onex-breadcrumb-item>
</onex-breadcrumb>

<br />

<onex-breadcrumb>
  <span slot="separator">/</span>
  <onex-breadcrumb-item>First</onex-breadcrumb-item>
  <onex-breadcrumb-item>Second</onex-breadcrumb-item>
  <onex-breadcrumb-item>Third</onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { OneXBreadcrumb, OneXBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexBreadcrumb>
      <onex-icon name="dot" slot="separator" />
      <OnexBreadcrumbItem>First</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Second</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Third</OneXBreadcrumbItem>
    </OneXBreadcrumb>

    <br />

    <OnexBreadcrumb>
      <onex-icon name="arrow-right" slot="separator" />
      <OnexBreadcrumbItem>First</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Second</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Third</OneXBreadcrumbItem>
    </OneXBreadcrumb>

    <br />

    <OnexBreadcrumb>
      <span slot="separator">/</span>
      <OnexBreadcrumbItem>First</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Second</OneXBreadcrumbItem>
      <OnexBreadcrumbItem>Third</OneXBreadcrumbItem>
    </OneXBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item>
    <onex-icon slot="prefix" name="house"></onex-icon>
    Home
  </onex-breadcrumb-item>
  <onex-breadcrumb-item>Articles</onex-breadcrumb-item>
  <onex-breadcrumb-item>Traveling</onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import { OneXBreadcrumb, OneXBreadcrumbItem, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem>
      <OnexIcon slot="prefix" name="house" />
      Home
    </OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Articles</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Traveling</OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item>Documents</onex-breadcrumb-item>
  <onex-breadcrumb-item>Policies</onex-breadcrumb-item>
  <onex-breadcrumb-item>
    Security
    <onex-icon slot="suffix" name="shield-lock"></onex-icon>
  </onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import { OneXBreadcrumb, OneXBreadcrumbItem, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem>Documents</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Policies</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>
      Security
      <OnexIcon slot="suffix" name="shield-lock"></OneXIcon>
    </OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item>Homepage</onex-breadcrumb-item>
  <onex-breadcrumb-item>Our Services</onex-breadcrumb-item>
  <onex-breadcrumb-item>Digital Media</onex-breadcrumb-item>
  <onex-breadcrumb-item>
    Web Design
    <onex-dropdown slot="suffix">
      <onex-button slot="trigger" size="small" circle>
        <onex-icon label="More options" name="three-dots"></onex-icon>
      </onex-button>
      <onex-menu>
        <onex-menu-item checked>Web Design</onex-menu-item>
        <onex-menu-item>Web Development</onex-menu-item>
        <onex-menu-item>Marketing</onex-menu-item>
      </onex-menu>
    </onex-dropdown>
  </onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import {
  OneXBreadcrumb,
  OneXBreadcrumbItem,
  OneXButton,
  OneXDropdown,
  OneXIcon,
  OneXMenu,
  OneXMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem>Homepage</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Our Services</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Digital Media</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>
      Web Design
      <OnexDropdown slot="suffix">
        <OnexButton slot="trigger" size="small" circle>
          <OnexIcon label="More options" name="three-dots"></OneXIcon>
        </OneXButton>
        <OnexMenu>
          <OneXMenuItem checked>Web Design</OneXMenuItem>
          <OneXMenuItem>Web Development</OneXMenuItem>
          <OneXMenuItem>Marketing</OneXMenuItem>
        </OneXMenu>
      </OneXDropdown>
    </OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

[component-metadata:onex-breadcrumb]
