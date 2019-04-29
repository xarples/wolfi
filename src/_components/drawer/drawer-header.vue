<template>
  <header class="wolfi-drawer-header">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'WDrawerHeader',
  props: {}
}
</script>

<style scoped>
  .wolfi-drawer-header {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 64px;
    padding: 0 16px 4px;
  }
</style>
