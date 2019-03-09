import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import WButton from './button.vue'

const stories = storiesOf('Button', module)

const colorLabel = 'Colors'
const colorOptions = {
  primary: 'primary',
  secondary: 'secondary'
}
const colorDefaultValue = 'primary'

const sizeLabel = 'Sizes'
const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}
const sizeDefaultValue = 'large'

const variantLabel = 'Variants'
const variantOptions = {
  contained: 'contained',
  outline: 'outline',
  text: 'text'
}
const variantDefaultValue = 'contained'

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    methods: {
      handleClick (event) {
        action('Action click')
      }
    },
    props: {
      color: {
        type: String,
        default: select(colorLabel, colorOptions, colorDefaultValue)
      },
      size: {
        type: String,
        default: select(sizeLabel, sizeOptions, sizeDefaultValue)
      },
      variant: {
        type: String,
        default: select(variantLabel, variantOptions, variantDefaultValue)
      },
      disabled: {
        type: Boolean,
        default: boolean('Disabled', false)
      },
      fullWidth: {
        type: Boolean,
        default: boolean('Full width', false)
      }
    },
    components: { WButton },
    template: `
      <div>
        <w-button
          icon="plus"
          :color="color"
          :size="size"
          :variant="variant"
          :disabled="disabled"
          :fullWidth="fullWidth"
          @click="handleClick"
        >
          ${text('Label', 'Click me')}
        </w-button>
      </div>
    `
  }), {
    info: {}
  })
