# Kingsman Item

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Item follows [Material Design Menu Guidelines](https://www.google.com/design/spec/components/menus.html).

[See demo here](http://kingsman-item.meteor.com) - No demo yet

## Installation
```
$ meteor add kingsman:item
```

## Usage
In HTML file:
```
<template name="yourTemplate">

	<!-- Two Line Item -->
	{{# KM.Item}}
		{{# KM.ItemBody args twoLine=true}} 
			<div>First Line</div>
			<div class="km-item__body--secondary">Second line</div>
		{{/ KM.ItemBody}}
	{{/ KM.Item}}
	
	<!-- Single Line Item -->
	{{# KM.Item}}
		First Line
	{{/ KM.Item}}
	
	<!-- Single Line Item with Icon -->
	{{# KM.Item}}
		<i class="material-icons">home</i>
		First Line
	{{/ KM.Item}}

	<!-- Dropdown Menu -->
	{{# KM.Select}}
		{{# KM.Menu}}
			{{# KM.Item}} Option 1 {{/ KM.Item}}
			{{# KM.Item}} Option 2 {{/ KM.Item}}
			{{# KM.Item}} Option 3 {{/ KM.Item}}
			{{# KM.Item}} Option 4 {{/ KM.Item}}
		{{/ KM.Menu}}
	{{/ KM.Select}}
</template>
```
