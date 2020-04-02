<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { ModalSymbol } from "@/components/modal/Modal.vue"
import WButton from "@/components/button/Button.vue"

import { Context } from "./types"

export default defineComponent({
  name: "WModalFooter",
  components: {
    WButton
  },
  setup() {
    const modalContext = inject<Context>(ModalSymbol)
    const toggleIsShow = modalContext && modalContext.toggleIsShow

    return {
      toggleIsShow
    }
  }
})
</script>

<template>
  <div class="modal-footer">
    <w-button variant="text" @click="toggleIsShow">Close</w-button>
    <slot />
  </div>
</template>

<style scoped>
.modal-footer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  border-top: 1px solid #e9ecef;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
</style>
