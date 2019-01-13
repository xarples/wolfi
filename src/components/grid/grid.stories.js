import { storiesOf } from '@storybook/vue'

import Row from './row.vue'
import Column from './column.vue'

storiesOf('Grid', module)
  .add('default', () => ({
    components: {
      Row: Row,
      Column: Column
    },
    template: `
      <row :gutter="10">
        <column :width="8">1</column>
        <column :width="8">2</column>
        <column :width="8">3</column>
      </row>
    `
  }))
