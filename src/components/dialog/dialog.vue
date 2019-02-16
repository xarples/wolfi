<script>
import WButton from '../button/button.vue'
export default {
  name: 'WDialog',
  components: {
    WButton
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

<template>
  <div class="wolfi-dialog">
    <div class="title-container">
      <w-typography
        variant="headline6"
        gutter
      >
        {{ title }}
      </w-typography>
    </div>
    <div class="description-container">
      <w-typography
        variant="body2"
        gutter
      >
        {{ description }}
      </w-typography>
    </div>
    <div class="wolfi-dialog-actions">
      <w-button
        size="small"
        variant="text"
        @click="$emit('cancelClick', $event)"
      >
        {{ cancelLabel }}
      </w-button>
      <w-button
        size="small"
        variant="text"
        @click="$emit('confirmClick', $event)"
      >
        {{ confirmLabel }}
      </w-button>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  padding: 24px 24px 20px;
}

.description-container {
  padding: 0 24px 20px;
  opacity: .6;
}
.wolfi-dialog {
  box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  min-height: 170px;
  max-width: 568px;
  margin: 2em;
  width: 100%;
}

.wolfi-dialog-actions {
  align-items: center;
  display: flex;
  height: 52px;
  padding: 0 8px;
  justify-content: flex-end;
}
</style>
