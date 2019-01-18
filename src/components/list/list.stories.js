import { storiesOf } from '@storybook/vue'

storiesOf('List', module)
  .add('default', () => ({
    template: `
      <w-list>
        <w-list-item>
          <w-typography>Line item</w-typography>
        </w-list-item>
        <w-list-item>
          <w-typography>Line item</w-typography>
        </w-list-item>
        <w-list-item>
          <w-typography>Line item</w-typography>
        </w-list-item>
      </w-list>
    `
  }))
  .add('two lines', () => ({
    template: `
      <w-list :lines="2">
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
      </w-list>
    `
  }))
