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
      validator: val =>
        ['top', 'center', 'bottom', 'between', 'around'].includes(val)
    },
    width: {
      type: Number,
      default: 1
    },
    lg: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number,
      default: 0
    },
    offsetLg: {
      type: Number,
      default: 0
    },
    offsetMd: {
      type: Number,
      default: 0
    },
    offsetSm: {
      type: Number,
      default: 0
    },
    offsetXs: {
      type: Number,
      default: 0
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
      const width = this[this.$mq] ? this[this.$mq] : this.width
      const offset = this[`offset${this.upperFirstLetter(this.$mq)}`] ? this[this.$mq] : this.offset

      return {
        '--gutter': `${gutter / 2}px`,
        '--marginLeftA': `calc(100% / ${columns} * ${offset})`,
        '--marginLeftB': `calc(var(--marginLeftA) + ${gutter / 2}px)`,
        '--offset': offset ? 'var(--marginLeftB)' : `${gutter / 2}px`,
        '--widthA': `calc(100% / ${columns} * ${width}`,
        '--vertical-align': this._verticalAlign,
        '--width': `calc(var(--widthA) - ${gutter}px)`
      }
    }
  },
  methods: {
    upperFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<template>
  <div
    class="w-column"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
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
  flex: 0 0 var(--width);
  margin: 0 var(--gutter);
  margin-left: var(--offset);
}
</style>
