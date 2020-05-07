<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api"
import WIcon from "@/components/icon/Icon.vue"

import { Color } from "@/types"

export default defineComponent({
  name: "WCheckbox",
  components: {
    WIcon
  },
  model: {
    prop: "checked",
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
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String as () => Color,
      default: "primary" as Color
    }
  },
  setup(props, context) {
    const isChecked = ref(props.checked)

    const classes = computed(() => ({
      "checkbox-square": true,
      "checkbox-is-checked": isChecked.value,
      "checkbox-is-disabled": props.disabled
    }))

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color],
      marginRight: !!context.slots && "0.5rem"
    }))

    function handleClick() {
      if (props.disabled) {
        return
      }

      isChecked.value = !isChecked.value

      context.emit("click", isChecked.value)
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
  <div class="checkbox" @click="handleClick">
    <div :class="classes" :style="[baseStyles, styles]">
      <transition name="fade">
        <w-icon
          name="check"
          :color="disabled ? 'gray2' : 'white'"
          size="xs"
        ></w-icon>
      </transition>
      <input
        type="checkbox"
        :name="name"
        :checked="isChecked"
        :value="isChecked"
        hidden
      />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.checkbox {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
}

.checkbox-square {
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: 1px solid #cad1d7;
  justify-content: center;
  display: inline-flex;
  width: 1.25rem;
  height: 1.25rem;
  transition: all 0.1s;
}

.checkbox-is-checked {
  border-color: transparent;
  background-color: var(--current-color);
}

.checkbox-is-disabled {
  border-color: transparent;
  background-color: var(--gray2-color);
  cursor: not-allowed;
}

.checkbox-is-disabled.checkbox-is-checked {
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
