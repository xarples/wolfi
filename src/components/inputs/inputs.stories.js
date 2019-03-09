import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WInput from './input.vue'
import WTextarea from './textarea.vue'
import WSwitch from './switch.vue'

const stories = storiesOf('Forms', module)

stories.addDecorator(withKnobs)

stories
  .add('input', () => ({
    components: { WInput },
    template: `
      <w-input placeholder="Fist Name" />
    `
  }), {
    info: {}
  })
  .add('textarea', () => ({
    components: { WTextarea },
    template: `
      <w-textarea />
    `
  }), {
    info: {}
  })
  .add('switch', () => ({
    components: { WSwitch },
    template: `
      <w-switch color="primary" />
    `
  }), {
    info: {}
  })
