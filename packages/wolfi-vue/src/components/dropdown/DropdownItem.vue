<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { DropdownSymbol } from "@/components/dropdown/Dropdown.vue"
import { Context } from "./types"

export default defineComponent({
  name: "WDropdownItem",
  setup(_, context) {
    const dropdownContext = inject<Context>(DropdownSymbol)
    const toggleIsShow = dropdownContext && dropdownContext.toggleIsShow

    function handleClick(event: Event) {
      toggleIsShow && toggleIsShow()
      context.emit("click", event)
    }

    return {
      handleClick
    }
  }
})
</script>

<template>
  <div class="dropdown-item" @click="handleClick">
    <slot />
  </div>
</template>

<style scoped>
.dropdown-item {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  padding: 1rem;
  font-size: 0.875rem;
}

.dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f6f9fc;
}
</style>
