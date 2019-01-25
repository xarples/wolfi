<template>
  <div class="wolfi-dialog">
    <slot />
    <div class="wolfi-dialog-actions">
      <w-button-flat
        size="medium"
        @click="$emit('cancelClick', $event)"
      >
        {{ cancelMessage }}
      </w-button-flat>
      <w-button-flat
        size="medium"
        @click="$emit('confirmClick', $event)"
      >
        {{ confirmMessage }}
      </w-button-flat>
    </div>
  </div>
</template>

<script>
import WButtonFlat from '../buttons/flat/button-flat.vue'
export default {
  name: 'WDialog',
  components: {
    WButtonFlat
  },
  props: {
    cancelMessage: {
      type: String,
      default: 'Cancel'
    },
    confirmMessage: {
      type: String,
      default: 'Confirm'
    }
  }
}
</script>

<style scoped>
  .wolfi-dialog {
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    background: #fff;
    padding: 24px;
    position: relative;
    height: 162px;
    width: 568px;
  }

  .wolfi-dialog-actions {
    bottom: 24px;
    position: absolute;
    right: 24px;
  }
</style>
