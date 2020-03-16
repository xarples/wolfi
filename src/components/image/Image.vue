<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import { Variant, Size } from "./types"

export default defineComponent({
  name: "WImage",
  props: {
    variant: {
      type: String as () => Variant,
      default: "default" as Variant
    },
    size: {
      type: String as () => Size,
      default: "default" as Size
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => ({
      image: props.variant === "default",
      avatar: props.variant === "avatar",
      "is-shadow": props.shadow,
      [`is-${props.size}`]: props.variant === "avatar"
    }))

    return {
      classes
    }
  }
})
</script>

<template>
  <img :class="classes" />
</template>


<style scoped>
.image {
  border-style: none;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.avatar {
  border-radius: 50%;
}

.is-shadow {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.is-xs {
  height: 24px;
  width: 24px;
}
.is-sm {
  height: 36px;
  width: 36px;
}
.is-default {
  height: 48px;
  width: 48px;
}
.is-lg {
  height: 58px;
  width: 58px;
}
.is-xl {
  height: 74px;
  width: 74px;
}
</style>