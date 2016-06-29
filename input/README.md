# Kingsman Input

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Input follows [Material Design Text Fields Guidelines](https://www.google.com/design/spec/components/text-fields.html).

[See demo here](http://kingsman-input.meteor.com) - No demo yet.

## Installation
```
$ meteor add kingsman:input
```

## Versions
* 0.0.1 - Nov. 10, 2015
  * Added basic input specifications

## Usage
In HTML file:
```
<template name="yourTemplate">

	<h1>Label</h1>
	{{> KM.Input args label="label" autocomplete=true multiple=true autofocus=true max=3 min=1}}
	{{> KM.Input args label="label" value="pre set value"}}
	{{> KM.Input args label="disabled" disabled=true}}
	{{> KM.Input args label="disabled" disabled=true value="pre set value disabled mode"}}
	
	<h1>No Float Label</h1>
	{{> KM.Input args label="no float label" floatLabel=false}}
	{{> KM.Input args label="no float label" floatLabel=false value="pre set value"}}
	{{> KM.Input args label="disabled no float label" floatLabel=false disabled=true}}
	{{> KM.Input args label="disabled no float label" floatLabel=false disabled=true value="pre set value disabled mode"}}

	<h1>Text Area</h1>
	{{> KM.TextArea args label="text area"}}
	{{> KM.TextArea args label="text area" value=56}}
	{{> KM.TextArea args label="disabled text area" disabled=true}}
	
	<h1>No Float Label Text Area</h1>
	{{> KM.TextArea args label="no float label text area" floatLabel=false}}
	{{> KM.TextArea args label="text area" floatLabel=false value=56}}
	{{> KM.TextArea args label="disabled no float textarea" floatLabel=false disabled=true}}
	
</template>
```

## Todo
* provide supports for all attributes
* fixed issues #1 and #2
