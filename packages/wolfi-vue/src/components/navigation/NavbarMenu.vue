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
  <div class="navbar-menu" :style="[baseStyles]">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu {
  align-items: center;
  box-sizing: border-box;
  /* border-bottom: 1px solid var(--gray2-color); */
  display: flex;
  /* padding: 0.5rem; */
  justify-content: space-between;
}
</style>
