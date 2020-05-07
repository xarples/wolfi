<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import { SpacerSize } from "./types"

export default defineComponent({
  name: "WSpacer",
  props: {
    size: {
      type: String as () => SpacerSize,
      default: "1x" as SpacerSize
    }
  },
  setup(props) {
    const styles = computed(() => ({
      height: `${props.size.charAt(0)}rem`
    }))

    return {
      styles
    }
  }
})
</script>

<template>
  <div :style="[styles]"></div>
</template>

<style scoped></style>
