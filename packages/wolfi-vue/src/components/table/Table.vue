<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTable"
})
</script>

<template>
  <div class="w-table">
    <slot />
  </div>
</template>

<style scoped>
.w-table {
  box-sizing: border-box;
}
</style>
