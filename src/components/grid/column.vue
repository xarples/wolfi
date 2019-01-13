<template>
  <vue-item>
    <slot />
  </vue-item>
</template>

<script>
import { Item } from '@seregpie/vueflex'

export default {
  components: {
    VueItem: Item
  },
  props: {

  }
}
</script>

<style>
</style>
