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
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
  }
</style>
