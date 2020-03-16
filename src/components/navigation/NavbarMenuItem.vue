<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import WText from "@/components/text/Text.vue"

export default defineComponent({
  name: "WNavbarMenuItem",
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
  opacity: 0.5;
  padding: 0.875rem 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  transition: all ease 0.3s;
}

.navbar-menu-item:hover {
  opacity: 1;
}

.navbar-menu-item-is-active {
  opacity: 1;
}

.navbar-menu-item img {
  max-height: 1.75rem;
}
</style>