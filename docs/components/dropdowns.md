# Dropdowns

> Toggle contextual overlays for displaying lists of links and more.

### With a text trigger

<w-dropdown :style="{ marginBottom: '6em' }">
  <w-dropdown-trigger>Click me</w-dropdown-trigger>
  <w-dropdown-list>
  <w-dropdown-item v-for="item of ['One', 'Two', 'Three']">{{ item }}</w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

### With a custom content

<w-dropdown :style="{ marginBottom: '6em' }">
  <w-dropdown-trigger>Click me</w-dropdown-trigger>
  <w-dropdown-list>
  <w-dropdown-item>
  <w-button block :style="{ width: '300px' }">Click me</w-button>
  </w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

### With a button trigger

<w-dropdown :style="{ marginBottom: '6em' }">
  <w-dropdown-trigger>
  <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list>
  <w-dropdown-item v-for="item of ['One', 'Two', 'Three']">{{ item }}</w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

### Align to right

<w-dropdown>
  <w-dropdown-trigger>
  <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list align="right">
  <w-dropdown-item v-for="item of ['One', 'Two', 'Three']">{{ item }}</w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>
