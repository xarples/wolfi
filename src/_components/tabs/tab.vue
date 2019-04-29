<script>
import WTypography from '../typography/typography.vue'

export default {
  name: 'WTab',
  components: {
    WTypography
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      const { colors } = this.$wolfiTheme
      const { color, fullWidth } = this.$parent.$props
      return {
        color: colors[color],
        borderBottom: this.active
          ? `2px solid ${colors[color]}`
          : `2px solid transparent`,
        flex: this.$parent.$props.fullWidth ? 1 : null,
        maxWidth: !fullWidth ? '360px' : null
      }
    }
  }
}
</script>

<template>
  <div
    :class="['tab', { active }]"
    :style="style"
    @click="$emit('click', $event)"
  >
    <div
      v-if="icon"
      class="icon-container"
    >
      <w-icon
        :name="icon"
        :color="$wolfiTheme.colors[$parent.$props.color]"
        :scale=".7"
      />
    </div>
    <w-typography variant="button">
      <slot />
    </w-typography>
  </div>
</template>

<style scoped>
.tab {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  filter: opacity(50%);
  min-height: 48px;
  justify-content: center;
  min-width: 90px;
  padding: 0 16px;
  transition: all linear 0.1s;
  text-transform: uppercase;
}

.active {
  filter: opacity(100%);
}

.icon-container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
}
</style>
