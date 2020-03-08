# Card

> Cards provide a flexible and extensible content container with multiple variants and options.

## Content types

### Blog cards

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

<div :style="{ display: 'flex' }">
<w-card :style="{ marginRight: '1em', width: '320px' }">
  <w-card-image src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p2.svg" />
  <w-card-body>
  <w-card-category icon="address-card">Features</w-card-category>
  <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
  <w-card-description>Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>
<w-card :style="{ marginRight: '1em', width: '320px' }">
  <w-card-image variant="skew" color="gray1" src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p2.svg" />
  <w-card-body>
  <w-card-category icon="address-card">Features</w-card-category>
  <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
  <w-card-description>Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>
</div>

<div :style="{ display: 'flex' }">
<w-card :style="{ marginRight: '1em', width: '320px' }">
  <w-card-image variant="pattern" src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p2.svg" />
  <w-card-body>
  <w-card-category icon="address-card">Features</w-card-category>
  <w-card-title color="primary">FiftyThree Files For Paper</w-card-title>
  <w-card-description>Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text">Jhon doe</w-text>
  </w-card-footer>
</w-card>

<w-card color="primary" :style="{ width: '320px' }">
  <w-card-image variant="pattern" src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p2.svg" />
  <w-card-body>
  <w-card-category color="white" icon="address-card">Features</w-card-category>
  <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
  <w-card-description color="white">Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
  <w-card-footer>
    <w-text variant="text" color="white">Jhon doe</w-text>
  </w-card-footer>
</w-card>
</div>

<div :style="{ display: 'flex' }">
<w-card color="primary" :style="{ marginRight: '1em', width: '320px' }">
  <w-card-body>
  <w-card-category color="white" icon="address-card">Features</w-card-category>
  <w-card-title color="white">FiftyThree Files For Paper</w-card-title>
  <w-card-description color="white">Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-card-description>
  </w-card-body>
   <w-card-image src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p51.svg" />
</w-card>

<w-card color="primary" :style="{ width: '320px' }">
  <w-card-image variant="pattern" src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/p51.svg" />
  <w-card-body>
  <w-card-category color="white" icon="address-card">Features</w-card-category>
  <w-text variant="display4"color="white">FiftyThree Files For Paper</w-text>
  <w-text variant="lead" color="white">Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</w-text>
  </w-card-body>
</w-card>
</div>

### Body

The building block of a card is the body. Use it whenever you need a padded section within a card.

<w-card>
  <w-card-body>
  <w-text variant="display4">FiftyThree Files For Paper</w-text>
  </w-card-body>
</w-card>
</div>
