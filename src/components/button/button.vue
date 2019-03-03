<script>
import WIcon from '../icon/icon.vue'
import WTypography from '../typography/typography.vue'

export default {
  name: 'WButton',
  components: {
    WIcon,
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
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: val => ['small', 'medium', 'large'].includes(val)
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'contained',
      validator: val => ['contained', 'text', 'outline'].includes(val)
    }
  },
  computed: {
    contained () {
      const { colors } = this.$wolfiTheme

      return {
        backgroundColor: colors[this.color]
      }
    },
    outline () {
      const { colors } = this.$wolfiTheme

      return {
        border: `1px solid ${colors[this.color]}`,
        color: colors[this.color],
        paddingLeft: '16px'
      }
    },
    text () {
      const { colors } = this.$wolfiTheme

      return {
        color: colors[this.color],
        paddingLeft: '16px'
      }
    },
    iconColor () {
      const { colors } = this.$wolfiTheme

      return this.variant === 'outline' ? colors[this.color] : 'white'
    },
    style () {
      const { components } = this.$wolfiTheme
      return {
        height: components.button.sizes[this.size],
        paddingLeft: this.icon ? '12px' : '16px',
        paddingRight: '16px',
        width: this.fullWidth && '100%',
        ...this[this.variant]
      }
    }
  }
}
</script>

<template>
  <div
    class="base"
    :class="variant"
    :style="style"
    @click="$emit('click', $event)"
  >
    <div
      v-if="icon && variant === 'contained'"
      class="icon-container"
    >
      <w-icon
        :name="icon"
        color="iconColor"
        :scale=".7"
      />
    </div>
    <w-typography variant="button">
      <slot />
    </w-typography>
  </div>
</template>

<style scoped>
.base {
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  min-width: 64px;
  transition: all linear .1s;
  text-transform: uppercase;
}
.contained {
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
}

.contained:hover {
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  filter: brightness(110%);
  transform: translateY(-1px)
}

.contained:active {
  filter: brightness(90%);
  transform: translateY(1px);
}

.outline {
  background-color: transparent;
  box-shadow: none;
  transform: none;
}

.outline:hover {
  background-color: rgba(0, 0, 0, .04);
}

.text:hover {
  background-color: rgba(0, 0, 0, .08);
}

.icon-container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
}
</style>
