import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Divider', module)

stories.addDecorator(VueInfoAddon)

stories.add('default', () => ({
  template: `
      <w-list :lines="2">
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
        <w-divider />
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
        <w-divider />
        <w-list-item>
          <w-typography>
            <w-typography gutter>Line item</w-typography>
            <w-typography variant="body2">Line item</w-typography>
          </w-typography>
        </w-list-item>
      </w-list>
    `
}))
