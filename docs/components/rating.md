# Rating

[component-header:onex-rating]

```html preview
<onex-rating label="Rating"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" />;
```

## Examples

### Labels

Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.

```html preview
<onex-rating label="Rate this component"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rate this component" />;
```

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<onex-rating label="Rating" max="3"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<onex-rating label="Rating" precision="0.5" value="2.5"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" precision={0.5} value={2.5} />;
```

## Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<onex-rating label="Rating" style="--symbol-size: 2rem;"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" style={{ '--symbol-size': '2rem' }} />;
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<onex-rating label="Rating" readonly value="3"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<onex-rating label="Rating" disabled value="3"></onex-rating>
```

```jsx react
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <OnexRating label="Rating" disabled value={3} />;
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html preview
<onex-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></onex-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<onex-icon name="heart-fill"></onex-icon>';
</script>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon';
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <OnexRating
    label="Rating"
    getSymbol={() => '<onex-icon name="heart-fill"></onex-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html preview
<onex-rating label="Rating" class="rating-emojis"></onex-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<onex-icon name="${icons[value - 1]}"></onex-icon>`;
  };
</script>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon';
import { OneXRating } from '@shoelace-style/shoelace/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<onex-icon name="${icons[value - 1]}"></onex-icon>`;
}

const App = () => <OnexRating label="Rating" getSymbol={getSymbol} />;
```

[component-metadata:onex-rating]
