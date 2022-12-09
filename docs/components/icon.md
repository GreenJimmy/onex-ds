# Icon

[component-header:onex-icon]

Shoelace comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

?> Depending on how you're loading Shoelace, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so Shoelace knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<onex-icon name="icon-name-here"></onex-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <onex-input placeholder="Search Icons" clearable>
      <onex-icon slot="prefix" name="search"></onex-icon>
    </onex-input>
    <onex-select value="outline">
      <onex-menu-item value="outline">Outlined</onex-menu-item>
      <onex-menu-item value="fill">Filled</onex-menu-item>
      <onex-menu-item value="all">All icons</onex-menu-item>
    </onex-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<onex-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <onex-icon name="exclamation-triangle"></onex-icon>
  <onex-icon name="archive"></onex-icon>
  <onex-icon name="battery-charging"></onex-icon>
  <onex-icon name="bell"></onex-icon>
</div>
<div style="color: #9013fe;">
  <onex-icon name="clock"></onex-icon>
  <onex-icon name="cloud"></onex-icon>
  <onex-icon name="download"></onex-icon>
  <onex-icon name="file-earmark"></onex-icon>
</div>
<div style="color: #417505;">
  <onex-icon name="flag"></onex-icon>
  <onex-icon name="heart"></onex-icon>
  <onex-icon name="image"></onex-icon>
  <onex-icon name="lightning"></onex-icon>
</div>
<div style="color: #f5a623;">
  <onex-icon name="mic"></onex-icon>
  <onex-icon name="search"></onex-icon>
  <onex-icon name="star"></onex-icon>
  <onex-icon name="trash"></onex-icon>
