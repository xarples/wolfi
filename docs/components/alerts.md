# Alerts

> Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Examples

<w-alert color="primary" :style="{ marginTop: '1em' }">This is a primary alert!</w-alert>

<w-alert color="info" :style="{ marginTop: '1em' }">This is a info alert!</w-alert>

<w-alert color="success" :style="{ marginTop: '1em' }">This is a success alert!</w-alert>

<w-alert color="danger" :style="{ marginTop: '1em' }">This is a danger alert!</w-alert>

<w-alert color="warning" :style="{ marginTop: '1em' }">This is a warning alert!</w-alert>

<w-alert color="default" :style="{ marginTop: '1em' }">This is a default alert!</w-alert>

<w-alert color="secondary" :style="{ marginTop: '1em' }">This is a secondary alert!</w-alert>

### With icon

<w-alert icon="address-card" color="primary" :style="{ marginTop: '1em' }">This is a primary alert!</w-alert>

<w-alert icon="address-card" color="info" :style="{ marginTop: '1em' }">This is a info alert!</w-alert>

<w-alert icon="address-card" color="success" :style="{ marginTop: '1em' }">This is a success alert!</w-alert>

<w-alert icon="address-card" color="danger" :style="{ marginTop: '1em' }">This is a danger alert!</w-alert>

<w-alert icon="address-card" color="warning" :style="{ marginTop: '1em' }">This is a warning alert!</w-alert>

<w-alert icon="address-card" color="default" :style="{ marginTop: '1em' }">This is a default alert!</w-alert>

<w-alert icon="address-card" color="secondary" :style="{ marginTop: '1em' }">This is a secondary alert!</w-alert>

### Dismissing

<w-alert icon="address-card" dismissible color="primary" :style="{ marginTop: '1em' }">This is a primary alert!</w-alert>

### API

#### Properties

| Name        | Description | Type    | Value                                                      |
| ----------- | ----------- | ------- | ---------------------------------------------------------- |
| color       |             | String  | primary, info, success, danger, warning default, secondary |
| dismissible |             | Boolean | false                                                      |
| icon        |             | String  |                                                            |

#### Methods

| Name  |    Description    | Parameters     |
| ----- | :---------------: | -------------- |
| click | Triggers on click | event: \$event |
