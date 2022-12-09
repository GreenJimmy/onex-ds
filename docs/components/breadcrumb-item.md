# Breadcrumb Item

[component-header:onex-breadcrumb-item]

```html preview
<onex-breadcrumb>
  <onex-breadcrumb-item>
    <onex-icon slot="prefix" name="house"></onex-icon>
    Home
  </onex-breadcrumb-item>
  <onex-breadcrumb-item>Clothing</onex-breadcrumb-item>
  <onex-breadcrumb-item>Shirts</onex-breadcrumb-item>
</onex-breadcrumb>
```

```jsx react
import { OneXBreadcrumb, OneXBreadcrumbItem, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexBreadcrumb>
    <OnexBreadcrumbItem>
      <OnexIcon slot="prefix" name="house"></OneXIcon>
      Home
    </OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Clothing</OneXBreadcrumbItem>
    <OnexBreadcrumbItem>Shirts</OneXBreadcrumbItem>
  </OneXBreadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:onex-breadcrumb-item]
