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
  <textarea
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
  background-clip: padding-box;
  border: 0;
  border-radius: 0.25rem;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  color: #8898aa;
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  height: auto;
  line-height: 1.5;
  margin: 0;
  overflow: auto;
  padding: 0.625rem 0.75rem;
  resize: vertical;
  transition: box-shadow 0.15s ease;
  width: 100%;
}

.input:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  outline: none;
}
</style>
