<template>
  <img
    class="wolfi-card-image"
    :src="src"
  >
</template>

<script>
export default {
  name: 'WCardImage',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.wolfi-card-image {
  width: 100%;
  height: 100%;;
}
</style>
