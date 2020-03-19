<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"

export default defineComponent({
  name: "WCard",
  props: {
    color: {
      type: String as () => Color,
      default: "transparent" as Color
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      card: true
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
  <div :class="classes" :style="[baseStyles, styles]">
    <slot />
  </div>
</template>


<style scoped>
.card {
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  background-color: var(--current-color);
  background-clip: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
}
</style>