# Avatar

[component-header:onex-avatar]

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<onex-avatar label="User avatar"></onex-avatar>
```

```jsx react
import { OneXAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.
Avatar images can be lazily loaded by setting the `loading` attribute to `lazy`.

```html preview
<onex-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></onex-avatar>
<onex-avatar
  image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a white and grey kitten on grey textile"
  loading="lazy"
></onex-avatar>
```

```jsx react
import { OneXAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
  <OnexAvatar
    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a white and grey kitten on grey textile"
    loading="lazy"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<onex-avatar initials="SL" label="Avatar with initials: SL"></onex-avatar>
```

```jsx react
import { OneXAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<onex-avatar label="Avatar with an image icon">
  <onex-icon slot="icon" name="image"></onex-icon>
</onex-avatar>

<onex-avatar label="Avatar with an archive icon">
  <onex-icon slot="icon" name="archive"></onex-icon>
</onex-avatar>

<onex-avatar label="Avatar with a briefcase icon">
  <onex-icon slot="icon" name="briefcase"></onex-icon>
</onex-avatar>
```

```jsx react
import { OneXAvatar, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexAvatar label="Avatar with an image icon">
      <OnexIcon slot="icon" name="image" />
    </OneXAvatar>

    <OnexAvatar label="Avatar with an archive icon">
      <OnexIcon slot="icon" name="archive" />
    </OneXAvatar>

    <OnexAvatar label="Avatar with a briefcase icon">
      <OnexIcon slot="icon" name="briefcase" />
    </OneXAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<onex-avatar shape="square" label="Square avatar"></onex-avatar>
<onex-avatar shape="rounded" label="Rounded avatar"></onex-avatar>
<onex-avatar shape="circle" label="Circle avatar"></onex-avatar>
```

```jsx react
import { OneXAvatar, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OnexAvatar shape="square" label="Square avatar" />
    <OnexAvatar shape="rounded" label="Rounded avatar" />
    <OnexAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <onex-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></onex-avatar>

  <onex-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></onex-avatar>

  <onex-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></onex-avatar>

  <onex-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></onex-avatar>
</div>

<style>
  .avatar-group onex-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group onex-avatar::part(base) {
    border: solid 2px var(--onex-color-neutral-0);
  }
</style>
```

```jsx react
import { OneXAvatar, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .avatar-group onex-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group onex-avatar::part(base) {
    border: solid 2px var(--onex-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <OnexAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <OnexAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <OnexAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <OnexAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-avatar]
