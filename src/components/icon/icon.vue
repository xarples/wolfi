<template>
  <v-icon
    :name="name"
    :scale="scale"
  />
</template>

<script>
import 'vue-awesome/icons'
import VIcon from 'vue-awesome/components/Icon.vue'

export default {
  name: 'WIcon',
  components: {
    VIcon
  },
  props: {
    name: {
      type: String,
      default: null,
      validator: (val) => [
        'file'
      ].includes(val)
    },
    scale: {
      type: [String, Number],
      default: 1
    }
  }
}
</script>
