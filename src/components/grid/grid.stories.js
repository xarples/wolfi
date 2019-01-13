import { storiesOf } from '@storybook/vue'

import Row from './row.vue'
import Column from './column.vue'

storiesOf('Grid', module)
  .add('story as a component', () => ({
    components: {
      Row,
      Column
    },
    template: `
      <row :rounded="true">
        <column width="2">1</column>
        <column width="2">2</column>
      </row>
    `
  }))
