---
description: ""
sidebar: "docs"
next: "/docs/essentials/icons/"
---

# Grid system

> Use the powerful mobile-first flexbox grid (via the **w-grid-container**, **w-grid-row** and **w-grid-col** components) to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers.

## How it works

Wolfi's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

<br/>
<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices.

### w-grid-container

Containers (**w-grid-container**) are the most basic layout element in Wolfi. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) by default, or fluid-width (meaning it's 100% wide all the time) by setting 'fluid' prop, or responsive containers where the container is fluid up until a specific breakpoint.

```html
// Default container
<w-grid-container>
  ...
</w-grid-container>

// or fluid container with 100% of width

<w-grid-container fluid>
  ...
</w-grid-container>
```

<br/>

### w-grid-row

Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.

You can remove the margin from **w-grid-row** and padding from **w-grid-column** by setting the no-gutters prop on **w-grid-row**.

### w-grid-column

**w-grid-column** Must be placed inside a **w-grid-row** component (to obtain columns with more compact margins).

<br/>

## Examples

### Auto columns

Utilize breakpoint-specific column for easy column sizing without an explicit numbered prop.

<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

### Auto columns and with size

Auto-layout for flexbox grid columns also means you can set the width of any columns and have the sibling columns automatically resize around it.

<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column cols="3" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column cols="3" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column
      cols="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column
      cols="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

### With the width of their content.

Auto-layout for flexbox grid columns also means you can set the width of any columns and have the sibling columns automatically resize around it.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column cols="3" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column cols="3" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row>
    <w-grid-column
      cols="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column
      cols="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

### Responsive

Wolfi's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

#### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the col and cols="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column cols="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column cols="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column cols="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      cols="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      cols="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      cols="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

#### Small breakpoints

For grids that are the same from the smallest of devices to the largest, use the col and sm="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column sm="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column sm="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column sm="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      sm="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      sm="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      sm="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

#### Medium breakpoints

For grids that are the same from the medium of devices to the largest, use the col and md="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column md="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column md="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column md="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      md="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      md="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      md="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

#### Large breakpoints

For grids that are the same from the large of devices to the largest, use the col and lg="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column lg="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column lg="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column lg="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      lg="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      lg="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      lg="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

#### Largest breakpoints

For grids that are the same from the largest of devices, use the col and xl="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

#### Mix of breakpoints

For grids that are the same from the largest of devices, use the col and xl="\*" props.

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column sm="12" xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column sm="12" xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column sm="12" xl="4" :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container><br/>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      sm="12"
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      sm="12"
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      sm="12"
      xl="4"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Horizontal align

<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>

```html
<w-grid-container fluid>
  <w-grid-row horizontal-align="center">
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br/>

### Vertical align

<w-grid-container fluid>
  <w-grid-row horizontal-align="center" vertical-align="bottom" :style="{ height: '100px', border: '1px solid silver' }">
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
    <w-grid-column
      auto
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>

```html
<w-grid-container fluid>
  <w-grid-row
    horizontal-align="center"
    vertical-align="bottom"
    :style="{ height: '100px', border: '1px solid silver' }"
  >
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
    <w-grid-column auto :style="{ border: '1px solid silver', padding: '1em' }">
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

<br />

## Offsetting columns

You can offset grid columns with our responsive offset-\* props.

<w-grid-container fluid>
  <w-grid-row :style="{ height: '100px', border: '1px solid silver' }">
    <w-grid-column
      :offset="6"
      :offset-lg="9"
      :sm="6"
      :lg="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>

```html
<w-grid-container fluid>
  <w-grid-row :style="{ height: '100px', border: '1px solid silver' }">
    <w-grid-column
      :offset="6"
      :offset-lg="9"
      :sm="6"
      :lg="3"
      :style="{ border: '1px solid silver', padding: '1em' }"
    >
      Column
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```
