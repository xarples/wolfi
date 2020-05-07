<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WCardBody"
})
</script>

<template>
  <div class="card-body">
    <slot />
  </div>
</template>

<style scoped>
.card-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}
</style>