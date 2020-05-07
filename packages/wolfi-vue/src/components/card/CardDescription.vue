<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import WText from "@/components/text/Text.vue"
import { Color } from "@/types"

export default defineComponent({
  name: "WCardDescription",
  props: {
    color: {
      type: String as () => Color,
      default: "default" as Color
    }
  },
  components: {
    WText
  }
})
</script>

<template>
  <w-text variant="text" :color="color">
    <slot />
  </w-text>
</template>

<style scoped>
.card-description {
  margin-bottom: 0.5rem;
}
</style>
