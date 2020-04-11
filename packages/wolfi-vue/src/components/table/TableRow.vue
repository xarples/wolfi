<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTableRow"
})
</script>

<template>
  <div class="table-row">
    <slot />
  </div>
</template>

<style scoped>
.table-row {
  display: flex;
  box-sizing: border-box;
}

.table-row:not(:first-child) {
  border-top: 0.0625rem solid #dee2e6;
}
</style>