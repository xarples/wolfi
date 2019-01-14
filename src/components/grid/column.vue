<template>
  <s-col
    :span="width"
    :offset="offset"
    :push="push"
    :pull="pull"
    :style="colStyle"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
  >
    <slot />
  </s-col>
</template>

<script>
import Grid from 'simple-xgrid'

export default {
  components: {
    SCol: Grid.Col
  },
  props: {
    width: {
      type: Number
    },
    offset: {
      type: Number
    },
    push: {
      type: Number
    },
    pull: {
      type: Number
    },
    xs: {
      type: Number || Object
    },
    sm: {
      type: Number || Object
    },
    md: {
      type: Number || Object
    },
    lg: {
      type: Number || Object
    }
  },
  computed: {
    colStyle () {
      let colStyle =
        this.$parent.gutter !== 0
          ? {
            'padding-left': `${this.$parent.gutter / 2}px`,
            'padding-right': `${this.$parent.gutter / 2}px`
          }
          : {}
      return colStyle
    }
  }
}
</script>

<style>
@import url("../../../node_modules/simple-xgrid/dist/simple-grid.css");
</style>
