<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTableBody"
})
</script>

<template>
  <div class="table-body">
    <slot />
  </div>
</template>

<style scoped>
.table-body {
  box-sizing: border-box;
}
</style>