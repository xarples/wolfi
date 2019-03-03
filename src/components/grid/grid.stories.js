import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('default', () => ({
    template: `
      <w-container :max-width="1280">
        <w-row>
          <w-column :offset="1" :width="4">2</w-column>
          <w-column :width="4">3</w-column>
        </w-row>
      </w-container>
    `
  }))
