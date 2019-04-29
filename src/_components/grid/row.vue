<script>
export default {
  name: 'WRow',
  props: {
    columns: {
      type: Number,
      default: 12
    },
    gutter: {
      type: Number,
      default: 0
    },
    height: {
      type: [String, Number],
      default: 'inherit'
    },
    verticalAlign: {
      type: String,
      default: 'top',
      validator: val => ['top', 'center', 'bottom'].includes(val)
    }
  },
  computed: {
    align () {
      const alignments = {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end'
      }

      return alignments[this.verticalAlign]
    },
    style () {
      return {
        alignItems: this.align,
        display: 'flex',
        flexWrap: 'wrap',
        height: `${this.height}${typeof this.height !== 'string' && 'px'}`,
        width: '100%'
      }
    }
  }
}
</script>

<template>
  <div
    :style="style"
    :columns="columns"
    :gutter="gutter"
    :height="height"
    :verticalAlign="verticalAlign"
  >
    <slot />
  </div>
</template>
