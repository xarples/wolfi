<script lang="ts">
import { defineComponent } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WNavbarMenuList",
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
  <div class="navbar-menu-list">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu-list {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
