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
    heightLg: {
      type: Number,
      default: 0
    },
    heightMd: {
      type: Number,
      default: 0
    },
    heightSm: {
      type: Number,
      default: 0
    },
    heightXs: {
      type: Number,
      default: 0
    },
    width: {
      type: [String, Number],
      default: 0
    },
    widthLg: {
      type: Number,
      default: 0
    },
    widthMd: {
      type: Number,
      default: 0
    },
    widthSm: {
      type: Number,
      default: 0
    },
    widthXs: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style () {
      const width = this[`width${this.upperFirstLetter(this.$mq)}`]
        ? this[`width${this.upperFirstLetter(this.$mq)}`]
        : this.width
      const height = this[`height${this.upperFirstLetter(this.$mq)}`]
        ? this[`height${this.upperFirstLetter(this.$mq)}`]
        : this.height

      return {
        display: 'inline-block',
        height: `${height}${typeof height !== 'string' && 'px'}`,
        width: `${width}${typeof width !== 'string' && 'px'}`
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
