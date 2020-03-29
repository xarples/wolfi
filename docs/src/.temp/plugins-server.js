import plugin_gridsome_vue_remark_5 from "/Users/Guillermo/Documents/projects/xarples/wolfi/docs/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_plugin_tailwindcss_7 from "/Users/Guillermo/Documents/projects/xarples/wolfi/docs/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_8 from "/Users/Guillermo/Documents/projects/xarples/wolfi/docs/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_vue_remark_5,
    options: {"typeName":"MarkdownPage","path":"**/*.md","baseDir":"./content","template":"./src/templates/MarkdownPage.vue","plugins":["@gridsome/remark-prismjs"],"index":["index"],"includePaths":[],"remark":{},"refs":{}}
  },
  {
    run: plugin_gridsome_plugin_tailwindcss_7,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelistPatternsChildren":[{}],"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{}]},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"presetEnvConfig":{"stage":0,"autoprefixer":false}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_8,
    options: {"id":"XX-999999999-9"}
  }
]
