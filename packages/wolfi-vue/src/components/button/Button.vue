<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"
import { Variant, Size } from "./types"

export default defineComponent({
  name: "WButton",
  props: {
    icon: {
      type: String as () => string,
      default: ""
    },
    color: {
      type: String as () => Color,
      default: "primary" as Color
    },
    block: {
      type: Boolean as () => boolean,
      default: false
    },
    rounded: {
      type: Boolean as () => boolean,
      default: false
    },
    disabled: {
      type: Boolean as () => boolean,
      default: false
    },
    size: {
      type: String as () => Size,
      default: "default" as Size
    },
    variant: {
      type: String as () => Variant,
      default: "default" as Variant
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      button: true,
      [`button-${props.variant}`]: props.variant,
      [`button-${props.variant}-color-${props.color}`]: props.color,
      [`button-size-${props.size}`]: props.size,
      "button-rounded": props.rounded,
      "button-disabled": props.disabled,
      "button-block": props.block
    }))

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color]
    }))

    return {
      classes,
      styles
    }
  }
})
</script>

<template>
  <div :style="[baseStyles, styles]" :class="classes" v-on="$listeners">
    <span v-if="icon" :class="['button-icon', !$slots.default && 'button-icon-margin-less']">
      <w-icon
        v-if="icon"
        size="1x"
        :name="icon"
        :color="color !== 'secondary' ? 'white' : 'default'"
      />
    </span>
    <slot />
  </div>
</template>

<style scoped>
.button {
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  color: #525f7f;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.625rem 1.25rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.15s ease;
  position: relative;
  text-transform: uppercase;
  will-change: transform;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
}

.button:active {
  filter: brightness(90%);
}

.button:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(118, 135, 232, 0.5);
}

.button:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.button-icon {
  margin-right: 0.75em;
  display: inline-block;
  vertical-align: middle;
}

.button-icon-margin-less {
  margin-right: 0;
}

.button-rounded {
  border-radius: 30px;
}

.button-block {
  display: block;
  width: 100%;
}

.button-disabled {
  opacity: 0.65;
  box-shadow: none;
  cursor: not-allowed;
}

.button-disabled:active {
  filter: none;
}

.button-size-sm {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.button-size-lg {
  font-size: 0.875rem;
  padding: 0.875rem 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.button-default {
  color: #fff;
  background-color: var(--current-color);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.button-default-color-secondary {
  color: var(--default-color);
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.button-default-color-white {
  color: var(--primary-color);
}

.button-outlined {
  color: var(--current-color);
  border-color: var(--current-color);
}

.button-outlined:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  background-color: var(--current-color);
  color: white;
  transform: translateY(-1px);
}

.button-outlined-color-secondary {
  color: var(--default-color);
  border-color: var(--secondary-color);
}

.button-outlined-color-secondary:hover {
  color: var(--default-color);
}

.button-text {
  color: var(--current-color);
}

.button-text:hover {
  color: var(--current-color);
  box-shadow: none;
  transform: none;
}

.button-text-color-secondary {
  color: var(--default-color);
}

.button-text-color-secondary:hover {
  color: var(--default-color);
}
</style>
