import { storiesOf } from '@storybook/vue'

storiesOf('Grid', module)
  .add('default', () => ({
    template: `
      <w-row :gutter="10">
        <w-column :width="8">1</w-column>
        <w-column :width="8">2</w-column>
        <w-column :width="8">3</w-column>
      </w-row>
    `
  }))
