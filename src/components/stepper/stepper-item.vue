<template>
  <div
    class="wolfi-stepper-item"
    :step="step"
    :description="description"
    :style="coreStyles"
  >
    <w-row
      :gutter="20"
      :style="style"
    >
      <w-column>
        <w-icon
          name="check-circle"
          :scale="1.5"
          :color="iconColor"
        />
      </w-column>
      <w-column>
        <w-row>
          <w-typography
            variant="body1"
            gutter
          >
            Step {{ step }}:
          </w-typography>
        </w-row>
        <w-row>
          <w-typography variant="body2">
            {{ description }}
          </w-typography>
        </w-row>
      </w-column>
    </w-row>
  </div>
</template>

<script>
import WIcon from '../icon/icon.vue'
import WRow from '../grid/row.vue'
import WColumn from '../grid/column.vue'
import WTypography from '../typography/typography.vue'

export default {
  name: 'WStepperItem',
  components: {
    WIcon,
    WRow,
    WColumn,
    WTypography
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    coreStyles () {
      return {
        'background-color': this.$parent.currentStep < this.step ? '#fafbfc' : null
      }
    },

    iconColor () {
      if (this.$parent.currentStep === this.step) {
        return 'warning'
      }

      if (this.$parent.currentStep > this.step) {
        return 'success'
      }

      return 'secondary'
    },

    style () {
      return {
        opacity: this.$parent.currentStep < this.step ? 0.2 : 1
      }
    }
  }
}
</script>

<style scoped>
.wolfi-stepper-item {
  display: flex;
  flex: 1;
  padding: 10px 15px;
  transition: all ease .2s;
}

.wolfi-stepper-item:not(:first-child) {
   border-left: 1px solid #dfe2e5;

}

</style>
