<script lang="ts">
import color from 'color'
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
    style(): object {
      const { colors = {}, elevations = {}, corner = {} } = this.$wolfi.theme;

      return {
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

        "--box-shadow": elevations["1dp"],
        "--box-shadow-disabled": elevations["0dp"],
        "--box-shadow-hover": elevations["5dp"],
        "--border-radius": corner.radius,
        "--display": this.fullWidth ? "flex" : "inline-flex"
      };
    }
  }
};
</script>

<template>
  <div
    :style="style"
    :class="['w-button', variant, color, { disabled }]"
    @click="$emit('click', $event)"
  >
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
  transition: all linear .2s;
}

.disabled {
  cursor: not-allowed;
  box-shadow: var(--box-shadow-disabled);
}

.contained {
  box-shadow: var(--box-shadow);
}

.contained:hover:not(.disabled) {
  box-shadow: var(--box-shadow-hover);
}

.contained.primary {
  background-color: var(--primary);
  color: var(--on-primary);
}

.contained.primary.disabled {
  background-color: var(--primary-light);
  color: var(--on-primary);
}

.contained.secondary {
  background-color: var(--secondary);
  color: var(--on-secondary);
}

.contained.secondary.disabled {
  background-color: var(--secondary-light);
  color: var(--on-secondary);
}

.text.primary {
  color: var(--primary);
}

.text.primary.disabled {
  color: var(--primary);
}

.text.secondary {
  color: var(--secondary);
}

.text.secondary.disabled {
  color: var(--secondary);
}

.outlined.primary {
  border: 1px solid var(--primary);
  color: var(--primary);
}

.outlined.primary.disabled {
  border: 1px solid var(--primary-light);
  color: var(--primary-light);
}

.outlined.secondary {
  border: 1px solid var(--secondary);
  color: var(--secondary);
}

.outlined.secondary.disabled {
  border: 1px solid var(--secondary-light);
  color: var(--secondary-light);
}
</style>
