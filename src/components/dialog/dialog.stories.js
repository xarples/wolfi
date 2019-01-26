import { storiesOf } from '@storybook/vue'

storiesOf('Dialog', module)
  .add('default', () => ({
    methods: {
      handleCancelClick (event) {
        console.log(event)
      }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; position: absolute; top: 0; bottom: 0; right: 0; left: 0;">
        <w-dialog
          title="Get this party started?"
          description="
            Dialogs are displayed at 24dp elevation and can display a shadow. They appear above other content and typically have a scrim below them that covers all app content.
          "
          @cancelClick="handleCancelClick"
          @confirmClick="handleCancelClick"
        >
        </w-dialog>
      </div>
    `
  }))
