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
    <w-text v-if="active" color="primary">
      <strong>
        <slot />
      </strong>
    </w-text>
    <w-text v-else>
      <slot />
    </w-text>
  </div>
</template>

<style scoped>
.navbar-menu-item {
  cursor: pointer;
  padding: 8px;
  opacity: 0.7;
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