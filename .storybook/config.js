import Vue from 'vue'
import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from 'storybook-addon-vue-info'

import wolfi from '../src'

Vue.use(wolfi)

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo)

addDecorator(
  withOptions({
    name: 'Wolfi',
    url: 'https://github.com/glopezep/wolfi',
    sidebarAnimations: true,
  })
)

configure(loadStories, module)


