# Kingsman Radio Button

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Radio Button follows [Material Design Text Fields Guidelines](https://www.google.com/design/spec/components/text-fields.html).

## Installation
```
$ meteor add kingsman:radio-button
```

## Usage
In HTML file:
```
<template name="yourTemplate">
	
	<h1>Radio Buttons without group</h1>
	{{> KM.RadioButton}}
  {{> KM.RadioButton}}
  {{> KM.RadioButton}}
  {{> KM.RadioButton}}
  
  <h1>Radio Buttons with group</h1>
  {{# KM.RadioGroup args name='test'}}
		{{> KM.RadioButton}}
	  {{> KM.RadioButton}}
	  {{> KM.RadioButton}}
	  {{> KM.RadioButton}}
  {{/ KM.RadioGroup}}
  
</template>
```

## Todo
* currently unable to uncheck radio button
