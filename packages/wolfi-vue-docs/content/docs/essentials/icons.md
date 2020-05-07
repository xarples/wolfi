---
description: ""
sidebar: "docs"
next: "/docs/customization/typography/"
---

# Icons

> Icons take an important role of any application

## FontAwesome

Wolfi is compatible with [Font Awesome](https://fontawesome.com/icons?d=gallery) which means 600+ more vector icons made for you to use you have too include this tag on your html head tag.

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
/>
```

<br>

> Refer to its documentation for latest release / CDN.

> Please note that Wolfi doesn't include icon packs. You have to import it as you prefer (NPM, CDN, etc.).

<br>

### Usage

```html
<w-icon name="address-book" />
```

<br>

### Examples

<w-icon
  v-for="icon of ['ad', 'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'upload', 'user-edit', 'trash', 'times', 'star', 'seedling', 'redo-alt', 'pager', 'meteor']"
  :name="icon"
  size="1x"
  :key="icon"
  :style="{ margin: '1em', display: 'inline-block' }">
<span>
{{ icon }}
</span>
</w-icon>
