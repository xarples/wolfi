// Import vue components
import * as components from "@/components"

import { WolfiPlugin, WolfiPluginOptions } from "../wolfi"
import _Vue from "vue"
import VueCompositionApi from "@vue/composition-api"

import "./styles/base.css"
import "./styles/normalize.css"

const defaultOptions: WolfiPluginOptions = {
  colors: {
    primary: "#5e72e4",
    info: "#11cdef",
    success: "#2dce89",
    danger: "#f5365c",
    warning: "#ffdd57", //"#fb6340",
    default: "none", //"#3c4d69",
    secondary: "#f4f5f7",
    gray1: "#f6f9fc",
    gray2: "#e9ecef",
    gray3: "#e3e3e3",
    gray4: "#ced4da",
    gray5: "#adb5bd",
    gray6: "#6c757d",
    gray7: "#525f7f",
    gray8: "#32325d",
    gray9: "#212529",
    white: "white",
    transparent: "transparent"
  }
}

const plugin: WolfiPlugin = {
  install(Vue, options = defaultOptions) {
    if (this.install.installed) {
      return
    }

    this.install.installed = true

    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(componentName, component)
    })

    Vue.use(VueCompositionApi)

    Vue.mixin({
      computed: {
        baseStyles() {
          return {
            "--primary-color": options.colors.primary,
            "--info-color": options.colors.info,
            "--success-color": options.colors.success,
            "--danger-color": options.colors.danger,
            "--warning-color": options.colors.warning,
            "--default-color": options.colors.default,
            "--secondary-color": options.colors.secondary,
            "--gray1-color": options.colors.gray1,
            "--gray2-color": options.colors.gray2,
            "--gray3-color": options.colors.gray3,
            "--gray4-color": options.colors.gray4,
            "--gray5-color": options.colors.gray5,
            "--gray6-color": options.colors.gray6,
            "--gray7-color": options.colors.gray7,
            "--gray8-color": options.colors.gray8,
            "--gray9-color": options.colors.gray9,
            "--white-color": options.colors.white,
            "--transparent-color": options.colors.transparent
          }
        }
      }
    })

    Vue.prototype.$wolfi = new Vue({
      data: {
        ...options
      }
    })
  }
}

let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = (global as any).Vue
}

if (GlobalVue) {
  ;(GlobalVue as typeof _Vue).use(plugin)
}

export default plugin

export * from "@/components"
