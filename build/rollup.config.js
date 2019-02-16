// rollup.config.js
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify-es'
import minimist from 'minimist'
import css from 'rollup-plugin-css-only'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const argv = minimist(process.argv.slice(2))

const config = {
  input: 'src/index.js',
  output: {
    name: 'Wolfi',
    exports: 'named'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    css({
      output: './dist/wolfi.min.css'
    }),
    vue({
      css: false,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    buble({
      objectAssign: 'Object.assign',
      transforms: { forOf: false }
    })
  ]
}

if (argv.format !== 'iife') {
  config.external = [
    'simple-xgrid',
    'vue-avatar',
    'vue-awesome/icons',
    'vue-awesome/components/Icon.vue'
  ]
  config.output.globals = {
    'simple-xgrid': 'Grid',
    'vue-avatar': 'Avatar',
    'vue-awesome/components/Icon.vue': 'VIcon'
  }
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins = [
    ...config.plugins,
    resolve(),
    commonjs(),
    uglify()
  ]
}

export default config
