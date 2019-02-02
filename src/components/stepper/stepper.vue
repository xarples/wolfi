<template>
  <div class="wolfi-stepper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WStepper',
  props: {
    currentStep: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.wolfi-stepper {
  border: 1px solid #dfe2e5;
  display: flex;
}
</style>
