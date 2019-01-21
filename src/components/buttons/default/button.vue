<script>
import WTypography from '../../typography/typography.vue'
export default {
  name: 'WButton',
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
      return {
        'background-color': this.$wolfiTheme.colors[this.color],
        'border-radius': this.rounded ? '50px' : 0,
        cursor: this.disabled && 'not-allowed',
        display: this.size !== 'block' && 'inline-flex',
        height: this.$wolfiTheme.components.buttons.sizes[this.size]
      }
    }
  }
}
</script>

<template>
  <div
    class="wolfi-button"
    :color="color"
    :disabled="disabled"
    :rounded="rounded"
    :size="size"
    :style="style"
  >
    <w-typography variant="button">
      <slot />
    </w-typography>
  </div>
</template>

<style>
.wolfi-button {
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 0 2em;
}
</style>
