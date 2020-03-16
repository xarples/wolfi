<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { Variant, Align } from "@/components/text/types"
import { Color } from "@/types"

export default defineComponent({
  name: "WText",
  props: {
    variant: {
      type: String as () => Variant,
      required: false,
      default: "text" as Variant
    },
    align: {
      type: String as () => Align,
      required: false,
      default: "left" as Align
    },
    color: {
      type: String as () => Color,
      required: false,
      default: "default" as Color
    }
  },
  setup(props, context) {
    const classes = computed(() => {
      const variant = props.variant as string
      const isHeading = variant.match(/h[1-6]/)
      const isDisplay = variant.includes("display")
      const isLead = variant.includes("lead")
      const isText = variant.includes("text")

      return {
        text: isText ? true : false,
        heading: isHeading ? true : false,
        display: isDisplay ? true : false,
        lead: isLead ? true : false,
        [`text-${props.variant}`]: true,
        [`text-align-${props.align}`]: props.align,
        [`text-${props.color}`]: props.color
      }
    })

    const styles = computed(() => ({
      "--current-color": context.root.$wolfi.colors[props.color]
    }))

    return {
      classes,
      styles
    }
  }
})
</script>

<template>
  <div :class="classes" :style="[baseStyles, styles]">
    <slot />
  </div>
</template>

<style scoped>
.heading {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: var(--current-color);
}
.text-h1 {
  font-size: 2.5rem;
}
.text-h2 {
  font-size: 2rem;
}
.text-h3 {
  font-size: 1.75rem;
}
.text-h4 {
  font-size: 1.5rem;
}
.text-h5 {
  font-size: 1.25rem;
}
.text-h6 {
  font-size: 1rem;
}

.display {
  color: var(--current-color);
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
}
.text-display1 {
  font-size: 3.3rem;
}
.text-display2 {
  font-size: 2.75rem;
}
.text-display3 {
  font-size: 2.1875rem;
}
.text-display4 {
  font-size: 1.6275rem;
}

.lead {
  color: var(--current-color);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.text {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  margin-top: 0;
  /* margin-bottom: 1rem; */
  color: var(--current-color);
  width: 100%;
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
}

.text-align-left {
  text-align: left;
}

.text-align-center {
  text-align: center;
}

.text-align-right {
  text-align: right;
}
</style>
