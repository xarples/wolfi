<script>
export default {
  name: "SelectSample",
  data() {
    return {
      selected: "Select an option"
    }
  }
}
</script>

<template>
  <div>
    <p>Selected: {{ selected }}</p>
    <w-select v-model="selected">
      <w-select-option value="1">Test</w-select-option>
      <w-select-option value="2">Test</w-select-option>
      <w-select-option value="3">Test</w-select-option>
      <w-select-option value="4">Test</w-select-option>
    </w-select>
  </div>
</template>
