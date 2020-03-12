<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WTableHeaderCell",
  components: {
    WText
  }
})
</script>

<template>
  <div class="table-header-cell">
    <slot />
  </div>
</template>

<style scoped>
.table-header-cell {
  align-items: center;
  display: flex;
  flex: 1;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 0.0625rem solid #dee2e6;
  font-weight: 600;
  padding: 1rem;
}
</style>