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
    <w-text variant="h6" transform="uppercase">
      <strong>{{ title }}</strong>
    </w-text>
    <slot />
  </div>
</template>

<style scoped>
.sidebar-menu {
  padding: 1.5rem 0;
}

.sidebar-menu-list:not(:first-child) {
  border-top: 1px solid var(--gray2-color);
  padding-top: 1rem;
}

.sidebar-menu-list:not(:last-child) {
  padding-bottom: 1rem;
}
</style>