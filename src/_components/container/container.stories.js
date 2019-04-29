import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WContainer from './container.vue'

const stories = storiesOf('Container', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WContainer },
    template: `
      <w-container :max-width="1280" :padding-lateral="32">
        <w-typography align="center" variant="headline5">
          fugiat nulla pariatur.
        </w-typography>
        <w-space :height="16" />
        <w-typography>
          <w-strong>Lorem ipsum dolor sit amet</w-strong>, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </w-typography>
        <w-space :height="16" />
        <w-typography>
          <w-strong>Lorem ipsum dolor sit amet</w-strong>, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </w-typography>
      </w-container>
    `
  }), {
    info: {}
  })
