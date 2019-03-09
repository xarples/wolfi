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
        minHeight: this.$wolfiTheme.components.list.sizes[listLines].height,
        '--hover-color': this.$opacityColor(this.$wolfiTheme.colors.primary, 0.07)
      }
    }
  }
}
</script>

<style scoped>
  .wolfi-list-item {
    align-items: center;
    box-sizing: border-box;
    padding: 12px 16px;
  }

  .wolfi-list-item:hover {
    background-color: var(--hover-color);
  }

</style>
