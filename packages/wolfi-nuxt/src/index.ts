import path from "path"
import { Module } from "@nuxt/types"

const wolfiModule: Module<{}> = function wolfiModule(moduleOptions) {
  // @ts-ignore
  this.addPlugin(path.resolve(__dirname, "templates", "plugin.js"))
}

export default wolfiModule
