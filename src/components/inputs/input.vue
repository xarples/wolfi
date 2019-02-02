<template>
  <input
    class="wolfi-input"
    :placeholder="placeholder"
    :style="style"
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
    width: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    style () {
      return {
        'border-bottom-color': this.focus ? this.$wolfiTheme.colors.primary : 'silver',
        width: this.width
      }
    }
  }
}
</script>

<style scoped>
.wolfi-input {
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  font-size: 16px;
  font-family: Roboto;
  height: 32px;
  padding: 8px 0;
}
.wolfi-input:focus {
  outline: none;
}
</style>
