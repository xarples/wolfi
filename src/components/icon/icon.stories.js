import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WIcon from './icon.vue'

const stories = storiesOf('Icon', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WIcon },
    template: `
     <w-icon name="file" color="primary" />
    `
  }), {
    info: {}
  })
