import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import WAvatar from './avatar.vue'

const stories = storiesOf('Avatar', module)

const backgroundColorLabel = 'Background Colors'
const backgroundColorOptions = {
  primary: 'primary',
  secondary: 'secondary'
}
const backgroundColorDefaultValue = 'primary'

const colorLabel = 'Colors'
const colorOptions = {
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
  none: ''
}
const colorDefaultValue = ''

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    methods: {
      handleClick (event) {
        action('Action click')
      }
    },
    props: {
      backgroundColor: {
        type: String,
        default: select(backgroundColorLabel, backgroundColorOptions, backgroundColorDefaultValue)
      },
      color: {
        type: String,
        default: select(colorLabel, colorOptions, colorDefaultValue)
      },
      lighten: {
        type: Number,
        default: number('Size', 80)
      },
      name: {
        type: String,
        default: text('Name', 'Test name')
      },
      rounded: {
        type: Boolean,
        default: boolean('Rounded', true)
      },
      size: {
        type: Number,
        default: number('Size', 50)
      },
      src: {
        type: String,
        default: text('Image src', 'https://picsum.photos/200/300/?random')
      }
    },
    components: { WAvatar },
    template: `
      <div>
        <w-avatar
          :backgroundColor="backgroundColor"
          :color="color"
          :lighten="lighten"
          :rounded="rounded"
          :size="size"
          :src="src"
          :name="name"
        />
      </div>
    `
  }), {
    info: {}
  })
