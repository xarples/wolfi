<template>
  <span :style="style">
    <v-icon
      :name="name"
      :scale="scale"
    />
  </span>
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
      default: null
    },
    scale: {
      type: [String, Number],
      default: 1
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    style () {
      return {
        color: this.$wolfiTheme.colors[this.color],
        display: 'flex'
      }
    }
  }
}
</script>
