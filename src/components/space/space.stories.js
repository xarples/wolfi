import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Space', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('default', () => ({
    template: `
      <div>
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
      </div>
    `
  }))
