# Tab Group

[component-header:onex-tab-group]

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html preview
<onex-tab-group>
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="custom">Custom</onex-tab>
  <onex-tab slot="nav" panel="advanced">Advanced</onex-tab>
  <onex-tab slot="nav" panel="disabled" disabled>Disabled</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="custom">This is the custom tab panel.</onex-tab-panel>
  <onex-tab-panel name="advanced">This is the advanced tab panel.</onex-tab-panel>
  <onex-tab-panel name="disabled">This is a disabled tab panel.</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup>
    <OnexTab slot="nav" panel="general">
      General
    </OneXTab>
    <OnexTab slot="nav" panel="custom">
      Custom
    </OneXTab>
    <OnexTab slot="nav" panel="advanced">
      Advanced
    </OneXTab>
    <OnexTab slot="nav" panel="disabled" disabled>
      Disabled
    </OneXTab>

    <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
    <OnexTabPanel name="custom">This is the custom tab panel.</OneXTabPanel>
    <OnexTabPanel name="advanced">This is the advanced tab panel.</OneXTabPanel>
    <OnexTabPanel name="disabled">This is a disabled tab panel.</OneXTabPanel>
  </OneXTabGroup>
);
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<onex-tab-group placement="bottom">
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="custom">Custom</onex-tab>
  <onex-tab slot="nav" panel="advanced">Advanced</onex-tab>
  <onex-tab slot="nav" panel="disabled" disabled>Disabled</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="custom">This is the custom tab panel.</onex-tab-panel>
  <onex-tab-panel name="advanced">This is the advanced tab panel.</onex-tab-panel>
  <onex-tab-panel name="disabled">This is a disabled tab panel.</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup placement="bottom">
    <OnexTab slot="nav" panel="general">
      General
    </OneXTab>
    <OnexTab slot="nav" panel="custom">
      Custom
    </OneXTab>
    <OnexTab slot="nav" panel="advanced">
      Advanced
    </OneXTab>
    <OnexTab slot="nav" panel="disabled" disabled>
      Disabled
    </OneXTab>

    <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
    <OnexTabPanel name="custom">This is the custom tab panel.</OneXTabPanel>
    <OnexTabPanel name="advanced">This is the advanced tab panel.</OneXTabPanel>
    <OnexTabPanel name="disabled">This is a disabled tab panel.</OneXTabPanel>
  </OneXTabGroup>
);
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<onex-tab-group placement="start">
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="custom">Custom</onex-tab>
  <onex-tab slot="nav" panel="advanced">Advanced</onex-tab>
  <onex-tab slot="nav" panel="disabled" disabled>Disabled</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="custom">This is the custom tab panel.</onex-tab-panel>
  <onex-tab-panel name="advanced">This is the advanced tab panel.</onex-tab-panel>
  <onex-tab-panel name="disabled">This is a disabled tab panel.</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup placement="start">
    <OnexTab slot="nav" panel="general">
      General
    </OneXTab>
    <OnexTab slot="nav" panel="custom">
      Custom
    </OneXTab>
    <OnexTab slot="nav" panel="advanced">
      Advanced
    </OneXTab>
    <OnexTab slot="nav" panel="disabled" disabled>
      Disabled
    </OneXTab>

    <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
    <OnexTabPanel name="custom">This is the custom tab panel.</OneXTabPanel>
    <OnexTabPanel name="advanced">This is the advanced tab panel.</OneXTabPanel>
    <OnexTabPanel name="disabled">This is a disabled tab panel.</OneXTabPanel>
  </OneXTabGroup>
);
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<onex-tab-group placement="end">
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="custom">Custom</onex-tab>
  <onex-tab slot="nav" panel="advanced">Advanced</onex-tab>
  <onex-tab slot="nav" panel="disabled" disabled>Disabled</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="custom">This is the custom tab panel.</onex-tab-panel>
  <onex-tab-panel name="advanced">This is the advanced tab panel.</onex-tab-panel>
  <onex-tab-panel name="disabled">This is a disabled tab panel.</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup placement="end">
    <OnexTab slot="nav" panel="general">
      General
    </OneXTab>
    <OnexTab slot="nav" panel="custom">
      Custom
    </OneXTab>
    <OnexTab slot="nav" panel="advanced">
      Advanced
    </OneXTab>
    <OnexTab slot="nav" panel="disabled" disabled>
      Disabled
    </OneXTab>

    <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
    <OnexTabPanel name="custom">This is the custom tab panel.</OneXTabPanel>
    <OnexTabPanel name="advanced">This is the advanced tab panel.</OneXTabPanel>
    <OnexTabPanel name="disabled">This is a disabled tab panel.</OneXTabPanel>
  </OneXTabGroup>
);
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<onex-tab-group class="tabs-closable">
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="closable-1" closable>Closable 1</onex-tab>
  <onex-tab slot="nav" panel="closable-2" closable>Closable 2</onex-tab>
  <onex-tab slot="nav" panel="closable-3" closable>Closable 3</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="closable-1">This is the first closable tab panel.</onex-tab-panel>
  <onex-tab-panel name="closable-2">This is the second closable tab panel.</onex-tab-panel>
  <onex-tab-panel name="closable-3">This is the third closable tab panel.</onex-tab-panel>
