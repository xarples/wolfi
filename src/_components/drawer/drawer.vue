<template>
  <aside class="wolfi-drawer">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'WDrawer',
  props: {}
}
</script>

<style scoped>
  .wolfi-drawer {
    border-right: 1px solid rgba(0,0,0,.12);
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 256px;
  }
</style>
