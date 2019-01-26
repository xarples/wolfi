import { storiesOf } from '@storybook/vue'

storiesOf('Buttons/default', module)
  .add('primary', () => ({
    methods: {
      handleClick (event) {
        console.log(event)
      }
    },
    template: `
      <div>
        <w-button color="primary" @click="handleClick">
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
