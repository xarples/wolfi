<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WModalOverlay"
})
</script>

<template>
  <div class="modal-overlay">
    <slot />
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>