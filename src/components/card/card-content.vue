<template>
  <div class="wolfi-card-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WCardContent',
  props: {}
}
</script>

<style scoped>
.wolfi-card-content {
  padding: 24px;
}
</style>
