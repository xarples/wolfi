<template>
  <span
    :weight="weight"
    :color="color"
    :style="style"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'WStrong',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    weight: {
      type: [String, Number],
      default: 'thin',
      validator: val =>
        [
          100,
          300,
          400,
          500,
          700,
          'thin',
          'light',
          'normal',
          'regular',
          'medium',
          'bold'
        ].includes(val)
    }
  },
  computed: {
    style () {
      return {
        color: this.$wolfiTheme.colors[this.color],
        fontFamily: this.$wolfiTheme.fonts.family,
        fontWeight: this.weight
      }
    }
  }
}
</script>
