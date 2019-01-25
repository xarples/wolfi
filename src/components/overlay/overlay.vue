<template>
  <div class="wolfi-overlay-container">
    <div class="wolfi-overlay" />
    <div class="wolfi-overlay-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WOverlay'
}
</script>

<style scoped>
  .wolfi-overlay {
    background: black;
    bottom: 0;
    left: 0;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
  }

  .wolfi-overlay-content {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .wolfi-overlay-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
