import { storiesOf } from '@storybook/vue'

storiesOf('Forms', module)
  .add('input', () => ({
    template: `
      <div>
        <w-input placeholder="Fist Name" />
      </div>
    `
  }))
  .add('textarea', () => ({
    template: `
      <div>
        <w-textarea />
      </div>
    `
  }))
  .add('switch', () => ({
    template: `
      <div>
        <w-switch color="primary" />
      </div>
    `
  }))
