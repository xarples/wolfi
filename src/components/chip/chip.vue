<script>
import WTypography from '../typography/typography.vue'

export default {
  name: 'WChip',
  components: {
    WTypography
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    style () {
      return {
        alignItems: 'center',
        backgroundColor: this.$wolfiTheme.colors[this.backgroundColor],
        borderRadius: '50px',
        color: this.$wolfiTheme.colors[this.color],
        display: 'inline-flex',
        height: '32px',
        justifyContent: 'center',
        padding: '0 12px'
      }
    }
  }
}
</script>

<template>
  <div :style="style">
    <w-typography variant="body2">
      <slot />
    </w-typography>
  </div>
</template>
