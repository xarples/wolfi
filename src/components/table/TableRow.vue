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
</style>