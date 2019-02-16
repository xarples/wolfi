import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Dialog', module)

stories.addDecorator(VueInfoAddon)

stories.add('default', () => ({
  methods: {
    handleCancelClick (event) {
      console.log(event)
    }
  },
  template: `
      <w-dialog
        title="Get this party started?"
        description="
          Dialogs are displayed at 24dp elevation and can display a shadow. They appear above other content and typically have a scrim below them that covers all app content.
        "
        @cancelClick="handleCancelClick"
        @confirmClick="handleCancelClick"
      >
      </w-dialog>
    `
}))
