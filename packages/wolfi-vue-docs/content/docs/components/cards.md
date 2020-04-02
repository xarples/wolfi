---
description: ""
sidebar: "docs"
next: "/docs/components/collapse/"
---

# Cards

> Cards provide a flexible and extensible content container with multiple variants and options.

## Examples

### Default

<w-card :style="{ width: '320px' }">
  <w-card-image color="white" src="https://via.placeholder.com/320x180" />
  <w-card-body>
    <w-card-title>Card title</w-card-title>
    <w-card-description>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </w-card-description>
    <w-button>Get started</w-button>
  </w-card-body>
</w-card>

```html
<w-card>
  <w-card-image color="white" src="https://via.placeholder.com/320x180" />
  <w-card-body>
    <w-card-title>Card title</w-card-title>
    <w-card-description>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </w-card-description>
    <w-button>Get started</w-button>
  </w-card-body>
</w-card>
```

<br/>

### With skew

<w-card :style="{ width: '320px' }">
  <w-card-image variant="skew" color="gray1" src="https://via.placeholder.com/320x240" />
  <w-card-body>
  <w-card-category icon="address-card">Features</w-card-category>
  <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
  <w-card-description>Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>

```html
<w-card>
  <w-card-image
    variant="skew"
    color="gray1"
    src="https://via.placeholder.com/320x240"
  />
  <w-card-body>
    <w-card-category icon="address-card">Features</w-card-category>
    <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
    <w-card-description
      >Yesterday, as Facebook launched its news reader app Paper, design-focused
      startup FiftyThree called out Facebook...</w-card-description
    >
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>
```

<br/>

### With pattern

<w-card :style="{ width: '320px' }">
  <w-card-image variant="pattern" src="https://via.placeholder.com/320x180" />
  <w-card-body>
    <w-card-category icon="address-card">Features</w-card-category>
    <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
    <w-card-description>
      Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out   Facebook...
    </w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>

```html
<w-card>
  <w-card-image variant="pattern" src="https://via.placeholder.com/320x180" />
  <w-card-body>
    <w-card-category icon="address-card">Features</w-card-category>
    <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
    <w-card-description>
      Yesterday, as Facebook launched its news reader app Paper, design-focused
      startup FiftyThree called out Facebook...
    </w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>
```

<br/>

### With background color

<w-card color="primary" :style="{ width: '320px' }">
  <w-card-body>
  <w-card-category color="white" icon="address-card">Features</w-card-category>
  <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
  <w-card-description color="white">Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
  </w-card-footer>
</w-card>

```html
<w-card color="primary">
  <w-card-body>
    <w-card-category color="white" icon="address-card"
      >Features</w-card-category
    >
    <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
    <w-card-description color="white"
      >Yesterday, as Facebook launched its news reader app Paper, design-focused
      startup FiftyThree called out Facebook...</w-card-description
    >
  </w-card-body>
  <w-card-footer> </w-card-footer>
</w-card>
```

<br/>

### With image on bottom

<w-card color="primary" :style="{ width: '320px' }">
  <w-card-body>
  <w-card-category color="white" icon="address-card">Features</w-card-category>
  <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
  <w-card-description color="white">Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
   <w-card-image src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p51.svg" />
</w-card>

```html
<w-card color="primary">
  <w-card-body>
    <w-card-category color="white" icon="address-card"
      >Features</w-card-category
    >
    <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
    <w-card-description color="white"
      >Yesterday, as Facebook launched its news reader app Paper, design-focused
      startup FiftyThree called out Facebook...</w-card-description
    >
  </w-card-body>
  <w-card-image
    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p51.svg"
  />
</w-card>
```
