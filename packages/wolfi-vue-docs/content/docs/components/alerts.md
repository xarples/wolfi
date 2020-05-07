---
description: ""
sidebar: "docs"
next: "/docs/components/badges/"
---

# Alerts

> Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Default

Alerts are available for any length of text, as well as an optional dismiss button.

<w-alert color="primary">This is a primary alert!</w-alert><br>
<w-alert color="info">This is a info alert!</w-alert><br>
<w-alert color="success">This is a success alert!</w-alert><br>
<w-alert color="danger">This is a danger alert!</w-alert><br>
<w-alert color="warning">This is a warning alert!</w-alert><br>
<w-alert color="secondary">This is a secondary alert!</w-alert><br>

```html
<w-alert color="primary">This is a primary alert!</w-alert>
<w-alert color="info">This is a info alert!</w-alert>
<w-alert color="success">This is a success alert!</w-alert>
<w-alert color="danger">This is a danger alert!</w-alert>
<w-alert color="warning">This is a warning alert!</w-alert>
<w-alert color="secondary">This is a secondary alert!</w-alert>
```

<br/>

## States

### With icon

<w-alert icon="address-card" color="primary">This is a primary alert!</w-alert><br>
<w-alert icon="address-card" color="info">This is a info alert!</w-alert><br>
<w-alert icon="address-card" color="success">This is a success alert!</w-alert><br>
<w-alert icon="address-card" color="danger">This is a danger alert!</w-alert><br>
<w-alert icon="address-card" color="warning">This is a warning alert!</w-alert><br>
<w-alert icon="address-card" color="secondary">This is a secondary alert!</w-alert><br>

```html
<w-alert icon="address-card" color="primary">This is a primary alert!</w-alert>
<w-alert icon="address-card" color="info">This is a info alert!</w-alert>
<w-alert icon="address-card" color="success">This is a success alert!</w-alert>
<w-alert icon="address-card" color="danger">This is a danger alert!</w-alert>
<w-alert icon="address-card" color="warning">This is a warning alert!</w-alert>
<w-alert icon="address-card" color="secondary">
  This is a secondary alert!
</w-alert>
```

<br/>

### Dismissible

<w-alert icon="address-card" dismissible color="primary">This is a primary alert!</w-alert><br>

```html
<w-alert icon="address-card" dismissible color="primary">
  This is a primary alert!
</w-alert>
```

<br/>

## API

### Properties

| Name        | Description | Type    | Value                                                      |
| ----------- | ----------- | ------- | ---------------------------------------------------------- |
| color       |             | String  | primary, info, success, danger, warning default, secondary |
| dismissible |             | Boolean | false                                                      |
| icon        |             | String  |                                                            |
