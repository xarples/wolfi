<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Color } from "@/types"

export default defineComponent({
  name: "WContainer",
  props: {
    color: {
      type: String as () => Color,
      default: "transparent" as Color
    },
    fluid: {
      type: Boolean,
      default: false
    },
    noGutters: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      container: !props.fluid,
      "container-fluid": props.fluid,
      "no-gutters": props.noGutters
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
.container {
  background-color: var(--current-color);
  height: 100%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.container-fluid {
  height: 100%;
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
}

.no-gutters {
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
