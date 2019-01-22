<template>
  <s-row
    :gutter="gutter"
    :align="verticalAlign"
    :justify="horizontalAlign"
  >
    <slot />
  </s-row>
</template>

<script>
import Grid from 'simple-xgrid/'
import 'simple-xgrid/dist/simple-grid.css'

export default {
  name: 'WRow',
  components: {
    SRow: Grid.Row
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    verticalAlign: {
      type: String,
      default: 'middle',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val)
    },
    horizontalAlign: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val)
    }
  }
}
</script>

<style src="simple-xgrid/dist/simple-grid.css">
</style>
