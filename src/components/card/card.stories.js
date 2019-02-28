
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories.add('default', () => ({
  template: `
      <div>
        <w-row>
          <w-column :push="7" :width="10" style="padding: 1em">
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
          </w-column>
        </w-row>
      </div>
    `
}))
