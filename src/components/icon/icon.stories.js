import { storiesOf } from '@storybook/vue'

storiesOf('Icon', module)
  .add('default', () => ({
    template: `
     <w-icon name="file" />
    `
  }))
