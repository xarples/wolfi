# Quick start

> Get started with Wolfi, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.

## Installation

```bash
npm install --save @xarples/wolfi-vue
```

## Usage

```js
import Vue from "vue"
import Wolfi from "@xarples/wolfi-vue"
import "@xarples/wolfi-vue/dist/wolfi.min.css"

import App from "./App.vue"

Vue.use(Wolfi)

new Vue({
  el: "#app",
  render: h => h(App)
})
```

## With Nuxt

```js
// src/plugins/wolfi.js

import Vue from "vue"
import Wolfi from "@xarples/wolfi-vue"
import "@xarples/wolfi-vue/dist/wolfi.min.css"

Vue.use(Wolfi)
```
