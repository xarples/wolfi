<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

export default defineComponent({
  name: "WNavbarMenuItem",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => ({
      "navbar-menu-item": true,
      "navbar-menu-item-is-active": props.active
    }))

    return {
      classes
    }
  }
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped>
.navbar-menu-item {
  cursor: pointer;
  display: flex;
  padding: 0 1rem;
  font-size: 0.95rem;
  font-weight: 400;
  transition: 0.3s all;
}

.navbar-menu-item:hover {
  color: var(--primary-color);
}

.navbar-menu-item-is-active {
  color: var(--primary-color);
  font-weight: 600;
}
</style>