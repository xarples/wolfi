---
description: ""
sidebar: "docs"
next: "/docs/components/alerts/"
---

# Theme

> Easily change the colors of your application programmatically. Rebuild the default stylesheet and customize various aspects of the Wolfi for your particular needs.

## Customizing

By default, Wolfi has a standard theme applied for all components.

```js
{
  theme: {
    colors: {
      primary: "#5e72e4",
      info: "#11cdef",
      success: "#2dce89",
      danger: "#f5365c",
      warning: "#ffdd57",
      default: "#3c4d69",
      secondary: "#f4f5f7",
      gray1: "#f6f9fc",
      gray2: "#e9ecef",
      gray3: "#e3e3e3",
      gray4: "#ced4da",
      gray5: "#adb5bd",
      gray6: "#6c757d",
      gray7: "#525f7f",
      gray8: "#32325d",
      gray9: "#212529",
      white: "white",
      transparent: "transparent"
    }
  }
}
```

This can be easily changed. Simply pass a theme property to the Wolfi constructor. You can choose to modify all or only some of the theme properties, with the remaining inheriting from the default.

```js
import Vue from "vue"
import Wolfi from "@xarples/wolfi-vue"

Vue.use(Wolfi, {
  theme: {
    colors: {
      primary: "myCustomColor"
    }
  }
})
```
