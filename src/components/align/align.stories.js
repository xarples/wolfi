import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WAlign from './align.vue'

const stories = storiesOf('Align', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WAlign },
    template: `
    <w-container :max-width="1280">
      <w-row>
        <w-column :offset="1" :width="4">
          <w-align>
            2
          </w-align>
        </w-column>
        <w-column :width="4">3</w-column>
      </w-row>
    </w-container>
    `
  }), {
    info: {}
  })
