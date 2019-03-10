import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WRow from './row.vue'
import WColumn from './column.vue'

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WRow, WColumn },
    template: `
      <w-container :max-width="1280">
        <w-row>
          <w-column :offset-md="2" :offset-lg="2" :width="4">2</w-column>
          <w-column :width="4">3</w-column>
        </w-row>
      </w-container>
    `
  }), {
    info: {}
  })
