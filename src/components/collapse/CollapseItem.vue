<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { Color } from "@/types"
import { Context } from "./types"

import { CollapseSymbol } from "@/components/collapse/Collapse.vue"
import WButton from "@/components/button/Button.vue"
import WText from "@/components/text/Text.vue"
import Icon from "@/components/icon/Icon.vue"

export default defineComponent({
  name: "WCollapseItem",
  components: {
    WButton,
    WText,
    Icon
  },
  props: {
    id: {
      type: String as () => string,
      default: ""
    },
    color: {
      type: String as () => Color,
      default: "primary" as Color
    },
    title: {
      type: String as () => string,
      default: ""
    },
    description: {
      type: String as () => string,
      default: ""
    }
  },
  setup(props, context) {
    const collapseContext = inject<Context>(CollapseSymbol)

    function handleClick(_: Event) {
      collapseContext && collapseContext.setCurrent(props.id)
      context.emit("click", _, props.id)
    }

    return {
      current: collapseContext && collapseContext.current,
      handleClick
    }
  }
})
</script>

<template>
  <div class="collapse-item">
    <div class="collapse-item-header" @click="handleClick">
      <w-button variant="text" :color="color">{{ title }}</w-button>
      <w-icon :color="color" :name="current === id ? 'chevron-up' : 'chevron-down'" />
    </div>
    <transition name="fade">
      <div v-show="current === id" class="collapse-item-body">
        <w-text>
          <slot></slot>
        </w-text>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.collapse-item {
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.05);
}
.collapse-item-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
}
.collapse-item-body {
  padding: 10px 30px 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
