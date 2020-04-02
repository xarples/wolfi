<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import WText from "@/components/text/Text.vue"
import { Color } from "@/types"

export default defineComponent({
  name: "WCardTitle",
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
  <w-text variant="h4" class="card-title" :color="color">
    <slot />
  </w-text>
</template>

<style scoped>
.card-title {
  margin-bottom: 0.5rem;
}
</style>
