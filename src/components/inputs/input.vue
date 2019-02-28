<template>
  <input
    class="wolfi-input"
    :placeholder="placeholder"
    :style="style"
    :variant="variant"
    :height="height"
    :fullWidth="fullWidth"
    @focus="focus = true"
    @blur="focus = false"
  >
</template>

<script>
export default {
  name: 'WInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '56px'
    },
    variant: {
      type: String,
      default: 'outline',
      validator: val => ['default', 'outline'].includes(val)
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    default () {
      return {
        'border-bottom': '2px solid silver'
      }
    },
    outline () {
      return {
        'border': '2px solid silver',
        borderRadius: '4px',
        padding: '8px 12px'
      }
    },
    style () {
      return {
        'border-color': this.focus ? this.$wolfiTheme.colors.primary : 'silver',
        width: this.fullWidth ? '100%' : 'inherit',
        height: this.height,
        ...this[this.variant]
      }
    }
  }
}
</script>

<style scoped>
.wolfi-input {
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  font-family: Roboto;
  min-width: 280px;
  padding: 8px 0px;
}
.wolfi-input:focus {
  outline: none;
}
</style>
