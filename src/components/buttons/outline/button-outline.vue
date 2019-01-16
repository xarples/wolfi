<template>
  <div
    class="wolfi-button"
    :color="color"
    :disabled="disabled"
    :rounded="rounded"
    :size="size"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WButton',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (val) => ['primary', 'secondary'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large',
      validator: (val) => ['small', 'medium', 'large', 'block'].includes(val)
    }
  },
  computed: {
    style () {
      return {
        'background-color': this.$wolfiTheme.buttons.outline[this.color].background,
        'border': `2px solid ${this.$wolfiTheme.buttons.outline[this.color].color}`,
        'border-radius': this.rounded ? '50px' : 0,
        'cursor': this.disabled && 'not-allowed',
        'color': this.$wolfiTheme.buttons.outline[this.color].color,
        'display': this.size !== 'block' && 'inline-flex',
        'font-size': this.$wolfiTheme.buttons.font.sizes[this.size],
        'height': this.$wolfiTheme.buttons.sizes[this.size],
      }
    }
  }
}
</script>

<style scoped>
.wolfi-button {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 14px;
  justify-content: center;
  text-transform: uppercase;
  padding: 0 2em;
}
</style>
