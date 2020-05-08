import path from "path"

import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import babel from "rollup-plugin-babel"

import pkg from "./package.json"

const projectRoot = path.resolve(__dirname, ".")

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
  plugins: [
    // alias({
    //   resolve: [".js", ".jsx", ".ts", ".tsx"],
    //   entries: {
    //     "@": path.resolve(projectRoot, "src"),
    //   },
    // }),
    babel(),
    commonjs(),
  ],
}
