import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Forms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('input', () => ({
    template: `
      <div>
        <w-input placeholder="Fist Name" />
      </div>
    `
  }))
  .add('textarea', () => ({
    template: `
      <div>
        <w-textarea />
      </div>
    `
  }))
  .add('switch', () => ({
    template: `
      <div>
        <w-switch color="primary" />
      </div>
    `
  }))
