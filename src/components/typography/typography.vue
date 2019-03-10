<template>
  <p
    class="text"
    :textAlign="textAlign"
    :color="color"
    :variantXs="variantXs"
    :variantSm="variantSm"
    :variantMd="variantMd"
    :variantLg="variantLg"
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
      let vars = {}
      const variants = ['variantXs', 'variantSm', 'variantMd', 'variantLg']

      variants.forEach(size => {
        const variant = this[size] || this.variant

        vars = Object.assign({}, vars, {
          [`--${size}-fontFamily`]: this.$wolfiTheme.fonts.family,
          [`--${size}-fontWeight`]: this.weight ? this.weight : this.$wolfiTheme.fonts.variant[variant].weight,
          [`--${size}-fontSize`]: this.$wolfiTheme.fonts.variant[variant].size,
          [`--${size}-letterSpacing`]: this.$wolfiTheme.fonts.variant[variant].letterSpacing
        })
      })

      return {
        ...vars,
        color: this.color ? this.$wolfiTheme.colors[this.color] : null,
        marginBottom: this.gutter ? '0.35em' : 0,
        marginTop: 0,
        textAlign: this.textAlign
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
</style>

<style scoped>
.text {
  font-family: var(--variantXs-fontFamily);
  font-weight: var(--variantXs-fontWeight);
  font-size: var(--variantXs-fontSize);
  letter-spacing: var(--variantXs-letterSpacing);
}

@media only screen and (min-width: 768px) {
  .text {
    font-family: var(--variantSm-fontFamily);
    font-weight: var(--variantSm-fontWeight);
    font-size: var(--variantSm-fontSize);
    letter-spacing: var(--variantSm-letterSpacing);
  }
}

@media only screen and (min-width: 992px) {
  .text {
    font-family: var(--variantMd-fontFamily);
    font-weight: var(--variantMd-fontWeight);
    font-size: var(--variantMd-fontSize);
    letter-spacing: var(--variantMd-letterSpacing);
  }
}

@media only screen and (min-width: 1200px) {
  .text {
    font-family: var(--variantLg-fontFamily);
    font-weight: var(--variantLg-fontWeight);
    font-size: var(--variantLg-fontSize);
    letter-spacing: var(--variantLg-letterSpacing);
  }
}
</style>
