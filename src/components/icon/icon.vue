<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"
import { Size } from "@/components/icon/types"

export default defineComponent({
  props: {
    name: {
      type: String as () => string,
      required: false
    },
    color: {
      type: String as () => Color,
      required: false,
      default: "default" as Color
    },
    size: {
      type: String as () => Size,
      required: false,
      default: "1x" as Size
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      icon: true,
      fa: true,
      [`fa-${props.name}`]: true,
      [`fa-${props.size}`]: true,
      "fa-spin": props.animated
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
  <i :style="[baseStyles, styles]" :class="classes">
    <slot />
  </i>
</template>

<style scoped>
.icon {
  align-items: center;
  color: var(--current-color);
  display: inline-flex;
  justify-self: center;
}
</style>
