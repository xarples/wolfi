import { configure } from '@storybook/vue'

import Vue from 'vue'

const req = require.context('../src/components', true, /\.stories\.js$/)

console.log(req)


function loadStories() {

  // You can require as many stories as you need.
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)