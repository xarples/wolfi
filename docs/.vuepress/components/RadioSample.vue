<script>
export default {
  name: "CheckboxSample",
  data() {
    return {
      current: ""
    }
  }
}
</script>

<template>
  <div>
    <w-radio value="One" v-model="current">{ Value: One, Current: {{ current }} }</w-radio>
    <w-radio value="Two" v-model="current">{ Value: Two, Current: {{ current }} }</w-radio>
    <w-radio value="Three" v-model="current">{ Value: Three, Current: {{ current }} }</w-radio>
  </div>
</template>
