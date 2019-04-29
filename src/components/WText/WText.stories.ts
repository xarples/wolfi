import { storiesOf } from '@storybook/vue';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { WText } from '.';

const stories = storiesOf('WText', module);

const variantLabel = 'Variants';
const variantOptions = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1:'body1',
  body2: 'body2',
  button: 'button',
  caption: 'caption',
  overline: 'overline',
};

const variantDefaultValue = 'h1';

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
      variant: {
        type: String,
        default: select(variantLabel, variantOptions, variantDefaultValue),
      },
    },
    components: { WText },
    template: `
      <div>
        <w-text
          :variant="variant"
        >
          ${text('Label', 'Click me')}
        </w-text>
      </div>
    `,
  }),  {
    info: {},
  });
