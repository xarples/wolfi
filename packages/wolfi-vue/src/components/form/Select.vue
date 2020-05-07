<script lang="ts">
import { defineComponent, provide, ref } from "@vue/composition-api"
import { Context } from "./types"

export const SelectSymbol = Symbol()

export default defineComponent({
  name: "WSelect",
  components: {},
  model: {
    prop: "modelValue",
    event: "update"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(_, context) {
    const isShow = ref(false)

    function setCurrent(_: Event, value: string) {
      context.emit("update", value)
      console.log(context.slots.default())
    }

    provide<Context>(SelectSymbol, { setCurrent })

    return {
      isShow
    }
  }
})
</script>

<template>
  <div class="select" @click="isShow = !isShow" @blur="isShow = false">
    <div class="select-selected">{{ modelValue }}</div>
    <transition name="fade">
      <div class="select-list" v-show="isShow">
        <slot @click="handler" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.select {
  box-sizing: border-box;
  font-size: 0.875rem;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 0.75rem;
  line-height: 1.5;
  display: block;
  width: 100%;
  transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #8898aa;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 3px 2px rgba(233, 236, 239, 0.05);
  position: relative;
  z-index: 999;
}

.select-list {
  background-color: white;
  position: absolute;
  width: 100%;
  display: block;
  margin-top: 10px;
  bottom: unset;
  top: 100%;
  left: 0;
  animation: j 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform: none !important;
  transition: height 0.35s ease;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
