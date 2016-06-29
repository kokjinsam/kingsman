# Kingsman Tabs

**This package is currently under active development, not suitable for use**

## Introduction
Kingsman Tabs follows [Material Design Tabs Guidelines](https://www.google.com/design/spec/components/tabs.html).

[See demo here](http://kingsman-tabs.meteor.com) - No demo yet.

## Installation
```
$ meteor add kingsman:tabs
```

## Versions
* 0.0.1 - Nov. 3, 2015
  * Added basic tabs specifications

## Usage
Attention: In order to have Tabs component work, please make sure that both
```KM.Tabs``` (plural) and ```KM.Tab```(singular) are in your code. 
For example, in HTML file:
```
<template name="yourTemplate">

	<!-- this is a container for all tabs -->
	{{# KM.Tabs args type='fixed' configs=configs}}
		
		<!-- these are the tabs -->
		{{# KM.Tab}} Tab 1 {{/KM.Tab}}
		{{# KM.Tab}} Tab 2 {{/KM.Tab}}
		{{# KM.Tab}} Tab 3 {{/KM.Tab}}
	{{/ KM.Tabs}}
	
</template>
```

In JS file:
```
//Below are the default values

Template.yourTemplate.helpers({
	configs: {
		maxLength: 500,
		minLength: 500
	}
});
```

### Configurations for KM.Tabs

| Configurations  | Type     | Accepted Values  |Description  |Default Value |
| ----------------|:--------:|:----------------:|:-----------:|:------------:|
| type            | String	 |scrollable, fixed |n/a |fixed         |
| classList       | Array    |CSS class name    |n/a |undefined     |
| configs         | Object   |see below         |n/a |body          |

#### Accepted Values for configs

| Configurations         | Type     | Accepted Values           |Description        |Default Value |
| -----------------------|:--------:|:-------------------------:|:-----------------:|:------------:|
| maxLength              | Number   | Any number                |n/a                |fixed         |
| minLength              | Number   | Any number                |n/a |undefined     |
| alignment              | String   | full, left, right, center |n/a |full          |
| raised                 | Boolean  | true, false               |n/a |true          |
| noBar                  | Boolean  | true, false               |n/a |false         |
| noSlide                | Boolean  | true, false               |n/a |false         |
| alignBottom            | Boolean  | true, false               |n/a |true          |
| noink                  | Boolean  | true, false               |n/a |false         |

## Methods
* setActiveTab(activeTabIndex)
* getActiveTab()

##Todo
* onclick tab render template
* onclick tab find content
* support scrollable tabs
