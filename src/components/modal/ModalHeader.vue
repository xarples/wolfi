<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WModalFooter"
})
</script>

<template>
  <div class="modal-header">
    <slot />
  </div>
</template>

<style scoped>
.modal-header {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
</style>