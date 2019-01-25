
<p align="center">
  <img src="/logo.png" alt="Wolfi">
</p>

# Wolfi 

The best vuejs components for your apps.

[![Build Status](https://travis-ci.org/glopezep/wolfi.svg?branch=master)](https://travis-ci.org/glopezep/wolfi)

## Live Playground

For examples of the wolfi in action, go to https://glopezep.github.io/wolfi.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm start`
* Visit http://localhost:9001/

## Quick-start

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://unpkg.com/wolfi@0.4.0/dist/wolfi.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <w-button>Click me</w-button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/wolfi@0.4.0/dist/wolfi.min.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## Installation

``` bash
# npm
npm install wolfi --save
```

``` bash
# yarn
yarn add wolfi
```

## Usage

```javascript
import Vue from 'vue'
import Wolfi from 'wolfi'
import 'wolfi/dist/wolfi.min.css'

Vue.use(Wolfi)
```

## Compatibility

- Supports Vue.js 2.x
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports TypeScript
- Supports [Electron](http://electron.atom.io/)
- Most components and features support IE9 and above browsers, some components and features do not support IE
