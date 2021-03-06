# vue-fingerprints

[![npm](https://img.shields.io/npm/v/vue-fingerprints.svg) ![npm](https://img.shields.io/npm/dm/vue-fingerprints.svg)](https://www.npmjs.com/package/vue-fingerprints)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Display touch gestures and clicks on screen. Perfect for video capture.

## Demo

https://normally.github.io/vue-fingerprints/

## Install

```
yarn add vue-fingerprints
```

## Usage

```javascript
import Fingerprints from 'vue-fingerprints'
export default {
  components: {
    Fingerprints
  },
  ...
}
```
After that, use it in your main template:

```html
<fingerprints/>
```

## Additional Options

```html
<fingerprints size="50" color="rgba(255,255,255,0.8)" shadow="true"/>
```

## Authors
- Nic Mulvaney - [Normally](http://normally.com)
