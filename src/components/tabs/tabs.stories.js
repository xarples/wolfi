import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WTabs from './tabs.vue'
import WTab from './tab.vue'

const stories = storiesOf('Tabs', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    data () {
      return {
        current: 1
      }
    },
    methods: {
      handleClick (e, tabIndex) {
        this.current = tabIndex
      }
    },
    components: { WTabs, WTab },
    template: `
      <div>
        <w-tabs fullWidth>
          <w-tab icon="clock" :active="current === 1" @click="handleClick($event, 1)">Recents</w-tab>
          <w-tab icon="map-marker" :active="current === 2" @click="handleClick($event, 2)">Nearby</w-tab>
          <w-tab icon="heart" :active="current === 3" @click="handleClick($event, 3)">Favorites</w-tab>
        </w-tabs>
      </div>
    `
  }), {
    info: {}
  })
