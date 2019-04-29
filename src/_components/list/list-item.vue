<script>
export default {
  name: 'WListItem',
  props: {
    avatar: {
      type: Object,
      default: undefined
    },
    icon: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      const listLines = this.$parent.lines

      return {
        minHeight: this.$wolfiTheme.components.list.sizes[listLines].height,
        '--hover-color': this.$opacityColor(this.$wolfiTheme.colors.primary, 0.07)
      }
    }
  }
}
</script>

<template>
  <div
    class="wolfi-list-item"
    :style="style"
    @click="$emit('click', $event)"
  >
    <div
      v-if="icon"
      class="icon-container"
    >
      <w-icon
        :name="icon"
        color="iconColor"
        :scale="1"
      />
    </div>

    <div
      v-if="avatar"
      class="avatar-container"
    >
      <w-avatar
        :background-color="primary"
        :color="white"
        :size="40"
        :rounded="true"
        :src="avatar.src"
        :name="avatar.name"
      />
    </div>

    <div
      v-if="imageSrc"
      class="avatar-container"
    >
      <w-avatar
        :rounded="false"
        :size="56"
        :src="imageSrc"
      />
    </div>

    <slot />
  </div>
</template>

<style scoped>
  .wolfi-list-item {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
  }

  .wolfi-list-item:hover {
    background-color: var(--hover-color);
  }

  .icon-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 32px;
  }

  .avatar-container {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    margin-right: 16px;
  }
</style>
