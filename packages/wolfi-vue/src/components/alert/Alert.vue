<script lang="ts">
import { defineComponent, computed, ref } from "@vue/composition-api"
import { Color } from "@/types"
import WIcon from "@/components/icon/Icon.vue"

export default defineComponent({
  name: "WAlert",
  props: {
    color: {
      type: String as () => Color,
      required: false,
      default: "default" as Color
    },
    dismissible: {
      type: Boolean as () => boolean,
      required: false,
      default: false
    },
    icon: {
      type: String as () => string,
      required: false,
      default: ""
    }
  },
  components: {
    WIcon
  },
  setup(props, context) {
    const isShow = ref(true)

    const handleDismiss = () => {
      isShow.value = false
    }

    const classes = computed(() => ({
      alert: true,
      [`alert-color-${props.color}`]: true
    }))

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color]
    }))

    return {
      handleDismiss,
      isShow,
      classes,
      styles
    }
  }
})
</script>

<template>
  <div v-if="isShow" :style="[baseStyles, styles]" :class="classes">
    <span v-if="icon" class="alert-icon">
      <w-icon
        v-if="icon"
        size="1x"
        :name="icon"
        :color="color !== 'secondary' ? 'white' : 'default'"
      />
    </span>
    <slot />
    <span v-if="dismissible" class="alert-close">
      <w-icon
        v-if="dismissible"
        size="1x"
        name="times"
        :color="color !== 'secondary' ? 'white' : 'default'"
        @click="handleDismiss"
      />
    </span>
  </div>
</template>

<style scoped>
.alert {
  align-items: center;
  border: 0;
  background-color: var(--current-color);
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: white;
  display: flex;
  padding: 1rem 1.5rem;
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

.alert-color-secondary {
  color: var(--default-color);
}

.alert-icon {
  margin-right: 1.25rem;
  display: inline-block;
  vertical-align: middle;
}

.alert-close {
  top: 50%;
  right: 1.5rem;
  padding: 0;
  position: absolute;
  transform: translateY(-50%);
  transition: all 0.15s ease;
  opacity: 0.6;
  background-color: transparent;
  cursor: pointer;
}

.alert-close:hover {
  opacity: 1;
}
</style>
