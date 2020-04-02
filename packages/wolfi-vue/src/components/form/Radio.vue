<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import WIcon from "@/components/icon/Icon.vue"

import { Color } from "@/types"

export default defineComponent({
  name: "WRadio",
  components: {
    WIcon
  },
  model: {
    prop: "modelValue",
    event: "click"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    color: {
      type: String as () => Color,
      default: "primary" as Color
    }
  },
  setup(props, context) {
    const classes = computed(() => ({
      "radio-circle": true,
      "radio-is-checked": isChecked.value,
      "radio-is-disabled": props.disabled
    }))

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color],
      marginRight: !!context.slots && "0.5rem"
    }))

    const isChecked = computed(() => props.modelValue === props.value)

    function handleClick() {
      if (props.disabled) {
        return
      }

      context.emit("click", props.value)
    }

    return {
      isChecked,
      handleClick,
      classes,
      styles
    }
  }
})
</script>

<template>
  <div class="radio" @click="handleClick">
    <div :class="classes" :style="[baseStyles, styles]">
      <transition name="fade">
        <div class="radio-circle-inner"></div>
      </transition>
      <input
        type="radio"
        :name="name"
        :checked="isChecked"
        :value="value"
        hidden
      />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.radio {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
}

.radio-circle {
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #cad1d7;
  justify-content: center;
  display: inline-flex;
  width: 1.25rem;
  height: 1.25rem;
  transition: all 0.1s;
}

.radio-circle-inner {
  border-radius: 50%;
  background-color: white;
  height: 8px;
  width: 8px;
}

.radio-is-disabled .radio-circle-inner {
  background-color: var(--gray2-color);
}

.radio-is-checked {
  border-color: transparent;
  background-color: var(--current-color);
}

.radio-is-disabled {
  border-color: transparent;
  background-color: var(--gray2-color);
  cursor: not-allowed;
}

.radio-is-disabled.radio-is-checked {
  background-color: var(--current-color);
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
