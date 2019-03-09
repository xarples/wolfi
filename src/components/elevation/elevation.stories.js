import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Elevation', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('card', () => ({
    template: `
      <w-container :max-width="500">
        <w-elevation elevation="1dp" raised="8dp">
          <w-card>
            <w-card-image src="https://placehold.it/350x150" />
            <w-card-content>
              <w-typography variant="headline5" gutter>
                Headline5
              </w-typography>
              <w-typography variant="body2">
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
              </w-typography>
            </w-card-content>
          </w-card>
        </w-elevation>
      <w-container>
    `
  }))
