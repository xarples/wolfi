import { storiesOf } from '@storybook/vue'

storiesOf('Buttons/flat', module)
  .add('primary', () => ({
    template: `
      <div>
        <w-button-flat color="primary">
          Click me
        </w-button-flat>
      </div>
    `
  }))
  .add('secondary', () => ({
    template: `
      <div>
        <w-button-flat color="secondary">
          Click me
        </w-button-flat>
      </div>
    `
  }))
