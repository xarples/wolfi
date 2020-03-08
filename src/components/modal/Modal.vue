<script lang="ts">
import { defineComponent, provide, ref } from "@vue/composition-api"
import WModalOverlay from "@/components/modal/ModalOverlay.vue"

import { Context } from "./types"

export const ModalSymbol = Symbol()

export default defineComponent({
  name: "WModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WModalOverlay
  },
  setup(props) {
    const isShow = ref(props.show)

    function toggleIsShow() {
      isShow.value = !isShow.value
    }

    provide<Context>(ModalSymbol, { isShow, toggleIsShow })
  }
})
</script>

<template>
  <div class="modal">
    <slot />
  </div>
</template>