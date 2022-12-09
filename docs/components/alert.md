# Alert

[component-header:onex-alert]

```html preview
<onex-alert open>
  <onex-icon slot="icon" name="info-circle"></onex-icon>
  This is a standard alert. You can customize its content and even the icon.
</onex-alert>
```

```jsx react
import { OneXAlert, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXAlert open>
    <OnexIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </OneXAlert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html preview
<onex-alert variant="primary" open>
  <onex-icon slot="icon" name="info-circle"></onex-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</onex-alert>

<br />

<onex-alert variant="success" open>
  <onex-icon slot="icon" name="check2-circle"></onex-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</onex-alert>

<br />

<onex-alert variant="neutral" open>
  <onex-icon slot="icon" name="gear"></onex-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</onex-alert>

<br />

<onex-alert variant="warning" open>
  <onex-icon slot="icon" name="exclamation-triangle"></onex-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</onex-alert>

<br />

<onex-alert variant="danger" open>
  <onex-icon slot="icon" name="exclamation-octagon"></onex-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</onex-alert>
```

```jsx react
import { OneXAlert, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <OneXAlert variant="primary" open>
      <OnexIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </OneXAlert>

    <br />

    <OneXAlert variant="success" open>
      <OnexIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </OneXAlert>

    <br />

    <OneXAlert variant="neutral" open>
      <OnexIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </OneXAlert>

    <br />

    <OneXAlert variant="warning" open>
      <OnexIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </OneXAlert>

    <br />

    <OneXAlert variant="danger" open>
      <OnexIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </OneXAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<onex-alert variant="primary" open closable class="alert-closable">
  <onex-icon slot="icon" name="info-circle"></onex-icon>
  You can close this alert any time!
</onex-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('onex-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { OneXAlert, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <OneXAlert open={open} closable onSlAfterHide={handleHide}>
      <OnexIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </OneXAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<onex-alert variant="primary" open> Nothing fancy here, just a simple alert. </onex-alert>
```

```jsx react
import { OneXAlert } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OneXAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </OneXAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <onex-button variant="primary">Show Alert</onex-button>

  <onex-alert variant="primary" duration="3000" closable>
    <onex-icon slot="icon" name="info-circle"></onex-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </onex-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('onex-button');
  const alert = container.querySelector('onex-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration onex-alert {
    margin-top: var(--onex-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { OneXAlert, OneXButton, OneXIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .alert-duration onex-alert {
    margin-top: var(--onex-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <OnexButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </OneXButton>

        <OneXAlert variant="primary" duration="3000" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <OnexIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </OneXAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <onex-button variant="primary">Primary</onex-button>
  <onex-button variant="success">Success</onex-button>
  <onex-button variant="neutral">Neutral</onex-button>
  <onex-button variant="warning">Warning</onex-button>
  <onex-button variant="danger">Danger</onex-button>

  <onex-alert variant="primary" duration="3000" closable>
    <onex-icon slot="icon" name="info-circle"></onex-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </onex-alert>

  <onex-alert variant="success" duration="3000" closable>
    <onex-icon slot="icon" name="check2-circle"></onex-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </onex-alert>

  <onex-alert variant="neutral" duration="3000" closable>
    <onex-icon slot="icon" name="gear"></onex-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </onex-alert>

  <onex-alert variant="warning" duration="3000" closable>
    <onex-icon slot="icon" name="exclamation-triangle"></onex-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </onex-alert>

  <onex-alert variant="danger" duration="3000" closable>
    <onex-icon slot="icon" name="exclamation-octagon"></onex-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </onex-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`onex-button[variant="${variant}"]`);
    const alert = container.querySelector(`onex-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { OneXAlert, OneXButton, OneXIcon } from '@shoelace-style/shoelace/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <OnexButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </OneXButton>

      <OnexButton variant="success" onClick={() => success.current.toast()}>
        Success
      </OneXButton>

      <OnexButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </OneXButton>

      <OnexButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </OneXButton>

      <OnexButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </OneXButton>

      <OneXAlert ref={primary} variant="primary" duration="3000" closable>
        <OnexIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </OneXAlert>

      <OneXAlert ref={success} variant="success" duration="3000" closable>
        <OnexIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </OneXAlert>

      <OneXAlert ref={neutral} variant="neutral" duration="3000" closable>
        <OnexIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </OneXAlert>

      <OneXAlert ref={warning} variant="warning" duration="3000" closable>
        <OnexIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </OneXAlert>

      <OneXAlert ref={danger} variant="danger" duration="3000" closable>
        <OnexIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </OneXAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <onex-button variant="primary">Create Toast</onex-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('onex-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('onex-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <onex-icon name="${icon}" slot="icon"></onex-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.onex-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.onex-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

[component-metadata:onex-alert]
