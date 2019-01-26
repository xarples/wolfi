<template>
  <div
    class="wolfi-button"
    :color="color"
    :disabled="disabled"
    :rounded="rounded"
    :size="size"
    :style="style"
    @click="$emit('click', $event)"
  >
    <w-typography variant="button">
      <slot />
    </w-typography>
  </div>
</template>

<script>
import WTypography from '../../typography/typography.vue'

export default {
  name: 'WButtonOutline',
  components: {
    WTypography
  },
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'large',
      validator: val => ['small', 'medium', 'large', 'block'].includes(val)
    }
  },
  computed: {
    style () {
      const { components, colors } = this.$wolfiTheme
      return {
        border: `2px solid ${colors[this.color]}`,
        'border-radius': this.rounded ? '50px' : 0,
        cursor: this.disabled && 'not-allowed',
        color: colors[this.color],
        display: this.size !== 'block' && 'inline-flex',
        height: components.buttons.sizes[this.size]
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
  justify-content: center;
  text-transform: uppercase;
  padding: 0 2em;
}
</style>
