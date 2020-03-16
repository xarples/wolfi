<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import { HorizontalAlign, VerticalAlign } from "./types"

export default defineComponent({
  name: "WGridRow",
  props: {
    horizontalAlign: {
      type: String as () => HorizontalAlign,
      default: "left" as HorizontalAlign
    },
    verticalAlign: {
      type: String as () => VerticalAlign,
      default: "center" as VerticalAlign
    },
    noGutters: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => ({
      row: true,
      "no-gutters": props.noGutters
    }))

    const alignItems = {
      left: "flex-start",
      center: "center",
      right: "flex-end"
    }

    const justifyContent = {
      top: "flex-start",
      center: "center",
      bottom: "flex-end"
    }

    const styles = computed(() => ({
      alignItems: alignItems[props.verticalAlign],
      justifyContent: justifyContent[props.horizontalAlign]
    }))

    return {
      classes,
      styles
    }
  }
})
</script>

<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
</style>
