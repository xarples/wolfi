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
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: this.align
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
    :verticalAlign="verticalAlign"
  >
    <slot />
  </div>
</template>
