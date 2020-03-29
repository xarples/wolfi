<script>
export default {
  name: "CheckboxSample",
  data() {
    return {
      current: "One"
    }
  }
}
</script>

<template>
  <div>
    <w-radio
      :style="{ padding: '1em', paddingLeft: 0 }"
      value="One"
      v-model="current"
      >{ Value: One, Current: {{ current }} }</w-radio
    >
    <w-radio
      :style="{ padding: '1em', paddingLeft: 0 }"
      value="Two"
      v-model="current"
      >{ Value: Two, Current: {{ current }} }</w-radio
    >
    <w-radio
      :style="{ padding: '1em', paddingLeft: 0 }"
      value="Three"
      v-model="current"
      >{ Value: Three, Current: {{ current }} }</w-radio
    >
  </div>
</template>
