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
      const xs = this.xs ? this.xs : this.width
      const sm = this.sm ? this.sm : this.width
      const md = this.md ? this.md : this.width
      const lg = this.lg ? this.lg : this.width

      return {
        '--gutter': `${gutter / 2}px`,
        '--marginLeftA': `calc(100% / ${columns} * ${this.offset})`,
        '--marginLeftB': `calc(var(--marginLeftA) + ${gutter / 2}px)`,
        '--margin-left': this.offset ? 'var(--marginLeftB)' : `${gutter / 2}px`,
        '--widthA': `calc(100% / ${columns} * ${this.width}`,
        '--vertical-align': this._verticalAlign,
        '--widthB': `calc(var(--widthA) - ${gutter}px)`,
        '--width-xs-pre': `calc(100% / ${columns} * ${xs}`,
        '--width-xs': `calc(var(--width-xs-pre) - ${gutter}px)`,
        '--width-sm-pre': `calc(100% / ${columns} * ${sm}`,
        '--width-sm': `calc(var(--idth-sm-pre) - ${gutter}px)`,
        '--width-md-pre': `calc(100% / ${columns} * ${md}`,
        '--width-md': `calc(var(--width-md-pre) - ${gutter}px)`,
        '--width-lg-pre': `calc(100% / ${columns} * ${lg}`,
        '--width-lg': `calc(var(--width-lg-pre) - ${gutter}px)`
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
  flex: 0 0 var(--width-xs);
  margin: 0 var(--gutter);
  margin-left: var(--margin-left)
}

@media only screen and (min-width: 768px) {
  .w-column {
    flex: 0 0 var(--width-sm);
  }
}

@media only screen and (min-width: 992px) {
  .w-column {
    flex: 0 0 var(--width-md);
  }
}

@media only screen and (min-width: 1200px) {
  .w-column {
    flex: 0 0 var(--width-lg);
  }
}
</style>
