<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WNavbarMenuItem",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WText
  }
})
</script>

<template>
  <div class="navbar-menu-item">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu-item {
  cursor: pointer;
  padding: 8px;
}

.navbar-menu-item img {
  max-height: 1.75rem;
}
</style>