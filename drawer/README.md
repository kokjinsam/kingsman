# Kingsman Drawer

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Drawer follows [Material Design Guidelines](https://www.google.com/design/spec/material-design/introduction.html).
This package uses VelocityJS and HammerJS.

[See demo here](http://kingsman-drawer.meteor.com) - last updated 0ct 26, 2015

## Installation
```
$ meteor add kingsman:drawer
```

## Usage
In HTML file:
```
<template name="yourTemplate">
	
	{{# KM.Content}}
		{{# KM.Drawer args openOnLargeScreen=false edge='right' closeOnClick=false configs=configs}}
			First Drawer content
		{{/ Kingsman.Drawer}}
		
		{{# KM.Drawer}}
			Second Drawer content
		{{/ Kingsman.Drawer}}
		
		{{# KM.Drawer}}
			Third Drawer content
		{{/ Kingsman.Drawer}}
	{{/ KM.Content}}
	
</template>
```

In JS file:
```
//Below are the default values

Template.yourTemplate.helpers({
	configs: function() {
		return {
			width: 240,
			location: 'body',
			contentLocation: 'km-content'
		}
	}
});
```

### Arguments

| Arguments         | Type            | Accepted Values      |Description                                                                          |Default Value |
| ------------------|:----------------|:--------------------:|:-----------------------------------------------------------------------------------:|:------------:|
| openOnLargeScreen | Boolean         | true, false          |Force drawer to open on large screen                                                 |true          |
| edge              | String          | left, right          |Which side the drawer is coming out from                                             |left          |
| closeOnClick      | Boolean         | true, false          |Close drawer when clicking drawer                                                    |true          |

### Configurations

| Configurations  | Type            | Accepted Values           |Description                                                                          |Default Value |
| ----------------|:----------------|:-------------------------:|:-----------------------------------------------------------------------------------:|:------------:|
| width           | Number			    | any number                |Drawer width                                                                         |300           |
| drawerLocation  | String          | any CSS class             |Drawer will be appended to the location                                              |body          |
| largeScreen     | Number          | any number                |Breakpoint between large and small screen                                            |500           |
| contentLocation | String          | any CSS class             |Where your main content is located                                                   |km-content    |

## Methods
* toggle() - bring drawer in and out
* isOpen() - get current drawer state, returns boolean

## Todo
* restore touch feature
