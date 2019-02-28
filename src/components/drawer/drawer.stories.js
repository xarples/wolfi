import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'

const stories = storiesOf('Drawer', module)

stories.addDecorator(withKnobs)
stories.addDecorator(VueInfoAddon)

stories
  .add('default', () => ({
    template: `
      <w-drawer>
        <w-drawer-header>
          <w-typography variant="headline6">Main</w-typography gutter>
          <w-typography variant="body2">email@test.io</w-typography>
        </w-drawer-header>
        <w-drawer-content>
          <w-list>
            <w-list-item>
              <w-typography>Inbox</w-typography>
            </w-list-item>
            <w-list-item>
              <w-typography>Sent Mail</w-typography>
            </w-list-item>
            <w-list-item>
              <w-typography>Drafts</w-typography>
            </w-list-item>
          </w-list>
          <w-divider />
          <w-list>
            <w-list-item>
              <w-typography>Settings</w-typography>
            </w-list-item>
            <w-list-item>
              <w-typography>Help and Feedbacks</w-typography>
            </w-list-item>
          </w-list>
        </w-drawer-content>
      </w-drawer>
    `
  }))
