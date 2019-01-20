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
  name: 'WColumn',
  components: {
    SCol: Grid.Col
  },
  props: {
    width: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object],
      default: () => ({})
    },
    sm: {
      type: [Number, Object],
      default: () => ({})
    },
    md: {
      type: [Number, Object],
      default: () => ({})
    },
    lg: {
      type: [Number, Object],
      default: () => ({})
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
