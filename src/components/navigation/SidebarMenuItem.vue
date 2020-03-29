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
  <div :class="classes" :style="baseStyles">
    <span v-if="active" class="sidebar-menu-item-icon-container">
      <w-icon size="xs" name="circle" />
    </span>
    <slot />
  </div>
</template>

<style scoped>
.sidebar-menu-item {
  align-items: center;
  height: 27px;
  cursor: pointer;
  display: flex;
  padding: 0.2rem 0;
  font-size: 0.95rem;
  font-weight: 400;
  transition: 0.3s all;
}

.sidebar-menu-item:hover {
  color: var(--primary-color);
}

.sidebar-menu-item-is-active {
  color: var(--primary-color);
  font-weight: 600;
}

.sidebar-menu-item-icon-container {
  display: flex;
  margin-right: 0.5rem;
}
</style>