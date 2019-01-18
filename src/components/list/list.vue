<template>
  <div class="wolfi-list" :lines="lines">
    <slot />
  </div>
</template>


<script>
export default {
  name: 'WList',
  props: {
    lines: {
      type: Number,
      default: 1,
      validator: val => [1, 2].includes(val)
    }
  }
}
</script>

<style scoped>
.wolfi-list {
  padding: 8px 0;
}
</style>
