import { storiesOf } from '@storybook/vue'

storiesOf('Buttons/default', module)
  .add('primary', () => ({
    template: `
      <div>
        <w-button color="primary">
          Click me
        </w-button>
      </div>
    `
  }))
  .add('secondary', () => ({
    template: `
      <div>
        <w-button color="secondary">
          Click me
        </w-button>
      </div>
    `
  }))
