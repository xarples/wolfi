<script>
export default {
  name: "CheckboxSample",
  data() {
    return {
      checked: false
    }
  }
}
</script>

<template>
  <w-checkbox v-model="checked">Value: {{ checked }}</w-checkbox>
</template>
