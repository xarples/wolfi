import { storiesOf } from '@storybook/vue'
import WDialog from './dialog.vue'

const stories = storiesOf('Dialog', module)

stories.add('default', () => ({
  methods: {
    handleCancelClick (event) {
      console.log(event)
    }
  },
  components: { WDialog },
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
}), {
  info: {}
})
