---
description: ""
sidebar: "docs"
next: "/docs/getting-started/quick-start/"
---

# Overview

> Get started with Wolfi, the world’s most popular framework for building responsive, mobile-first sites using Vue.js.

## Documentation sections

The online documentation is comprised of the following sections:

#### Essentials:

this section contains the necessary to understand how to work the layout, the different variants of typography, our brand colors and the icons that we use.

#### Customization:

customize the the theme with the colors that your prefer.

#### Components:

documentation of the components

## Important HTML globals

Wolfi employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Refer to the following sub-sections for details.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you may see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Wolfi is developed for mobile first, a strategy in which code is optimized for mobile devices first and then scales up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </head>
  ...
</html>
```

### CSS box-sizing

For more straightforward sizing in CSS, the global box-sizing value is switched from content-box to border-box. This ensures padding does not affect the final computed width of an element, but it can cause problems with some third party.

On the rare occasion you need to override it, use something like the following:

```css
.custom-class-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements — including generated content via ::before and ::after — will all inherit the specified box-sizing for that .selector-for-some-widget.

### Normalize

For improved cross-browser rendering, Wolfi uses Normalize.css to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
