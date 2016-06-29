KM.Menu = BlazeComponent.extendComponent(function(data) {
	var menu = {};
	if(data){
		for(var key in data.hash) { 
			if (data.hash.hasOwnProperty(key)) {
				menu[key] = data.hash[key];
			}
		}
	}
	
	menu.multi = (menu.multi === true) ? true: false;
	menu._selectedItems = new ReactiveField([]); //an array of selected items
	
	this.menu = menu;
},{
	template: function() {
		return 'kingsman_menu';
	},
	
	events: function() {
		return [{
			'blur .km-menu': this._onBlurMenu,
			'click .km-menu': this._onClickMenu
		}]
	},
	
	/**
	 * @private
	 * @event
	 * 
	 * remove selected class from item
	 */
	_onBlurMenu: function(event) {
		if(!this.menu.multi) {
			var target = event.target,
					targetId = this._getIndexInParent(target);
			
			this.unselectItems([targetId]);
		}
	},
	
	/**
	 * 
	 */
	_onClickMenu: function(event) {
		var target = event.target,
				targetId = this._getIndexInParent(target),
				isSelected = event.target.classList.contains('km-item--selected');
		
		if(isSelected) {
			this.unselectItems([targetId]);
		}else{
			this.selectItems([targetId]);
		}
	},
	
	/**
	 * @private
	 * @function
	 * 
	 * find selected item index in menu
	 */
	_getIndexInParent: function(node) {
		var children = node.parentNode.childNodes;
		var num = 0;
		for (var i = 0; i < children.length; i++) {
				 if (children[i] == node) return num;
				 if (children[i].nodeType == 1) num++;
		}
		return -1;
	},
	
	/**
	 * @public
	 * @function
	 * @param items array
	 * 
	 * select selected item
	 */
	selectItems: function(items) {
		var menu = this.find('.km-menu'),
				currentItems = this.menu._selectedItems();
		
		for(var i = 0; i < items.length; i++) {
			var child = menu.children[items[i]];
			child.classList.add('km-item--selected');
			
			currentItems.push(items[i]);
			this.menu._selectedItems(currentItems);
		}
	},
	
	/**
	 * @public
	 * @function
	 * @param items array
	 * 
	 * unselect selected item
	 */
	unselectItems: function(items) {
		var menu = this.find('.km-menu'),
				currentItems = this.menu._selectedItems();
		
		for(var i = 0; i < items.length; i++) {			
			var child = menu.children[items[i]];
			child.classList.remove('km-item--selected');
			
			var index = currentItems.indexOf(items[i]);
			if(index > -1) {
				currentItems.splice(index, 1);
				this.menu._selectedItems(currentItems);
			}
		}
	},
	
	/**
	 * @public
	 * @function
	 * 
	 * return selected item
	 */
	getSelectedItems: function() {
		return this.menu._selectedItems();
	},
	
	/**
	 * @public
	 * @function
	 * 
	 * check if item is selected
	 */
	isSelectedItem: function(itemIndex) {				
		return this.menu._selectedItems().indexOf(itemIndex) > -1 ? true : false;
	}
}).register('KM.Menu');
