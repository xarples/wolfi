
import Color from 'color'

const plugin = {}

plugin.install = function (Vue, options) {
  // 4. add an instance method
  Vue.prototype.$opacityColor = function $opacityColor (color, alpha) {
    return Color(color).alpha(alpha)
  }
}

export default plugin
