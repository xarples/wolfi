<script>
export default {
  name: 'WContainer',
  props: {
    display: {
      type: String,
      default: 'flex',
      validator: val => ['flex', 'inline-flex'].includes(val)
    },
    horizontalAlign: {
      type: String,
      default: 'center',
      validator: val => ['top', 'center', 'bottom', 'between', 'around'].includes(val)
    },
    verticalAlign: {
      type: String,
      default: 'center',
      validator: val => ['top', 'center', 'bottom', 'between', 'around'].includes(val)
    }
  },
  computed: {
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
      return {
        '--display': this.display,
        '--horizontal-align': this._horizontalAlign,
        '--vertical-align': this._verticalAlign
      }
    }
  }
}
</script>

<template>
  <div
    class="align"
    :style="style"
  >
    <slot />
  </div>
</template>

<style scoped>
.align {
  align-items: var(--vertical-align);
  display: var(--display);
  justify-content: var(--horizontal-align)
}
</style>
