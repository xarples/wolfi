import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('default', () => ({
    template: `
      <w-row :gutter="10">
        <w-column :width="8">1</w-column>
        <w-column :width="8">2</w-column>
        <w-column :width="8">3</w-column>
      </w-row>
    `
  }))
