<script lang="ts">
import { defineComponent, inject, computed } from "@vue/composition-api"
import { ModalSymbol } from "@/components/modal/Modal.vue"
import WModalOverlay from "@/components/modal/ModalOverlay.vue"
import { Size, Context } from "./types"

export default defineComponent({
  name: "WModalContent",
  props: {
    size: {
      type: String as () => Size,
      default: "default" as Size
    }
  },
  components: {
    WModalOverlay
  },
  setup(props) {
    const modalContext = inject<Context>(ModalSymbol)
    const isShow = modalContext && modalContext.isShow
    const classes = computed(() => ({
      "modal-content": true,
      [`modal-content-size-${props.size}`]: props.size
    }))

    return {
      classes,
      isShow
    }
  }
})
</script>

<template>
  <transition name="fade">
    <w-modal-overlay v-show="isShow">
      <div :class="classes">
        <slot />
      </div>
    </w-modal-overlay>
  </transition>
</template>

<style scoped>
.modal-content {
  background-color: white;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  pointer-events: auto;
  background-clip: padding-box;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
  border: 0;
  border-radius: 0.3rem;
  outline: 0;
}

.modal-content-size-sm {
  max-width: 380px;
}

.modal-content-size-md {
  max-width: 800px;
}

.modal-content-size-lg {
  max-width: 1140px;
}

@media screen and (min-width: 576px) {
  .modal-content {
    margin: 1.75rem auto;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2),
      0 5px 15px rgba(0, 0, 0, 0.17);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>