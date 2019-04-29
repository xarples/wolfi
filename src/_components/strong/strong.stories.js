import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WStrong from './strong.vue'

const stories = storiesOf('Strong', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WStrong },
    template: `
      <w-typography>
        <w-strong>Lorem ipsum dolor sit amet</w-strong>, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.
      </w-typography>
    `
  }), {
    info: {}
  })
