<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"

import { SelectSymbol } from "./Select.vue"
import { Context } from "./types"

export default defineComponent({
  name: "WSelectOption",
  components: {},
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const collapseContext = inject<Context>(SelectSymbol)

    function handleClick(event: Event) {
      collapseContext && collapseContext.setCurrent(event, props.value)
      context.emit("click", event, props.value)
    }

    return {
      handleClick
    }

    return {}
  }
})
</script>

<template>
  <div class="option" @click="handleClick">
    <slot />
  </div>
</template>

<style scoped>
.option {
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem;
  font-size: 0.875rem;
  word-break: break-all;
}
</style>
