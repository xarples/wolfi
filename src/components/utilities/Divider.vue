<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import { Color } from "@/types"

export default defineComponent({
  name: "WDivider",
  props: {
    color: {
      type: String as () => Color,
      default: "gray2" as Color
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      divider: true
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
  <div :class="classes" :style="[baseStyles, styles]"></div>
</template>

<style scoped>
.divider {
  background-color: var(--current-color);
  height: 1px;
  width: 100%;
}
</style>
