import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WChip from './chip.vue'

const stories = storiesOf('Chip', module)

stories.addDecorator(withKnobs)

stories
  .add('Chip', () => ({
    components: { WChip },
    template: `
      <w-chip>Action chip</w-chip>
    `
  }), {
    info: {}
  })
