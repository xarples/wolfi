<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color, Size } from "@/types"

export default defineComponent({
  name: "WBadge",
  props: {
    color: {
      type: String as () => Color,
      default: "primary" as Color
    },
    rounded: {
      type: Boolean as () => boolean,
      default: false
    },
    size: {
      type: String as () => Size,
      default: "default" as Size
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      badge: true,
      "badge-rounded": props.rounded,
      [`badge-color-${props.color}`]: props.color,
      [`is-${props.size}`]: props.size
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
  <span :style="[baseStyles, styles]" :class="classes">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  background-color: var(--current-color);
  color: white;
  display: inline-block;
  padding: 0.35rem 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: all 0.15s ease;
  text-transform: uppercase;
}

.badge-rounded {
  border-radius: 10rem;
  padding-right: 0.875em;
  padding-left: 0.875em;
}

.badge-color-secondary {
  color: var(--default-color);
}

.is-medium {
  font-size: 1rem;
  font-weight: inherit;
}

.is-large {
  font-size: 1.25rem;
  font-weight: inherit;
}
</style>
