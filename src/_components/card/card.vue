<template>
  <div
    class="wolfi-card"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WCard',
  props: {
    color: {
      type: String,
      default: 'white',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    }
  },
  computed: {
    style () {
      return {
        'background-color': this.$wolfiTheme.colors[this.color]
      }
    }
  }
}
</script>

<style scoped>
  .wolfi-card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
</style>
