<template>
  <p
    :style="style"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    textAlign: {
      type: String,
      default: 'left',
      validator: val => ['left', 'center', 'right'].includes(val)
    },
    color: {
      type: String,
      default: ''
    },
    gutter: {
      type: Boolean,
      default: false
    },
    variantXs: {
      type: String,
      default: ''
    },
    variantSm: {
      type: String,
      default: ''
    },
    variantMd: {
      type: String,
      default: ''
    },
    variantLg: {
      type: String,
      default: ''
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
    },
    weight: {
      type: [String, Number],
      default: '',
      validator: val =>
        [
          '',
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
      const variant = this[`variant${this.upperFirstLetter(this.$mq)}`] ? this[`variant${this.upperFirstLetter(this.$mq)}`] : this.variant

      return {
        color: this.color ? this.$wolfiTheme.colors[this.color] : null,
        fontFamily: this.$wolfiTheme.fonts.family,
        fontWeight: this.weight
          ? this.weight
          : this.$wolfiTheme.fonts.variant[variant].weight,
        fontSize: this.$wolfiTheme.fonts.variant[variant].size,
        letterSpacing: this.$wolfiTheme.fonts.variant[variant].letterSpacing,
        marginBottom: this.gutter ? '0.35em' : 0,
        marginTop: 0,
        textAlign: this.textAlign
      }
    }
  },
  methods: {
    upperFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700");
</style>
