<template>
  <p
    :variant="variant"
    :gutter="gutter"
    :style="style"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    gutter: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'body1',
      validator: val =>
        [
          'headline1',
          'headline2',
          'headline3',
          'headline4',
          'headline5',
          'headline6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'button',
          'caption',
          'overline'
        ].includes(val)
    }
  },
  computed: {
    style () {
      return {
        'font-family': this.$wolfiTheme.fonts.family,
        'font-weight': this.$wolfiTheme.fonts.variant[this.variant].weight,
        'font-size': this.$wolfiTheme.fonts.variant[this.variant].size,
        'letter-spacing': this.$wolfiTheme.fonts.variant[this.variant].letterSpacing,
        'margin-bottom': this.gutter ? '0.35em' : 0,
        'margin-top': 0
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
</style>
