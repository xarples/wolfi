<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { CardImageVariant } from "./types"
import { Color } from "@/types"

export default defineComponent({
  name: "WCardImage",
  props: {
    color: {
      type: String as () => Color,
      default: "transparent" as Color
    },
    src: {
      type: String as () => string,
      default: "" as string
    },
    variant: {
      type: String as () => CardImageVariant,
      default: "default" as CardImageVariant
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      "card-image": true,
      [`card-image-${props.variant}`]: true
    }))

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color]
    }))

    return {
      classes,
      styles
    }
  }
})
</script>

<template>
  <div :class="classes" :style="[baseStyles, styles]">
    <div v-if="variant === 'skew'" class="card-skew"></div>
    <img :src="src" />
  </div>
</template>

<style scoped>
.card-image {
  background-color: var(--current-color);
  position: relative;
  min-height: 180px;
}

.card-skew {
  clip-path: polygon(100% 76%, 0 100%, 100% 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-bottom: 1px solid white;
}

.card-image-pattern {
  overflow: hidden;
  max-height: 180px;
}

.card-image-pattern > img {
  bottom: 0;
  max-width: 100%;
  position: absolute;
  width: 100%;
}

.card-image-default > img {
  max-width: 100%;
  width: 100%;
}
</style>
