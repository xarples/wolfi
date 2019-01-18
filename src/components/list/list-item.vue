<template>
  <div
    class="wolfi-list-item"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WListItem',
  computed: {
    style () {
      const listLines = this.$parent.lines

      return {
        height: this.$wolfiTheme.components.list.sizes[listLines].height
      }
    }
  }
}
</script>

<style scoped>
  .wolfi-list-item {
    align-items: center;
    display: flex;
  }
</style>