</div>
```

```jsx react
import { OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <OnexIcon name="exclamation-triangle"></OneXIcon>
      <OnexIcon name="archive"></OneXIcon>
      <OnexIcon name="battery-charging"></OneXIcon>
      <OnexIcon name="bell"></OneXIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <OnexIcon name="clock"></OneXIcon>
      <OnexIcon name="cloud"></OneXIcon>
      <OnexIcon name="download"></OneXIcon>
      <OnexIcon name="file-earmark"></OneXIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <OnexIcon name="flag"></OneXIcon>
      <OnexIcon name="heart"></OneXIcon>
      <OnexIcon name="image"></OneXIcon>
      <OnexIcon name="lightning"></OneXIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <OnexIcon name="mic"></OneXIcon>
      <OnexIcon name="search"></OneXIcon>
      <OnexIcon name="star"></OneXIcon>
      <OnexIcon name="trash"></OneXIcon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <onex-icon name="exclamation-triangle"></onex-icon>
  <onex-icon name="archive"></onex-icon>
  <onex-icon name="battery-charging"></onex-icon>
  <onex-icon name="bell"></onex-icon>
  <onex-icon name="clock"></onex-icon>
  <onex-icon name="cloud"></onex-icon>
  <onex-icon name="download"></onex-icon>
  <onex-icon name="file-earmark"></onex-icon>
  <onex-icon name="flag"></onex-icon>
  <onex-icon name="heart"></onex-icon>
  <onex-icon name="image"></onex-icon>
  <onex-icon name="lightning"></onex-icon>
  <onex-icon name="mic"></onex-icon>
  <onex-icon name="search"></onex-icon>
  <onex-icon name="star"></onex-icon>
  <onex-icon name="trash"></onex-icon>
</div>
```

```jsx react
import { OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <OnexIcon name="exclamation-triangle" />
    <OnexIcon name="archive" />
    <OnexIcon name="battery-charging" />
    <OnexIcon name="bell" />
    <OnexIcon name="clock" />
    <OnexIcon name="cloud" />
    <OnexIcon name="download" />
    <OnexIcon name="file-earmark" />
    <OnexIcon name="flag" />
    <OnexIcon name="heart" />
    <OnexIcon name="image" />
    <OnexIcon name="lightning" />
    <OnexIcon name="mic" />
    <OnexIcon name="search" />
    <OnexIcon name="star" />
    <OnexIcon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<onex-icon name="star-fill" label="Add to favorites"></onex-icon>
```

```jsx react
import { OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<onex-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></onex-icon>
```

```jsx react
import { OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></OneXIcon>;
```

## Icon Libraries

You can register additional icons to use with the `<onex-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Shoelace ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Shoelace components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<onex-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<onex-icon library="my-icons" name="smile"></onex-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="boxicons" name="bx-bot"></onex-icon>
  <onex-icon library="boxicons" name="bx-cookie"></onex-icon>
  <onex-icon library="boxicons" name="bx-joystick"></onex-icon>
  <onex-icon library="boxicons" name="bx-save"></onex-icon>
  <onex-icon library="boxicons" name="bx-server"></onex-icon>
  <onex-icon library="boxicons" name="bx-wine"></onex-icon>
  <br />
  <onex-icon library="boxicons" name="bxs-bot"></onex-icon>
  <onex-icon library="boxicons" name="bxs-cookie"></onex-icon>
  <onex-icon library="boxicons" name="bxs-joystick"></onex-icon>
  <onex-icon library="boxicons" name="bxs-save"></onex-icon>
  <onex-icon library="boxicons" name="bxs-server"></onex-icon>
  <onex-icon library="boxicons" name="bxs-wine"></onex-icon>
  <br />
  <onex-icon library="boxicons" name="bxl-apple"></onex-icon>
  <onex-icon library="boxicons" name="bxl-chrome"></onex-icon>
  <onex-icon library="boxicons" name="bxl-edge"></onex-icon>
  <onex-icon library="boxicons" name="bxl-firefox"></onex-icon>
  <onex-icon library="boxicons" name="bxl-opera"></onex-icon>
  <onex-icon library="boxicons" name="bxl-microsoft"></onex-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <onex-icon library="lucide" name="feather"></onex-icon>
  <onex-icon library="lucide" name="pie-chart"></onex-icon>
  <onex-icon library="lucide" name="settings"></onex-icon>
  <onex-icon library="lucide" name="map-pin"></onex-icon>
  <onex-icon library="lucide" name="printer"></onex-icon>
  <onex-icon library="lucide" name="shopping-cart"></onex-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="fa" name="far-bell"></onex-icon>
  <onex-icon library="fa" name="far-comment"></onex-icon>
  <onex-icon library="fa" name="far-hand-point-right"></onex-icon>
  <onex-icon library="fa" name="far-hdd"></onex-icon>
  <onex-icon library="fa" name="far-heart"></onex-icon>
  <onex-icon library="fa" name="far-star"></onex-icon>
  <br />
  <onex-icon library="fa" name="fas-archive"></onex-icon>
  <onex-icon library="fa" name="fas-book"></onex-icon>
  <onex-icon library="fa" name="fas-chess-knight"></onex-icon>
  <onex-icon library="fa" name="fas-dice"></onex-icon>
  <onex-icon library="fa" name="fas-pizza-slice"></onex-icon>
  <onex-icon library="fa" name="fas-scroll"></onex-icon>
  <br />
  <onex-icon library="fa" name="fab-apple"></onex-icon>
  <onex-icon library="fa" name="fab-chrome"></onex-icon>
  <onex-icon library="fa" name="fab-edge"></onex-icon>
  <onex-icon library="fa" name="fab-firefox"></onex-icon>
  <onex-icon library="fa" name="fab-opera"></onex-icon>
  <onex-icon library="fa" name="fab-microsoft"></onex-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="heroicons" name="chat-bubble-left"></onex-icon>
  <onex-icon library="heroicons" name="cloud"></onex-icon>
  <onex-icon library="heroicons" name="cog"></onex-icon>
  <onex-icon library="heroicons" name="document-text"></onex-icon>
  <onex-icon library="heroicons" name="gift"></onex-icon>
  <onex-icon library="heroicons" name="speaker-wave"></onex-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="iconoir" name="check-circled-outline"></onex-icon>
  <onex-icon library="iconoir" name="drawer"></onex-icon>
  <onex-icon library="iconoir" name="keyframes"></onex-icon>
  <onex-icon library="iconoir" name="headset-help"></onex-icon>
  <onex-icon library="iconoir" name="color-picker"></onex-icon>
  <onex-icon library="iconoir" name="wifi"></onex-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="ionicons" name="alarm"></onex-icon>
  <onex-icon library="ionicons" name="american-football"></onex-icon>
  <onex-icon library="ionicons" name="bug"></onex-icon>
  <onex-icon library="ionicons" name="chatbubble"></onex-icon>
  <onex-icon library="ionicons" name="settings"></onex-icon>
  <onex-icon library="ionicons" name="warning"></onex-icon>
  <br />
  <onex-icon library="ionicons" name="alarm-outline"></onex-icon>
  <onex-icon library="ionicons" name="american-football-outline"></onex-icon>
  <onex-icon library="ionicons" name="bug-outline"></onex-icon>
  <onex-icon library="ionicons" name="chatbubble-outline"></onex-icon>
  <onex-icon library="ionicons" name="settings-outline"></onex-icon>
  <onex-icon library="ionicons" name="warning-outline"></onex-icon>
  <br />
  <onex-icon library="ionicons" name="alarm-sharp"></onex-icon>
  <onex-icon library="ionicons" name="american-football-sharp"></onex-icon>
  <onex-icon library="ionicons" name="bug-sharp"></onex-icon>
  <onex-icon library="ionicons" name="chatbubble-sharp"></onex-icon>
  <onex-icon library="ionicons" name="settings-sharp"></onex-icon>
  <onex-icon library="ionicons" name="warning-sharp"></onex-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="jam" name="calendar"></onex-icon>
  <onex-icon library="jam" name="camera"></onex-icon>
  <onex-icon library="jam" name="filter"></onex-icon>
  <onex-icon library="jam" name="leaf"></onex-icon>
  <onex-icon library="jam" name="picture"></onex-icon>
  <onex-icon library="jam" name="set-square"></onex-icon>
  <br />
  <onex-icon library="jam" name="calendar-f"></onex-icon>
  <onex-icon library="jam" name="camera-f"></onex-icon>
  <onex-icon library="jam" name="filter-f"></onex-icon>
  <onex-icon library="jam" name="leaf-f"></onex-icon>
  <onex-icon library="jam" name="picture-f"></onex-icon>
  <onex-icon library="jam" name="set-square-f"></onex-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="material" name="notifications"></onex-icon>
  <onex-icon library="material" name="email"></onex-icon>
  <onex-icon library="material" name="delete"></onex-icon>
  <onex-icon library="material" name="volume_up"></onex-icon>
  <onex-icon library="material" name="settings"></onex-icon>
  <onex-icon library="material" name="shopping_basket"></onex-icon>
  <br />
  <onex-icon library="material" name="notifications_round"></onex-icon>
  <onex-icon library="material" name="email_round"></onex-icon>
  <onex-icon library="material" name="delete_round"></onex-icon>
  <onex-icon library="material" name="volume_up_round"></onex-icon>
  <onex-icon library="material" name="settings_round"></onex-icon>
  <onex-icon library="material" name="shopping_basket_round"></onex-icon>
  <br />
  <onex-icon library="material" name="notifications_sharp"></onex-icon>
  <onex-icon library="material" name="email_sharp"></onex-icon>
  <onex-icon library="material" name="delete_sharp"></onex-icon>
  <onex-icon library="material" name="volume_up_sharp"></onex-icon>
  <onex-icon library="material" name="settings_sharp"></onex-icon>
  <onex-icon library="material" name="shopping_basket_sharp"></onex-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="remixicon" name="business/cloud-line"></onex-icon>
  <onex-icon library="remixicon" name="design/brush-line"></onex-icon>
  <onex-icon library="remixicon" name="business/pie-chart-line"></onex-icon>
  <onex-icon library="remixicon" name="development/bug-line"></onex-icon>
  <onex-icon library="remixicon" name="media/image-line"></onex-icon>
  <onex-icon library="remixicon" name="system/alert-line"></onex-icon>
  <br />
  <onex-icon library="remixicon" name="business/cloud-fill"></onex-icon>
  <onex-icon library="remixicon" name="design/brush-fill"></onex-icon>
  <onex-icon library="remixicon" name="business/pie-chart-fill"></onex-icon>
  <onex-icon library="remixicon" name="development/bug-fill"></onex-icon>
  <onex-icon library="remixicon" name="media/image-fill"></onex-icon>
  <onex-icon library="remixicon" name="system/alert-fill"></onex-icon>
</div>
```

## Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="tabler" name="alert-triangle"></onex-icon>
  <onex-icon library="tabler" name="arrow-back"></onex-icon>
  <onex-icon library="tabler" name="at"></onex-icon>
  <onex-icon library="tabler" name="ball-baseball"></onex-icon>
  <onex-icon library="tabler" name="cake"></onex-icon>
  <onex-icon library="tabler" name="files"></onex-icon>
  <br />
  <onex-icon library="tabler" name="keyboard"></onex-icon>
  <onex-icon library="tabler" name="moon"></onex-icon>
  <onex-icon library="tabler" name="pig"></onex-icon>
  <onex-icon library="tabler" name="printer"></onex-icon>
  <onex-icon library="tabler" name="ship"></onex-icon>
  <onex-icon library="tabler" name="toilet-paper"></onex-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <onex-icon library="unicons" name="clock"></onex-icon>
  <onex-icon library="unicons" name="graph-bar"></onex-icon>
  <onex-icon library="unicons" name="padlock"></onex-icon>
  <onex-icon library="unicons" name="polygon"></onex-icon>
  <onex-icon library="unicons" name="rocket"></onex-icon>
  <onex-icon library="unicons" name="star"></onex-icon>
  <br />
  <onex-icon library="unicons" name="clock-s"></onex-icon>
  <onex-icon library="unicons" name="graph-bar-s"></onex-icon>
  <onex-icon library="unicons" name="padlock-s"></onex-icon>
  <onex-icon library="unicons" name="polygon-s"></onex-icon>
  <onex-icon library="unicons" name="rocket-s"></onex-icon>
  <onex-icon library="unicons" name="star-s"></onex-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<onex-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by Shoelace components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Shoelace uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Shoelace.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('onex-input');
      const select = container.querySelector('onex-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('onex-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('onex-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('onex-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('onex-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('onex-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--onex-panel-border-color);
    border-radius: var(--onex-border-radius-medium);
    padding: var(--onex-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls onex-input {
    flex: 1 1 auto;
  }

  .icon-search-controls onex-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--onex-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--onex-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--onex-color-primary-50);
    color: var(--onex-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls onex-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:onex-icon]
