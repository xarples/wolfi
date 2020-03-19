# Icons

> Icons take an important role of any application

Wolfi is compatible with [Font Awesome](https://fontawesome.com/icons?d=gallery) which means 600+ more vector icons made for you to use.

## Usage

```html
<w-icon name="address-book" size="xs" />
```

## Examples

<w-icon
  v-for="icon of ['ad', 'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'upload', 'user-edit', 'trash', 'times', 'star', 'seedling', 'redo-alt', 'pager', 'meteor']"
  :name="icon" size="xs"
  :style="{ margin: '1em', display: 'inline-block' }">
<span>
{{ icon }}
</span>
</w-icon>
