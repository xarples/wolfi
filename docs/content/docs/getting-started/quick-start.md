---
description: ""
sidebar: "docs"
next: "/docs/essentials/colors/"
---

# Quick start

> Get started with Wolfi, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.

## NPM or Yarn (recommended)

After creating a project with vue-cli or custom-made (usually Webpack).

### Installation

```bash

npm install @xarples/wolfi-vue --save
// or
yarn add @xarples/wolfi-vue

```

### Usage

```js
import Vue from "vue"
import Wolfi from "@xarples/wolfi-vue"
import "@xarples/wolfi/dist/wolfi.min.css"

Vue.use(Wolfi)
```

## Standalone

Using CDN or downloading files to serve local.

### Installation

Just download or use these as CDN:

**Script**: [https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.js](https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.js).

**Style**: [https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.css](https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.css).

### Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.css"
    />
  </head>

  <body>
    <div id="app">
      <!-- Wolfi components goes here -->
    </div>

    <script src="https://unpkg.com/vue"></script>
    <!-- Full bundle -->
    <script src="https://unpkg.com/@xarples/wolfi-vue/dist/wolfi.min.js"></script>

    <script>
      new Vue({
        el: "#app"
      })
    </script>
  </body>
</html>
```

## Using Nuxt.js

Using a Nuxt.js module to keep things easier

### Installation

```bash

npm install @xarples/wolfi-nuxt --save
// or
yarn add @xarples/wolfi-nuxt

```

### Usage

Add **@xarples/wolfi-nuxt** to modules section of nuxt.config.js:

```js
{
  modules: [
    // Simple usage
    "@xarples/wolfi-nuxt",

    // Or you can customize
    [
      "@xarples/wolfi-nuxt",
      {
        theme: {
          colors: { primary: "black" }
        }
      }
    ]
  ]
}
```
