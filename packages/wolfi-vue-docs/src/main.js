// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue"

import Wolfi from "@xarples/wolfi-vue"

export default function (Vue, { router, head, isClient }) {
  Vue.use(Wolfi)

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.12.1/css/all.css",
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}
