<script lang="ts">
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export default {
  name: "WText",
  props: {
    variant: {
      type: String as () => Variant,
      default: "body1"
    }
  },
  computed: {
    style(): object {
      const { typography = {} } = this.$wolfi.theme;
      const fontVariant =
        typography.variants && typography.variants[this.variant];
      return {
        "--font-family": typography.family,
        "--font-size": fontVariant && fontVariant.fontSize,
        "--font-weight": fontVariant && fontVariant.fontWeight,
        "--letter-spacing": fontVariant && fontVariant.letterSpacing,
        "--text-transform": fontVariant && fontVariant.case
      };
    }
  }
};
</script>

<template>
  <div :style="style" :class="['w-text', variant]">
    <slot></slot>
  </div>
</template>

<style scoped>
.w-text {
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  letter-spacing: var(--letter-spacing);
  text-transform: var(--text-transform);
}
</style>
