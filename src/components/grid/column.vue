<script>
export default {
  name: 'WColumn',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    verticalAlign: {
      type: String,
      default: 'center',
      validator: val => ['top', 'center', 'bottom', 'between', 'around'].includes(val)
    },
    width: {
      type: Number,
      default: 1
    }
  },
  computed: {
    _verticalAlign () {
      const alignments = {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end',
        between: 'space-between',
        around: 'space-around'
      }

      return alignments[this.verticalAlign]
    },
    style () {
      const columns = this.$parent.$props.columns
      const gutter = this.$parent.$props.gutter

      return {
        '--gutter': `${gutter / 2}px`,
        '--marginLeftA': `calc(100% / ${columns} * ${this.offset})`,
        '--marginLeftB': `calc(var(--marginLeftA) + ${gutter / 2}px)`,
        '--margin-left': this.offset ? 'var(--marginLeftB)' : `${gutter / 2}px`,
        '--widthA': `calc(100% / ${columns} * ${this.width}`,
        '--vertical-align': this._verticalAlign,
        '--widthB': `calc(var(--widthA) - ${gutter}px)`
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
  align-self: var(--vertical-align);
  box-sizing: border-box;
  flex: 0 0 var(--widthB);
  margin: 0 var(--gutter);
  margin-left: var(--margin-left)
}
</style>
