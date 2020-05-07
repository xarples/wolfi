<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WCardHeader"
})
</script>

<template>
  <div class="card-header">
    <slot />
  </div>
</template>

<style scoped>
.card-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.05);
}
</style>
