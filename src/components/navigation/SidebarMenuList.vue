<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WSidebarMenuList",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    WText
  }
})
</script>

<template>
  <div class="sidebar-menu-list">
    <w-text variant="h5">
      <strong>{{ title }}</strong>
    </w-text>
    <slot />
  </div>
</template>

<style scoped>
.sidebar-menu {
  padding: 1.5rem 0;
}
</style>