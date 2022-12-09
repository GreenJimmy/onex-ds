# Card

[component-header:onex-card]

```html preview
<onex-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <onex-button variant="primary" pill>More Info</onex-button>
    <onex-rating></onex-rating>
  </div>
</onex-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--onex-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { OneXButton, OneXCard, OneXRating } from '@shoelace-style/shoelace/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--onex-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <OnexCard className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <OnexButton variant="primary" pill>
          More Info
        </OneXButton>
        <OnexRating></OneXRating>
      </div>
    </OneXCard>

    <style>{css}</style>
  </>
);
```

## Examples

## Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html preview
<onex-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</onex-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx react
import { OneXCard } from '@shoelace-style/shoelace/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <OnexCard className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </OneXCard>

    <style>{css}</style>
  </>
);
```

## Card with Header

Headers can be used to display titles and more.

```html preview
<onex-card class="card-header">
  <div slot="header">
    Header Title
    <onex-icon-button name="gear" label="Settings"></onex-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</onex-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header onex-icon-button {
    font-size: var(--onex-font-size-medium);
  }
</style>
```

```jsx react
import { OneXCard, OneXIconButton } from '@shoelace-style/shoelace/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header onex-icon-button {
    font-size: var(--onex-font-size-medium);
  }
`;

const App = () => (
  <>
    <OnexCard className="card-header">
      <div slot="header">
        Header Title
        <OnexIconButton name="gear"></OneXIconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </OneXCard>

    <style>{css}</style>
  </>
);
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html preview
<onex-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <onex-rating></onex-rating>
    <onex-button variant="primary">Preview</onex-button>
  </div>
</onex-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { OneXButton, OneXCard, OneXRating } from '@shoelace-style/shoelace/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <OnexCard className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <OnexRating></OneXRating>
        <OnexButton slot="footer" variant="primary">
          Preview
        </OneXButton>
      </div>
    </OneXCard>

    <style>{css}</style>
  </>
);
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html preview
<onex-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</onex-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx react
import { OneXCard } from '@shoelace-style/shoelace/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <OnexCard className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </OneXCard>

    <style>{css}</style>
  </>
);
```

[component-metadata:onex-card]
