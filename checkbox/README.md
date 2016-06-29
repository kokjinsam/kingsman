# Kingsman Checkbox

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Checkbox follows [Material Design Selection Controls Guidelines](https://www.google.com/design/spec/components/selection-controls.html).

[See demo here](http://kingsman-checkbox.meteor.com) - No demo yet.

## Installation
```
$ meteor add kingsman:checkbox
```

## Versions
* 0.0.1 - Nov. 11, 2015
  * Added basic checkbox specifications

## Usage
In HTML file:
```
<template name="yourTemplate">

  {{> KM.Checkbox args label='label' checked=true noink=false}}
  {{> KM.Checkbox args label='demo' required=true}}
  {{> KM.Checkbox args label='ooops'}}
  {{> KM.Checkbox args label='last' checked=true}}
  
</template>
```
## Todo
* nicer tick
* provide support for all attributes
