<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WInput",
  model: {
    prop: "value",
    event: "update"
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
})
</script>

<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    v-on="$listeners"
    @input="$emit('update', $event.target.value)"
  />
</template>

<style scoped>
.input {
  background-color: #fff;
  box-sizing: border-box;
  background-clip: padding-box;
  border-radius: 0.25rem;
  box-shadow: none;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border: 0;
  color: #8898aa;
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  height: calc(1.5em + 1.25rem + 2px);
  line-height: 1.5;
  padding: 0.625rem 0.75rem;
  transition: box-shadow 0.15s ease;
  width: 100%;
}

.input:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  outline: none;
}
</style>
