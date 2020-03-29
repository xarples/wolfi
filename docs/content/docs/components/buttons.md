---
description: ""
sidebar: "docs"
next: "/docs/components/cards/"
---

# Buttons

> Use buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Variants

### Default

<w-button>Click me</w-button>
<w-button color="info">Click me</w-button>
<w-button color="success">Click me</w-button>
<w-button color="danger">Click me</w-button>
<w-button color="warning">Click me</w-button>
<w-button color="secondary">Click me</w-button>

```html
<w-button>Click me</w-button>
<w-button color="info">Click me</w-button>
<w-button color="success">Click me</w-button>
<w-button color="danger">Click me</w-button>
<w-button color="warning">Click me</w-button>
<w-button color="secondary">Click me</w-button>
```

<br/>

### Outlined

<w-button variant="outlined">Click me</w-button>
<w-button variant="outlined" color="info">Click me</w-button>
<w-button variant="outlined" color="success">Click me</w-button>
<w-button variant="outlined" color="danger">Click me</w-button>
<w-button variant="outlined" color="warning">Click me</w-button>
<w-button variant="outlined" color="secondary">Click me</w-button>

```html
<w-button variant="outlined">Click me</w-button>
<w-button variant="outlined" color="info">Click me</w-button>
<w-button variant="outlined" color="success">Click me</w-button>
<w-button variant="outlined" color="danger">Click me</w-button>
<w-button variant="outlined" color="warning">Click me</w-button>
<w-button variant="outlined" color="secondary">Click me</w-button>
```

<br/>

### Text

<w-button variant="text">Click me</w-button>
<w-button variant="text" color="info">Click me</w-button>
<w-button variant="text" color="success">Click me</w-button>
<w-button variant="text" color="danger">Click me</w-button>
<w-button variant="text" color="warning">Click me</w-button>
<w-button variant="text" color="secondary">Click me</w-button>

```html
<w-button variant="text">Click me</w-button>
<w-button variant="text" color="info">Click me</w-button>
<w-button variant="text" color="success">Click me</w-button>
<w-button variant="text" color="danger">Click me</w-button>
<w-button variant="text" color="warning">Click me</w-button>
<w-button variant="text" color="secondary">Click me</w-button>
```

<br/>

## States

### Sizes

<w-button size="sm" :style="{ marginRight: '1em' }">Click me</w-button>
<w-button :style="{ marginRight: '1em' }">Click me</w-button>
<w-button size="lg">Click me</w-button>

```html
<w-button size="sm">Click me</w-button>
<w-button>Click me</w-button>
<w-button size="lg">Click me</w-button>
```

<br/>

### With icon

In need of a icon button, add the class icon prop to make it.

<w-button icon="address-card">Click me</w-button>

```html
<w-button icon="address-card">Click me</w-button>
```

<br />

### Rounded

Create block level buttons—those that span the full width of a parent—by adding the block prop

<w-button rounded>Click me</w-button>
<w-button rounded variant="outlined" color="primary">Click me</w-button>

```html
<w-button rounded>Click me</w-button>
<w-button rounded variant="outlined" color="primary">Click me</w-button>
```

<br/>

### Block

Create block level buttons—those that span the full width of a parent—by adding the block prop

<w-button block>Click me</w-button>
<w-button block color="secondary">Click me</w-button>

```html
<w-button block>Click me</w-button>
<w-button block color="secondary">Click me</w-button>
```

<br/>

### Disabled

Make buttons look inactive by adding the disabled boolean attribute to the component

<w-button disabled>Click me</w-button>

```html
<w-button disabled>Click me</w-button>
```
