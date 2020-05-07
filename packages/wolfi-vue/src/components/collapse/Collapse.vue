<script lang="ts">
import { defineComponent, ref, provide } from "@vue/composition-api"
import { Context } from "./types"

export const CollapseSymbol = Symbol()

export default defineComponent({
  name: "WCollapse",
  setup() {
    const current = ref("")

    function setCurrent(id: string) {
      if (id === current.value) {
        current.value = ""

        return
      }

      current.value = id
    }

    provide<Context>(CollapseSymbol, { current, setCurrent })
  }
})
</script>

<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<style scoped></style>
