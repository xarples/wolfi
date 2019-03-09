import { storiesOf } from '@storybook/vue'
import WDivider from './divider.vue'

const stories = storiesOf('Divider', module)

stories.add('default', () => ({
  components: { WDivider },
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
}), {
  info: {}
})
