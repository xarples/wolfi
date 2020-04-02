<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WModalTitle",
  components: {
    WText
  }
})
</script>

<template>
  <w-text variant="h5">
    <slot />
  </w-text>
</template>
