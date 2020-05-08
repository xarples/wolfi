import fs from "fs"
import path from "path"

import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import replace from "@rollup/plugin-replace"
import babel from "rollup-plugin-babel"

import pkg from "./package.json"

const projectRoot = path.resolve(__dirname, ".")

const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter((entry) => entry && entry.substring(0, 2) !== "ie")

const NODE_ENV = process.env.NODE_ENV || "development"

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
  external: ["react", "react-dom"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    alias({
      resolve: [".js", ".jsx", ".ts", ".tsx"],
      entries: {
        "@": path.resolve(projectRoot, "src"),
      },
    }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: esbrowserslist,
          },
        ],
        "@babel/preset-react",
      ],
    }),

    commonjs(),
  ],
}
