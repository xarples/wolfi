import commonjs from "@rollup/plugin-commonjs"
import babel from "rollup-plugin-babel"

import pkg from "./package.json"

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [babel(), commonjs()],
}
