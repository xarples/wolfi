<script lang="ts">
import { defineComponent, provide, ref } from "@vue/composition-api"
import { Context } from "./types"

export const DropdownSymbol = Symbol()

export default defineComponent({
  name: "WDropdown",
  setup() {
    const isShow = ref(false)

    function toggleIsShow() {
      isShow.value = !isShow.value
    }

    provide<Context>(DropdownSymbol, { isShow, toggleIsShow })
  }
})
</script>

<template>
  <div class="dropdown">
    <slot />
  </div>
</template>

<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
}
</style>