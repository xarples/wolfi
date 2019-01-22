// Import vue components
import * as components from './components/index'
import theme from './plugins/theme'

// install function executed by Vue.use()
function install (Vue, options) {
  if (install.installed) return
  install.installed = true

  Vue.use(theme, options)

  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export components
export * from './components/index'

// Default export is library as a whole, registered via Vue.use()
export default plugin
