<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WModalBody"
})
</script>

<template>
  <div class="modal-body">
    <slot />
  </div>
</template>

<style scoped>
.modal-body {
  box-sizing: border-box;
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
}
</style>