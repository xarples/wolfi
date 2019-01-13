<template>
  <s-col
    :span="width"
    :offset="offset"
    :push="push"
    :pull="pull"
  >
    <slot />
  </s-col>
</template>

<script>
import Grid from 'simple-xgrid'

export default {
  props: {
    width: {
      type: Number,
    },
    offset: {
      type: Number,
    },
    push: {
      type: Number,
    },
    pull: {
      type: Number,
    }
  },
  components: {
    SCol: Grid.Col
  },
}
</script>

<style>
@import url('../../../node_modules/simple-xgrid/dist/simple-grid.css');
</style>
