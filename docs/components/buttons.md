# Buttons

> Use buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Default

Wolfi includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

<w-button :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="info" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="success" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="danger" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="warning" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="default" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

## Outlined

In need of a button, but not the hefty background colors they bring? Replace the variant modifier with outlined ones to remove all background images and colors on any button.

<w-button variant="outlined" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="info" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="success" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="danger" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="warning" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="default" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="outlined" color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

## Text

In need of a text button, you just have to set the text varaint and also for the color that you need just add the color prop

<w-button variant="text" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="info" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="success" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="danger" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="warning" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="default" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button variant="text" color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

### Rounded

In need of a round button, add the class rounded prop to make it.

<w-button rounded :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="info" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="success" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="danger" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="warning" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="default" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button rounded color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

### With icon

In need of a icon button, add the class icon prop to make it.

<w-button icon="address-card" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="info" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="success" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="danger" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="warning" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="default" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button icon="address-card" color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

### Block

Create block level buttons—those that span the full width of a parent—by adding the block prop

<w-button block :style="{ marginTop: '1em' }">Click me</w-button>
<w-button block color="secondary" :style="{ marginTop: '1em' }">Click me</w-button>

### Sizes

Fancy larger or smaller buttons? change the size prop for additional sizes.

<w-button size="sm" :style="{ marginTop: '1em' }">Click me</w-button>
<w-button :style="{ marginTop: '1em' }">Click me</w-button>
<w-button size="lg" :style="{ marginTop: '1em' }">Click me</w-button>

### Disabled state

Make buttons look inactive by adding the disabled boolean attribute to the component

<w-button disabled :style="{ marginTop: '1em' }">Click me</w-button>
