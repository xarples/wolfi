<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color, Align } from "@/types"

export default defineComponent({
  name: "Tooltip",
  props: {
    align: {
      type: String as () => Align,
      default: "left" as Align
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String as () => Color,
      default: "default" as Color
    }
  },
  setup(props, context) {
    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color],
      left: props.align === "left" ? 0 : undefined,
      right: props.align === "right" ? 0 : undefined
    }))

    return {
      styles
    }
  }
})
</script>

<template>
  <div class="tooltip">
    <slot />
    <div class="tooltip-title" :style="[baseStyles, styles]">{{ title }}</div>
  </div>
</template>


<style scoped>
.tooltip {
  display: inline-block;
  position: relative;
}

.tooltip-title {
  color: white;
  box-sizing: border-box;
  background-color: var(--current-color);
  transition: all 0.3s;
  opacity: 0;
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  font-size: 0.875rem;
  right: 0;
  white-space: nowrap;
  width: fit-content;
}

.tooltip:hover .tooltip-title {
  transform: translateY(40px);
  opacity: 1;
}
</style>