<template>
  <div class="wolfi-dialog">
    <w-typography
      variant="headline6"
      gutter
    >
      {{ title }}
    </w-typography>
    <w-typography
      variant="body2"
      gutter
    >
      {{ description }}
    </w-typography>
    <div :style="{ height: '20px' }" />
    <div class="wolfi-dialog-actions">
      <w-button-flat
        size="medium"
        @click="$emit('cancelClick', $event)"
      >
        {{ cancelLabel }}
      </w-button-flat>
      <w-button-flat
        size="medium"
        @click="$emit('confirmClick', $event)"
      >
        {{ confirmLabel }}
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
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    confirmLabel: {
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
    box-sizing: border-box;
    min-height: 170px;
    max-width: 568px;
    padding: 24px;
    position: relative;
    width: 100%;
  }

  .wolfi-dialog-actions {
    bottom: 10px;
    position: absolute;
    right: 24px;
  }
</style>
