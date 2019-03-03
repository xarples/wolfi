<template>
  <div :style="container">
    <div :style="containerChild">
      <slot />
    </div>
  </div>
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
    paddingHorizontal: {
      type: [String, Number],
      default: 0
    },
    paddingVertical: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    container () {
      return {
        backgroundColor: this.$wolfiTheme.colors[this.backgroundColor],
        paddingTop: `${this.paddingVertical}${typeof this.paddingVertical !== 'string' && 'px'}`,
        paddingBottom: `${this.paddingVertical}${typeof this.paddingVertical !== 'string' && 'px'}`,
        paddingLeft: `${this.paddingHorizontal}${typeof this.paddingHorizontal !== 'string' && 'px'}`,
        paddingRight: `${this.paddingHorizontal}${typeof this.paddingHorizontal !== 'string' && 'px'}`
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
