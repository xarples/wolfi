<template>
  <section :style="container">
    <div :style="containerChild">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WContainer',
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    maxWidth: {
      type: [String, Number],
      default: 0
    },
    paddingLateral: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    container () {
      return {
        backgroundColor: this.$wolfiTheme.colors[this.backgroundColor],
        paddingLeft: `${this.paddingLateral}${this.paddingLateral !== 'string' && 'px'}`,
        paddingRight: `${this.paddingLateral}${this.paddingLateral !== 'string' && 'px'}`
      }
    },
    containerChild () {
      return {
        margin: '0 auto',
        maxWidth: `${this.maxWidth}${this.maxWidth !== 'string' && 'px'}`
      }
    }
  }
}
</script>
