<script>
export default {
  props: ["selected"],
  data() {
    return {
      colors: {
        primary: "#5e72e4",
        info: "#11cdef",
        success: "#2dce89",
        danger: "#f5365c",
        warning: "#fb6340",
        default: "#3c4d69",
        secondary: "#f4f5f7"
      },
      otherColors: {
        gray1: "#f6f9fc",
        gray2: "#e9ecef",
        gray3: "#e3e3e3",
        gray4: "#ced4da",
        gray5: "#adb5bd",
        gray6: "#6c757d",
        gray7: "#525f7f",
        gray8: "#32325d",
        gray9: "#212529"
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="color-swatch" v-for="(value, key) of this[this.selected]">
      <div
        :style="{ backgroundColor: value }"
        class="color-swatch-header"
      ></div>
      <div class="color-swatch-body">
        <div class="color-swatch-key">Name: {{ key }}</div>
        <div class="color-swatch-value">Hex: {{ value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-swatch {
  display: inline-block;
  margin: 1em 1%;
  width: 30%;
}

.color-swatch-header {
  height: 150px;
}

.color-swatch-body {
  margin-top: 1em;
}
</style>