</onex-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('onex-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`onex-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('onex-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <OnexTabGroup className="tabs-closable" onSlClose={handleClose}>
      <OnexTab slot="nav" panel="general">
        General
      </OneXTab>
      <OnexTab slot="nav" panel="closable-1" closable onSlClose={handleClose}>
        Closable 1
      </OneXTab>
      <OnexTab slot="nav" panel="closable-2" closable onSlClose={handleClose}>
        Closable 2
      </OneXTab>
      <OnexTab slot="nav" panel="closable-3" closable onSlClose={handleClose}>
        Closable 3
      </OneXTab>

      <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
      <OnexTabPanel name="closable-1">This is the first closable tab panel.</OneXTabPanel>
      <OnexTabPanel name="closable-2">This is the second closable tab panel.</OneXTabPanel>
      <OnexTabPanel name="closable-3">This is the third closable tab panel.</OneXTabPanel>
    </OneXTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<onex-tab-group>
  <onex-tab slot="nav" panel="tab-1">Tab 1</onex-tab>
  <onex-tab slot="nav" panel="tab-2">Tab 2</onex-tab>
  <onex-tab slot="nav" panel="tab-3">Tab 3</onex-tab>
  <onex-tab slot="nav" panel="tab-4">Tab 4</onex-tab>
  <onex-tab slot="nav" panel="tab-5">Tab 5</onex-tab>
  <onex-tab slot="nav" panel="tab-6">Tab 6</onex-tab>
  <onex-tab slot="nav" panel="tab-7">Tab 7</onex-tab>
  <onex-tab slot="nav" panel="tab-8">Tab 8</onex-tab>
  <onex-tab slot="nav" panel="tab-9">Tab 9</onex-tab>
  <onex-tab slot="nav" panel="tab-10">Tab 10</onex-tab>
  <onex-tab slot="nav" panel="tab-11">Tab 11</onex-tab>
  <onex-tab slot="nav" panel="tab-12">Tab 12</onex-tab>
  <onex-tab slot="nav" panel="tab-13">Tab 13</onex-tab>
  <onex-tab slot="nav" panel="tab-14">Tab 14</onex-tab>
  <onex-tab slot="nav" panel="tab-15">Tab 15</onex-tab>
  <onex-tab slot="nav" panel="tab-16">Tab 16</onex-tab>
  <onex-tab slot="nav" panel="tab-17">Tab 17</onex-tab>
  <onex-tab slot="nav" panel="tab-18">Tab 18</onex-tab>
  <onex-tab slot="nav" panel="tab-19">Tab 19</onex-tab>
  <onex-tab slot="nav" panel="tab-20">Tab 20</onex-tab>

  <onex-tab-panel name="tab-1">Tab panel 1</onex-tab-panel>
  <onex-tab-panel name="tab-2">Tab panel 2</onex-tab-panel>
  <onex-tab-panel name="tab-3">Tab panel 3</onex-tab-panel>
  <onex-tab-panel name="tab-4">Tab panel 4</onex-tab-panel>
  <onex-tab-panel name="tab-5">Tab panel 5</onex-tab-panel>
  <onex-tab-panel name="tab-6">Tab panel 6</onex-tab-panel>
  <onex-tab-panel name="tab-7">Tab panel 7</onex-tab-panel>
  <onex-tab-panel name="tab-8">Tab panel 8</onex-tab-panel>
  <onex-tab-panel name="tab-9">Tab panel 9</onex-tab-panel>
  <onex-tab-panel name="tab-10">Tab panel 10</onex-tab-panel>
  <onex-tab-panel name="tab-11">Tab panel 11</onex-tab-panel>
  <onex-tab-panel name="tab-12">Tab panel 12</onex-tab-panel>
  <onex-tab-panel name="tab-13">Tab panel 13</onex-tab-panel>
  <onex-tab-panel name="tab-14">Tab panel 14</onex-tab-panel>
  <onex-tab-panel name="tab-15">Tab panel 15</onex-tab-panel>
  <onex-tab-panel name="tab-16">Tab panel 16</onex-tab-panel>
  <onex-tab-panel name="tab-17">Tab panel 17</onex-tab-panel>
  <onex-tab-panel name="tab-18">Tab panel 18</onex-tab-panel>
  <onex-tab-panel name="tab-19">Tab panel 19</onex-tab-panel>
  <onex-tab-panel name="tab-20">Tab panel 20</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup>
    <OnexTab slot="nav" panel="tab-1">
      Tab 1
    </OneXTab>
    <OnexTab slot="nav" panel="tab-2">
      Tab 2
    </OneXTab>
    <OnexTab slot="nav" panel="tab-3">
      Tab 3
    </OneXTab>
    <OnexTab slot="nav" panel="tab-4">
      Tab 4
    </OneXTab>
    <OnexTab slot="nav" panel="tab-5">
      Tab 5
    </OneXTab>
    <OnexTab slot="nav" panel="tab-6">
      Tab 6
    </OneXTab>
    <OnexTab slot="nav" panel="tab-7">
      Tab 7
    </OneXTab>
    <OnexTab slot="nav" panel="tab-8">
      Tab 8
    </OneXTab>
    <OnexTab slot="nav" panel="tab-9">
      Tab 9
    </OneXTab>
    <OnexTab slot="nav" panel="tab-10">
      Tab 10
    </OneXTab>
    <OnexTab slot="nav" panel="tab-11">
      Tab 11
    </OneXTab>
    <OnexTab slot="nav" panel="tab-12">
      Tab 12
    </OneXTab>
    <OnexTab slot="nav" panel="tab-13">
      Tab 13
    </OneXTab>
    <OnexTab slot="nav" panel="tab-14">
      Tab 14
    </OneXTab>
    <OnexTab slot="nav" panel="tab-15">
      Tab 15
    </OneXTab>
    <OnexTab slot="nav" panel="tab-16">
      Tab 16
    </OneXTab>
    <OnexTab slot="nav" panel="tab-17">
      Tab 17
    </OneXTab>
    <OnexTab slot="nav" panel="tab-18">
      Tab 18
    </OneXTab>
    <OnexTab slot="nav" panel="tab-19">
      Tab 19
    </OneXTab>
    <OnexTab slot="nav" panel="tab-20">
      Tab 20
    </OneXTab>

    <OnexTabPanel name="tab-1">Tab panel 1</OneXTabPanel>
    <OnexTabPanel name="tab-2">Tab panel 2</OneXTabPanel>
    <OnexTabPanel name="tab-3">Tab panel 3</OneXTabPanel>
    <OnexTabPanel name="tab-4">Tab panel 4</OneXTabPanel>
    <OnexTabPanel name="tab-5">Tab panel 5</OneXTabPanel>
    <OnexTabPanel name="tab-6">Tab panel 6</OneXTabPanel>
    <OnexTabPanel name="tab-7">Tab panel 7</OneXTabPanel>
    <OnexTabPanel name="tab-8">Tab panel 8</OneXTabPanel>
    <OnexTabPanel name="tab-9">Tab panel 9</OneXTabPanel>
    <OnexTabPanel name="tab-10">Tab panel 10</OneXTabPanel>
    <OnexTabPanel name="tab-11">Tab panel 11</OneXTabPanel>
    <OnexTabPanel name="tab-12">Tab panel 12</OneXTabPanel>
    <OnexTabPanel name="tab-13">Tab panel 13</OneXTabPanel>
    <OnexTabPanel name="tab-14">Tab panel 14</OneXTabPanel>
    <OnexTabPanel name="tab-15">Tab panel 15</OneXTabPanel>
    <OnexTabPanel name="tab-16">Tab panel 16</OneXTabPanel>
    <OnexTabPanel name="tab-17">Tab panel 17</OneXTabPanel>
    <OnexTabPanel name="tab-18">Tab panel 18</OneXTabPanel>
    <OnexTabPanel name="tab-19">Tab panel 19</OneXTabPanel>
    <OnexTabPanel name="tab-20">Tab panel 20</OneXTabPanel>
  </OneXTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<onex-tab-group activation="manual">
  <onex-tab slot="nav" panel="general">General</onex-tab>
  <onex-tab slot="nav" panel="custom">Custom</onex-tab>
  <onex-tab slot="nav" panel="advanced">Advanced</onex-tab>
  <onex-tab slot="nav" panel="disabled" disabled>Disabled</onex-tab>

  <onex-tab-panel name="general">This is the general tab panel.</onex-tab-panel>
  <onex-tab-panel name="custom">This is the custom tab panel.</onex-tab-panel>
  <onex-tab-panel name="advanced">This is the advanced tab panel.</onex-tab-panel>
  <onex-tab-panel name="disabled">This is a disabled tab panel.</onex-tab-panel>
</onex-tab-group>
```

```jsx react
import { OneXTab, OneXTabGroup, OneXTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexTabGroup activation="manual">
    <OnexTab slot="nav" panel="general">
      General
    </OneXTab>
    <OnexTab slot="nav" panel="custom">
      Custom
    </OneXTab>
    <OnexTab slot="nav" panel="advanced">
      Advanced
    </OneXTab>
    <OnexTab slot="nav" panel="disabled" disabled>
      Disabled
    </OneXTab>

    <OnexTabPanel name="general">This is the general tab panel.</OneXTabPanel>
    <OnexTabPanel name="custom">This is the custom tab panel.</OneXTabPanel>
    <OnexTabPanel name="advanced">This is the advanced tab panel.</OneXTabPanel>
    <OnexTabPanel name="disabled">This is a disabled tab panel.</OneXTabPanel>
  </OneXTabGroup>
);
```

[component-metadata:onex-tab-group]
