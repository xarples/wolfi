---
description: ""
sidebar: "docs"
next: "/docs/components/forms/"
---

# Dropdowns

> Toggle contextual overlays for displaying lists of links and more.

### With a button trigger

<w-dropdown>
  <w-dropdown-trigger>
  <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list>
  <w-dropdown-item v-for="item of ['One', 'Two', 'Three']">{{ item }}</w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

```html
<w-dropdown>
  <w-dropdown-trigger>
    <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list>
    <w-dropdown-item v-for="item of ['One', 'Two', 'Three']"
      >{{ item }}</w-dropdown-item
    >
  </w-dropdown-list>
</w-dropdown>
```

<br/>

### Align to right

<w-dropdown>
  <w-dropdown-trigger>
  <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list align="right">
  <w-dropdown-item v-for="item of ['One', 'Two', 'Three']">{{ item }}</w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

```html
<w-dropdown>
  <w-dropdown-trigger>
    <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list align="right">
    <w-dropdown-item v-for="item of ['One', 'Two', 'Three']"
      >{{ item }}</w-dropdown-item
    >
  </w-dropdown-list>
</w-dropdown>
```

<br/>

### With a custom content

<w-dropdown>
  <w-dropdown-trigger>
   <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list :style="{ width: '350px' }">
    <w-spacer />
    <w-grid-row>
      <w-grid-column>
        <w-text align="center">
          <strong>Guillermo Lopez</strong>
        </w-text>
      </w-grid-column>
    </w-grid-row>
    <w-grid-row>
      <w-grid-column>
        <w-text align="center">guillermolopez2529@gmail.com</w-text>
      </w-grid-column>
    </w-grid-row>
    <w-spacer size="2x" />
    <w-divider></w-divider>
    <w-dropdown-item>
      <w-text align="center">Manage your Xarples Account</w-text>
    </w-dropdown-item>
    <w-divider></w-divider>
    <w-dropdown-item>
      <w-text align="center">Sign out</w-text>
    </w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>

```html
<w-dropdown>
  <w-dropdown-trigger>
    <w-button>Click me</w-button>
  </w-dropdown-trigger>
  <w-dropdown-list :style="{ width: '350px' }">
    <w-spacer />
    <w-grid-row>
      <w-grid-column>
        <w-text align="center">
          <strong>Guillermo Lopez</strong>
        </w-text>
      </w-grid-column>
    </w-grid-row>
    <w-grid-row>
      <w-grid-column>
        <w-text align="center">guillermolopez2529@gmail.com</w-text>
      </w-grid-column>
    </w-grid-row>
    <w-spacer size="2x" />
    <w-divider></w-divider>
    <w-dropdown-item>
      <w-text align="center">Manage your Xarples Account</w-text>
    </w-dropdown-item>
    <w-divider></w-divider>
    <w-dropdown-item>
      <w-text align="center">Sign out</w-text>
    </w-dropdown-item>
  </w-dropdown-list>
</w-dropdown>
```
