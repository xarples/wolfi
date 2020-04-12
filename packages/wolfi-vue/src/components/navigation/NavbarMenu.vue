<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"

export default defineComponent({
  name: "WNavbarMenu",
  props: {
    color: {
      type: String as () => Color,
      default: "white" as Color
    }
  },
  setup(props, context) {
    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color]
    }))

    return {
      styles
    }
  }
})
</script>

<template>
  <div class="navbar-menu" :style="[baseStyles, styles]">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu {
  box-sizing: border-box;
  background-color: var(--current-color);
}
</style>
