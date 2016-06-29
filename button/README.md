# Kingsman Button

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Button follows [Material Design Guidelines](https://www.google.com/design/spec/material-design/introduction.html).

[See demo here](http://kingsman-button.meteor.com) - last updated 0ct 28, 2015

## Installation
```
$ meteor add kingsman:button
```

## Versions
* 0.0.3 - Oct 31, 2015
  * Added circle class for button (there are some known problems, please check github)
* 0.0.2 - Oct 28, 2015
  * Added Floating Action Button
  * Added options - disabled, togglable, classList, mdi
* 0.0.1 - Oct. 25, 2015
  * Added basic button specifications

## Usage
In HTML file:
```
<template name="yourTemplate">
	<!-- Button with title -->
	{{# KM.Button args noink=false type='flat' mdi='add'disabled=true togglable=false classList=classArr}}
		Button Title
	{{/ Kingsman.Button}}
	
	<!-- Button without title -->
	{{> KM.Button args noink=false type='flat' mdi='add'disabled=true togglable=false classList=classArr}}
	
</template>
```

In JS file:
```
//Below are the default values

Template.yourTemplate.helpers({
	classArr: function () {
		return ['ohh', 'test'];
	}
});
```

| Configurations  | Accepted Values    |Description                                         |Default Value |
| ----------------|:------------------:|:--------------------------------------------------:|:------------:|
| noink           | Boolean  		       |Indicates if there should ripple effect             |false         |
| type            | raised, flat, fab	 |For more information see Material Design Guidelines |raised        |
| mdi             | String             |Material Design Icons only                          |undefined     |
| disabled        | Boolean            |Disable button                                      |false         |
| togglable       | Boolean            |Make button togglable                               |false         |
| classList       | Array              |A list of classes to add to button                  |undefined     |


## Available Classes

| Classes            |Description                                  |
| -------------------|:--------------------------------------------|
| km-button--circle  |Transform button into a circle button        |
