import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Stepper', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('default', () => ({
    data () {
      return {
        currentStep: 1
      }
    },
    methods: {
      handleClick () {
        if (this.currentStep >= 3) {
          this.currentStep = 0
        }
        this.currentStep += 1
      }
    },
    template: `
      <div>
        <w-stepper :currentStep="currentStep">
          <w-stepper-item :step="1" description="Set up your account"></w-stepper-item>
          <w-stepper-item :step="2" description="Set up the organization"></w-stepper-item>
          <w-stepper-item :step="3" description="Invite team members"></w-stepper-item>
        </w-stepper>
        <w-button @click="handleClick" style="margin-top: 1em">{{ currentStep < 3 ? 'Next' : 'Ok' }}</w-button>
      </div>
    `
  }))
