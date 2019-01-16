import { storiesOf } from '@storybook/vue'

storiesOf('Buttons/outline', module)
  .add('primary', () => ({
    template: `
      <div>
        <w-button-outline color="primary">
          Click me
        </w-button-outline>
      </div>
    `
  }))
  .add('secondary', () => ({
    template: `
      <div>
        <w-button-outline color="secondary">
          Click me
        </w-button-outline>
      </div>
    `
  }))
