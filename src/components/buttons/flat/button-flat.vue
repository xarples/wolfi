<template>
  <div
    class="wolfi-button"
    :color="color"
    :disabled="disabled"
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
        // 'background-color': this.$wolfiTheme.colors[this.color],
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
  transition: all ease .2s;
  text-transform: uppercase;
  padding: 0 1em;
}
.wolfi-button:hover {
  background-color: #eeeeee6b;
}

.wolfi-button:active {
  filter: brightness(95%);
}
</style>
