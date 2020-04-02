<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WCardFooter"
})
</script>

<template>
  <div class="card-footer">
    <slot />
  </div>
</template>

<style scoped>
.card-footer {
  padding: 1.25rem 1.5rem;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.05);
}
</style>