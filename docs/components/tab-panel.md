# Tab Panel

[component-header:onex-tab-panel]

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

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:onex-tab-panel]
