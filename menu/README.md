# Kingsman Menu

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Menu follows [Material Design Menu Guidelines](https://www.google.com/design/spec/components/menus.html).

[See demo here](http://kingsman-menu.meteor.com) - No demo yet

## Installation
```
$ meteor add kingsman:menu
```

## Versions
* 0.0.1 - Nov 5, 2015
  * Added basic menu specifications

## Usage
In HTML file:
```
<template name="yourTemplate">
	
	{{# KM.Menu args multi=true}}
		{{# KM.Item}} Item 1 {{/ KM.Item}}
		{{# KM.Item}} Item 2 {{/ KM.Item}}
		{{# KM.Item}} Item 3 {{/ KM.Item}}
		{{# KM.Item}} Item 4 {{/ KM.Item}}
	{{/ KM.Menu}}

</template>
```

## Methods
* selectItems(array)
* unselectItems(array)
* getItems()

