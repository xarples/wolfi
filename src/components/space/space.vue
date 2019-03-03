<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WSpace',
  props: {
    height: {
      type: [String, Number],
      default: 0
    },
    /** if it is number the value will be in px */
    width: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    style () {
      return {
        display: 'inline-block',
        height: `${this.height}${this.height !== 'string' && 'px'}`,
        width: `${this.width}${this.width !== 'string' && 'px'}`
      }
    }
  }
}
</script>
