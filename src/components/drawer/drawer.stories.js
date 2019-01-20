import { storiesOf } from '@storybook/vue'

storiesOf('Drawer', module)
  .add('default', () => ({
    template: `
      <w-drawer>
        <w-drawer-header>
          <w-typography variant="headline6">Main</w-typography gutter>
          <w-typography variant="body2">email@material.io</w-typography>
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
