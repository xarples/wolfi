<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { DropdownSymbol } from "@/components/dropdown/Dropdown.vue"
import { Context } from "./types"

export default defineComponent({
  name: "WDropdownTrigger",
  setup() {
    const dropdownContext = inject<Context>(DropdownSymbol)
    const toggleIsShow = dropdownContext && dropdownContext.toggleIsShow

    function handleClick() {
      toggleIsShow && toggleIsShow()
    }

    return {
      handleClick
    }
  }
})
</script>

<template>
  <div class="dropdown-trigger" @click="handleClick">
    <slot />
  </div>
</template>
