<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WSidebarMenu"
})
</script>

<template>
  <div class="sidebar-menu" :style="[baseStyles]">
    <slot />
  </div>
</template>

<style scoped>
.sidebar-menu {
  padding: 1.5rem 0;
  max-width: 279px;
  border-right: 1px solid var(--gray2-color);
}
</style>