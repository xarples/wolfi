<script>
export default {
  name: 'WColumn',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style () {
      const columns = this.$parent.$props.columns
      const gutter = this.$parent.$props.gutter

      return {
        '--gutter': `${gutter / 2}px`,
        '--widthA': `calc(100% / ${columns} * ${this.width}`,
        '--widthB': `calc(var(--widthA) - ${gutter}px)`,
        '--marginLeftA': `calc(100% / ${columns} * ${this.offset})`,
        '--marginLeftB': `calc(var(--widthA) + ${gutter / 2}px)`,
        '--margin-left': this.offset ? 'var(--marginLeftB)' : `${gutter / 2}px`
      }
    }
  }
}
</script>

<template>
  <div
    class="w-column"
    :style="style"
    :offset="offset"
    :width="width"
  >
    <slot />
  </div>
</template>

<style scoped>
.w-column {
  box-sizing: border-box;
  flex: 0 0 var(--widthB);
  margin: 0 var(--gutter);
  margin-left: var(--margin-left)
}
</style>
