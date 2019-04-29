<script>
export default {
  name: 'WElevation',
  props: {
    elevation: {
      type: String,
      default: '0dp'
    },
    raised: {
      type: String,
      default: '0dp'
    }
  },
  computed: {
    style () {
      const elevations = {
        '0dp': {
          boxShadow: 'none'
        },
        '1dp': {
          boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)'
        },
        '2dp': {
          boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)'
        },
        '3dp': {
          boxShadow: ' 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)'
        },
        '4dp': {
          boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)'
        },
        '6dp': {
          boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)'
        },
        '8dp': {
          boxShadow: '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)'
        },
        '9dp': {
          boxShadow: '0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)'
        },
        '12dp': {
          boxShadow: '0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)'
        },
        '16dp': {
          boxShadow: '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)'
        },
        '24dp': {
          boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)'
        }
      }

      return {
        '--elevation': elevations[this.elevation].boxShadow,
        '--raised': elevations[this.raised].boxShadow
      }
    }
  }
}
</script>

<template>
  <div
    class="elevation"
    :style="style"
    :elvation="elevation"
  >
    <slot />
  </div>
</template>

<style scoped>
  .elevation {
    box-shadow: var(--elevation);
    transition: box-shadow linear .1s;
  }

  .elevation:hover {
    box-shadow: var(--raised);
  }
</style>
