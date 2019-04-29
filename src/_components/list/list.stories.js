import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WList from './list.vue'
import WListItem from './list-item.vue'

const stories = storiesOf('List', module)

stories.addDecorator(withKnobs)

stories
  .add('single line', () => ({
    components: { WList, WListItem },
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
  }), {
    info: {}
  })
  .add('two lines', () => ({
    components: { WList, WListItem },
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
  }), {
    info: {}
  })
  .add('three lines', () => ({
    components: { WList, WListItem },
    template: `
      <w-list :lines="3">
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
  }), {
    info: {}
  })
