<template>
  <div
    class="wolfi-switch"
    :style="switchStyles"
    @click="handleClick"
  >
    <div
      class="wolfi-switch-circle"
      :style="circleStyles"
    />
  </div>
</template>

<script>
export default {
  name: 'WSwitch',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 150
    },
    circleColor: {
      type: String,
      default: 'white',
      validator: val => ['primary', 'secondary', 'white'].includes(val)
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggled: this.value
    }
  },
  computed: {
    switchStyles () {
      return {
        'background-color': this.toggled ? this.$wolfiTheme.colors[this.color] : '#bfcbd8',
        cursor: this.disabled && 'not-allowed',
        opacity: this.disabled && '0.6'
      }
    },
    circleStyles () {
      return {
        'background-color': this.$wolfiTheme.colors[this.circleColor],
        'transform': this.toggled ? 'translateX(28px)' : 'translateX(0)'
      }
    }
  },
  watch: {
    toggled (newValue) {
      this.toggled = newValue
    }
  },
  methods: {
    handleClick (event) {
      if (!this.disabled) {
        this.toggled = !this.toggled
        this.$emit('change', event, this.toggled)
      }
    }
  }
}
</script>

<style scoped>
.wolfi-switch {
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  height: 22px;
  padding: 3px;
  transition: all ease .2s;
  user-select: none;
  width: 50px;
}

.wolfi-switch-circle {
  border-radius: 50px;
  height: 16px;
  transition: all ease .2s;
  width: 16px;
}
</style>
