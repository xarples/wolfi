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
import Grid from 'simple-xgrid'

export default {
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    verticalAlign: {
      type: String,
      default: ''
    },
    horizontalAlign: {
      type: String,
      default: ''
    }
  },
  components: {
    SRow: Grid.Row
  },
}
</script>

<style>
@import url('../../../node_modules/simple-xgrid/dist/simple-grid.css');
</style>
