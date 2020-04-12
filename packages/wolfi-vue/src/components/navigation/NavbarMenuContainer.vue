<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { Color } from "@/types"

export default defineComponent({
  name: "WNavbarMenu",
  props: {
    color: {
      type: String as () => Color,
      default: "white" as Color
    }
  }
})
</script>

<template>
  <div class="navbar-menu-container" :style="[baseStyles]">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu-container {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
</style>
