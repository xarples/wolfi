<script>
export default {
  name: 'WTabs',
  props: {
    backgroundColor: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    },
    color: {
      type: String,
      default: 'white',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return {
        backgroundColor: this.$wolfiTheme.colors[this.backgroundColor]
      }
    }
  }
}
</script>

<template>
  <div
    class="tabs"
    :style="style"
    :fullWidth="fullWidth"
  >
    <slot />
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
}
</style>
