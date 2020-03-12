<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTable"
})
</script>

<template>
  <div class="table">
    <slot />
  </div>
</template>

<style scoped>
.table {
  box-sizing: border-box;
}
</style>