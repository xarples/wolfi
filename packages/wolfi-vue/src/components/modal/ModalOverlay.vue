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
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
