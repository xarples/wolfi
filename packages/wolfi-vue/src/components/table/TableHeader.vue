<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTableHeader"
})
</script>

<template>
  <div class="table-header">
    <slot />
  </div>
</template>

<style scoped>
.table-header {
  box-sizing: border-box;
}
</style>