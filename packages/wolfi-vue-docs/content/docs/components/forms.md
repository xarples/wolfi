---
description: ""
sidebar: "docs"
next: "/docs/components/images/"
---

import RadioSample from '~/components/RadioSample'
import SelectSample from '~/components/SelectSample'

# Forms

> Toggle contextual overlays for displaying lists of links and more.

## Radios

<RadioSample />

<w-radio disabled value="One">Disabled unchecked</w-radio>

<br/>
<br/>

<w-radio disabled>Disabled checked</w-radio>

```html
<w-radio value="One" v-model="current">
  { Value: One, Current: {{ current }} }
</w-radio>
<w-radio value="Two" v-model="current">
  { Value: Two, Current: {{ current }} }
</w-radio>
<w-radio value="Three" v-model="current">
  { Value: Three, Current: {{ current }} }
</w-radio>

<w-radio disabled value="One">Disabled unchecked</w-radio>

<w-radio disabled>Disabled checked</w-radio>
```

<br/>

## Checkboxes

<w-checkbox>Default</w-checkbox><br/>
<w-checkbox disabled>Disabled unchecked</w-checkbox><br/>
<w-checkbox checked disabled>Disabled checked</w-checkbox><br/>

```html
<w-checkbox>Default</w-checkbox>
<w-checkbox disabled>Disabled unchecked</w-checkbox>
<w-checkbox checked disabled>Disabled checked</w-checkbox>
```

<br/>

## Inputs

<w-input placeholder="name@examples.com" />

```html
<w-input placeholder="name@examples.com" />
```

<br/>

## Textarea

<w-textarea placeholder="Write a large message here" />

```html
<w-textarea placeholder="Write a large message here" />
```

<br/>

## Select

<SelectSample />

```html
<w-select v-model="selected">
  <w-select-option value="1">Test</w-select-option>
  <w-select-option value="2">Test</w-select-option>
  <w-select-option value="3">Test</w-select-option>
  <w-select-option value="4">Test</w-select-option>
</w-select>
```
