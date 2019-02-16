<script>
import Avatar from 'vue-avatar'

export default {
  name: 'WAvatar',
  components: {
    Avatar
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    },
    color: {
      type: String,
      default: '',
      validator: val => ['', 'primary', 'secondary', 'white'].includes(val)
    },
    lighten: {
      type: Number,
      default: 80
    },
    name: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <avatar
    :background-color="$wolfiTheme.colors[backgroundColor]"
    :color="$wolfiTheme.colors[color]"
    :lighten="lighten"
    :rounded="rounded"
    :size="size"
    :src="src"
    :username="name"
  />
</template>
