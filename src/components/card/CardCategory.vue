<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import WIcon from "@/components/icon/Icon.vue"
import WText from "@/components/text/Text.vue"
import { Color } from "@/types"

export default defineComponent({
  name: "WCardCategory",
  props: {
    icon: {
      type: String as () => string
    },
    color: {
      type: String as () => Color,
      default: "danger" as Color
    }
  },
  components: {
    WIcon,
    WText
  }
})
</script>

<template>
  <div class="card-category">
    <w-text variant="text" :color="color">
      <w-icon v-if="icon" :name="icon" :color="color" />
      <strong>
        <slot />
      </strong>
    </w-text>
  </div>
</template>