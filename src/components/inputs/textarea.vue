<template>
  <textarea
    class="wolfi-input"
    :placeholder="placeholder"
    :style="style"
    @focus="focus = true"
    @blur="focus = false"
  />
</template>

<script>
export default {
  name: 'WTextarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '50px'
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
        height: this.height,
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
