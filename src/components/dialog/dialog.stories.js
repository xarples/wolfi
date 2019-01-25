import { storiesOf } from '@storybook/vue'

storiesOf('Dialog', module)
  .add('default', () => ({
    template: `
      <div style="display: flex; align-items: center; justify-content: center; position: absolute; top: 0; bottom: 0; right: 0; left: 0;">
      <w-dialog>
        <w-typography variant="headline6" gutter>
          Get this party started?
        </w-typography>
        <w-typography variant="body1" gutter>
          Dialogs are displayed at 24dp elevation and can display a shadow. They appear above other content and typically have a scrim below them that covers all app content.
        </w-typography>
      </w-dialog>
      </div>
    `
  }))
