<script lang="ts">
import { defineComponent, inject, computed } from "@vue/composition-api"
import { DropdownSymbol } from "@/components/dropdown/Dropdown.vue"
import { Context, Align } from "./types"

export default defineComponent({
  name: "WDropdownList",
  props: {
    align: {
      type: String as () => Align,
      default: "left" as Align
    }
  },
  setup(props) {
    const dropdownContext = inject<Context>(DropdownSymbol)
    const isShow = dropdownContext && dropdownContext.isShow
    const classes = computed(() => ({
      "dropdown-list": true,
      [`is-${props.align}-align`]: true
    }))

    return {
      isShow,
      classes
    }
  }
})
</script>

<template>
  <transition name="fade">
    <div :class="classes" v-show="isShow">
      <slot />
    </div>
  </transition>
</template>

<style scoped>
.dropdown-list {
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  color: #525f7f;
  list-style: none;
  font-size: 1rem;
  min-width: 12rem;
  margin-top: 1rem;
  padding: 0.5rem 0;
  position: absolute;
  z-index: 999;
}

.is-right-align {
  right: 0;
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