<template>
  <p
    :align="align"
    :color="color"
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
    align: {
      type: String,
      default: 'left',
      validator: val => ['left', 'center', 'right'].includes(val)
    },
    color: {
      type: String,
      default: 'black'
    },
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
        color: this.$wolfiTheme.colors[this.color],
        fontFamily: this.$wolfiTheme.fonts.family,
        fontWeight: this.$wolfiTheme.fonts.variant[this.variant].weight,
        fontSize: this.$wolfiTheme.fonts.variant[this.variant].size,
        letterSpacing: this.$wolfiTheme.fonts.variant[this.variant].letterSpacing,
        marginBottom: this.gutter ? '0.35em' : 0,
        marginTop: 0,
        textAlign: this.align
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
</style>
