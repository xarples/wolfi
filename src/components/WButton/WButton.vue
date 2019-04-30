<script lang="ts">
import color from "color";
import WText from "../WText";
import { Color, Variant } from "./types";

export default {
  name: "WButton",
  components: {
    WText
  },
  props: {
    color: {
      type: String as () => Color,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String as () => Variant,
      default: "contained"
    }
  },
  computed: {
    classes(): any {
      return [
        'w-button',
        `w-button--${this.variant}`,
        `w-button--${this.variant}-${this.color}`,
        this.disabled && `w-button--${this.variant}-disabled`
      ]
    },
    style(): object {
      const { colors = {}, elevations = {}, corner = {} } = this.$wolfi.theme;

      return {
        "--disabled": color(colors.black).alpha(0.18),
        "--primary": color(colors.primary),
        "--primary-light": colors.primaryLight,
        "--primary-dark": colors.primaryDark,
        "--secondary": colors.secondary,
        "--secondary-light": colors.secondaryLight,
        "--secondary-dark": colors.secondaryDark,
        "--on-primary": colors.onPrimary,
        "--on-primary-light": colors.onPrimaryLight,
        "--on-primary-dark": colors.onPrimaryDark,
        "--on-secondary": colors.onSecondary,
        "--on-secondary-light": colors.onSecondaryLight,
        "--on-secondary-dark": colors.onSecondaryDark,
        "--on-disabled": color(colors.black).alpha(0.38),

        "--box-shadow": elevations["1dp"],
        "--box-shadow-disabled": elevations["0dp"],
        "--box-shadow-hover": elevations["6dp"],
        "--border-radius": corner.radius,
        "--display": this.fullWidth ? "flex" : "inline-flex"
      };
    }
  }
};
</script>

<template>
  <div :style="style" :class="classes" @click="$emit('click', $event)">
    <w-text variant="button">
      <slot></slot>
    </w-text>
  </div>
</template>

<style scoped>
.w-button {
  align-items: center;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: var(--display);
  height: 36px;
  justify-content: center;
  min-width: 64px;
  padding: 0 16px;
  transition: all linear 0.2s;
}

.w-button--contained {
  box-shadow: var(--box-shadow);
}

.w-button--contained:hover {
  box-shadow: var(--box-shadow-hover);
}

.w-button--contained:active {
  box-shadow: var(--box-shadow);
}

.w-button--contained-primary {
  background-color: var(--primary);
  color: var(--on-primary);
}

.w-button--contained-primary:active {
  background-color: var(--primary-dark);
  color: var(--on-primary);
}

.w-button--contained-secondary {
  background-color: var(--secondary);
  color: var(--on-secondary);
}

.w-button--contained-disabled,
.w-button--contained-disabled:active,
.w-button--contained-disabled:hover {
  background-color: var(--disabled);
  box-shadow: var(--box-shadow-disabled);
  color: var(--on-disabled);
  cursor: not-allowed;
}

.w-button--text-primary {
  color: var(--primary);
}

.w-button--text-secondary {
  color: var(--on-secondary-light);
}

.w-button--text-disabled,
.w-button--text-disabled:active,
.w-button--text-disabled:hover {
  background-color: var(--disabled);
  box-shadow: var(--box-shadow-disabled);
  color: var(--on-disabled);
  cursor: not-allowed;
}

.w-button--outlined-primary {
  border: 1px solid var(--primary);
  color: var(--primary);
}

.w-button--outlined-secondary {
  border: 1px solid var(--secondary);
  color: var(--on-secondary-light);
}

.w-button--outlined-disabled,
.w-button--outlined-disabled:active,
.w-button--outlined-disabled:hover {
  border-color: var(--disabled);
  color: var(--on-disabled);
  cursor: not-allowed;
}

</style>
