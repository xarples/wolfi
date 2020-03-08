<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WSidebarMenuItem",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WText
  },
  setup(props) {
    const classes = computed(() => ({
      "sidebar-menu-item": true,
      "sidebar-menu-item-is-active": props.active
    }))

    return {
      classes
    }
  }
})
</script>

<template>
  <div :class="classes">
    <w-text v-if="active" color="primary">
      <strong>
        <slot />
      </strong>
    </w-text>
    <w-text v-else color="default">
      <slot />
    </w-text>
  </div>
</template>

<style scoped>
.sidebar-menu-item {
  cursor: pointer;
  padding: 8px 16px;
  opacity: 0.7;
}

.sidebar-menu-item:hover {
  opacity: 1;
}

.sidebar-menu-item-is-active {
  opacity: 1;
}
</style>