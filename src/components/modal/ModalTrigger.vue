<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { ModalSymbol } from "@/components/modal/Modal.vue"
import WButton from "@/components/button/Button.vue"

import { Context } from "./types"

export default defineComponent({
  name: "WModalTrigger",
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
  <div class="modal-trigger" @click="toggleIsShow">
    <slot />
  </div>
</template>
