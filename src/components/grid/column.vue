<script>
export default {
  name: 'WColumn',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    horizontalAlign: {
      type: String,
      default: 'top',
      validator: val => ['top', 'center', 'bottom', 'between', 'around'].includes(val)
    },
    verticalAlign: {
      type: String,
      default: 'top',
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
    _horizontalAlign () {
      const alignments = {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end',
        between: 'space-between',
        around: 'space-around'
      }

      return alignments[this.horizontalAlign]
    },
    style () {
      const columns = this.$parent.$props.columns
      const gutter = this.$parent.$props.gutter

      return {
        '--gutter': `${gutter / 2}px`,
        '--horizontal-align': this._horizontalAlign,
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
  align-items: var(--vertical-align);
  box-sizing: border-box;
  display: flex;
  flex: 0 0 var(--widthB);
  justify-content: var(--horizontal-align);
  margin: 0 var(--gutter);
  margin-left: var(--margin-left)
}
</style>
