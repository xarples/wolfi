<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"

export default defineComponent({
  name: "WCard",
  props: {
    color: {
      type: String as () => Color,
      default: "white" as Color
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      card: true,
      "is-bordered": !props.shadow,
      "is-shadow": props.shadow
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
  background-color: var(--current-color);
  background-clip: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
}

.is-bordered {
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
}

.is-shadow {
  box-shadow: 0 15px 35px rgba(170, 170, 185, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
}
</style>
