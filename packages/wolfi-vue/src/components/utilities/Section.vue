<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Size, Color } from "@/types"

export default defineComponent({
  name: "WSection",
  props: {
    size: {
      type: String as () => Size,
      default: "default" as Size
    },
    color: {
      type: String as () => Color,
      default: "transparent" as Color
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      section: true,
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
  <section :class="classes" :style="[baseStyles, styles]">
    <slot />
  </section>
</template>

<style scoped>
.section {
  background-color: var(--current-color);
  height: 100%;
}

.is-default {
  padding: 3rem 0;
}

.is-medium {
  padding: 9rem 0;
}

.is-large {
  padding: 18rem 0;
}
</style>
