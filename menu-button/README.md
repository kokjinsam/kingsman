# Kingsman Menu Button

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Menu follows [Material Design Menu Guidelines](https://www.google.com/design/spec/components/menus.html).

[See demo here](http://kingsman-menu.meteor.com) - No demo yet

## Installation
```
$ meteor add kingsman:menu-button
```

## Versions
* 0.0.1 - Nov 9, 2015
  * Added basic menu button specifications

## Usage
In HTML file:
```
<template name="yourTemplate">
	
	{{# KM.MenuButton}}
		{{# KM.Button args type=flat classList=classArr}}
			Menu Button
		{{/ KM.Button}}
		
		{{# KM.Menu}}
			{{# KM.Item}} Item 1 {{/ KM.Item}}
			{{# KM.Item}} Item 2 {{/ KM.Item}}
			{{# KM.Item}} Item 3 {{/ KM.Item}}
			{{# KM.Item}} Item 4 {{/ KM.Item}}
		{{/ KM.Menu}}
	{{/ KM.MenuButton}}

</template>
```

In JS file:
```
Template.yourTemplate.helpers({
	classArr: function() {
		return: ['km-menu-button__trigger', 'km-button--circle'];
	}
});
```
## Todo

