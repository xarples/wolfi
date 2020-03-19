# Grid system

> Use the powerful mobile-first flexbox grid (via the "w-grid-container, w-grid-row and w-grid-column components) to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, CSS Sass variables and mixins, and dozens of predefined classes.

## How it works

Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

<w-grid-container>
  <w-grid-row>
  <w-grid-column :cols="4" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

```html
<w-grid-container>
  <w-grid-row>
    <w-grid-column :cols="4" v-for="i of [1,2,3]">
      <w-card>
        <w-card-body>One of three columns</w-card-body>
      </w-card>
    </w-grid-column>
  </w-grid-row>
</w-grid-container>
```

The above example creates three equal-width columns on small, medium, large, and extra large.

## Grid options

While Bootstrap uses em or rem units for defining most sizes, pxs are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<w-table>
<w-table-header>
<w-table-row>
<w-table-header-cell></w-table-header-cell>
<w-table-header-cell>Extra small (xs)</w-table-header-cell>
<w-table-header-cell>Small (sm)</w-table-header-cell>
<w-table-header-cell>Medium (md)</w-table-header-cell>
<w-table-header-cell>Large (lg)</w-table-header-cell>
<w-table-header-cell>Extra large (xl)</w-table-header-cell>
</w-table-row>
</w-table-header>
<w-table-body>
<w-table-row>
<w-table-body-cell>Prop</w-table-body-cell>
<w-table-body-cell>cols="*"</w-table-body-cell>
<w-table-body-cell>sm="*"</w-table-body-cell>
<w-table-body-cell>md="*"</w-table-body-cell>
<w-table-body-cell>lg="*"</w-table-body-cell>
<w-table-body-cell>xl="*"</w-table-body-cell>
</w-table-row>
<w-table-row>
<w-table-body-cell># of columns	</w-table-body-cell>
<w-table-body-cell>12</w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
</w-table-row>
<w-table-row>
<w-table-body-cell>Gutter width</w-table-body-cell>
<w-table-body-cell>30px</w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
<w-table-body-cell></w-table-body-cell>
</w-table-row>
<w-table-row>
<w-table-body-cell>Offset</w-table-body-cell>
<w-table-body-cell>offset="*"</w-table-body-cell>
<w-table-body-cell>offset-sm="*"</w-table-body-cell>
<w-table-body-cell>offset-md="*"</w-table-body-cell>
<w-table-body-cell>offset-lg="*"</w-table-body-cell>
<w-table-body-cell>offset-xl="*"</w-table-body-cell>
</w-table-row>
</w-table-body>
</w-table>

## Containers

Containers (w-grid-container) are the most basic layout element in Bootstrap. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) by default, or fluid-width (meaning it's 100% wide all the time) by setting 'fluid' prop, or responsive containers where the container is fluid up until a specific breakpoint.

While containers can be nested, most layouts do not require a nested container.

### Default container

The default w-grid-container> is a responsive, fixed-width container, meaning its max-width changes at each viewport width breakpoint.

```html
<w-grid-container>
  <!-- Content here -->
</w-grid-container>
```

### Fluid container

Using the fluid prop on w-grid-container will render a container that is always 100% width, regardless of viewport breakpoint.

```html
<w-grid-container fluid>
  <!-- Content here -->
</w-grid-container>
```

## Rows

Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.

You can remove the margin from w-grid-row and padding from w-grid-column by setting the no-gutters prop on w-grid-row.

## Columns

w-grid-column Must be placed inside a w-grid-row component.

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered prop.

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment

Top

<w-grid-container>
  <w-grid-row vertical-align="top" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="4" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

Center

<w-grid-container>
  <w-grid-row vertical-align="center" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="4" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

Bottom

<w-grid-container>
  <w-grid-row vertical-align="bottom" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="4" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

### Horizontal alignment

Left

<w-grid-container>
  <w-grid-row horizontal-align="left" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="2" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

Center

<w-grid-container>
  <w-grid-row horizontal-align="center" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="2" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

Right

<w-grid-container>
  <w-grid-row horizontal-align="right" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="2" v-for="i of [1,2,3]">
  <w-card>
  <w-card-body>One of three columns</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

## Offsetting columns

You can offset grid columns in two ways: our responsive offset-_ props or the margin utility classes. Grid offset-_ props are sized to match columns while margins utility classes are more useful for quick layouts where the width of the offset is variable.

<w-grid-container>
  <w-grid-row horizontal-align="left" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :offset="6" :cols="6">
  <w-card>
  <w-card-body>One column</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>

## Nesting grids

<w-grid-container>
  <w-grid-row horizontal-align="left" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="6">
  <w-grid-row horizontal-align="left" :style="{ height: '200px', backgroundColor: '#f4f5f7' }">
  <w-grid-column :cols="12">
  <w-card>
  <w-card-body>One column nested</w-card-body>
  </w-card>
  </w-grid-column>
  </w-grid-row>
  </w-grid-column>
  </w-grid-row>
</w-grid-container>
