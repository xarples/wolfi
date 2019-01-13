<template>
  <box :gap="8">
    <slot />
  </box>
</template>

<script>
import { Box } from '@seregpie/vueflex'

export default {
  components: {
    Box
  },
  props: {

  }
}
</script>

<style>
</style>
