import { storiesOf } from '@storybook/vue';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { WButton } from '.';

const stories = storiesOf('WButton', module);

const colorLabel = 'Colors';
const colorOptions = {
  primary: 'primary',
  secondary: 'secondary',
};

const colorDefaultValue = 'primary';

const variantLabel = 'Variants';
const variantOptions = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
};

const variantDefaultValue = 'contained';

// @ts-ignore
stories.addDecorator(withKnobs);

stories
  .add('default', () => ({
    methods: {
      handleClick(event) {
        action('Action click');
      },
    },
    props: {
      color: {
        type: String,
        default: select(colorLabel, colorOptions, colorDefaultValue),
      },
      variant: {
        type: String,
        default: select(variantLabel, variantOptions, variantDefaultValue),
      },
      disabled: {
        type: Boolean,
        default: boolean('Disabled', false),
      },
    },
    components: { WButton },
    template: `
      <div>
        <w-button
          :color="color"
          :disabled="disabled"
          :variant="variant"
          @click="handleClick"
        >
          ${text('Label', 'Click me')}
        </w-button>
      </div>
    `,
  }),  {
    info: {},
  });
