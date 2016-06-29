KM.Tab = BlazeComponent.extendComponent(function(data){
	var tab = {};
	if(data){
	  for(var key in data.hash) { 
			if (data.hash.hasOwnProperty(key)) {
				tab[key] = data.hash[key];
			}
		}
	}

	tab.template = tab.template || undefined;
	tab.content = tab.content || undefined;
	tab.classList = tab.classList || undefined;
	tab.disabled = tab.disabled || false;
	tab.mdi = tab.mdi || undefined,
	tab.noink = new ReactiveField(false);
	
	this.tab = tab;
	
},{
	template: function() {
		return 'kingsman_tab';
	},
	
	onRendered: function() {
		var parent = BlazeComponent.getComponentForElement(this.find('.km-tab').parentNode);
				noink = parent.tabs.noink;
				
		this.tab.noink(noink);
	},
	
	events: function() {
		return [{
			'click .km-tab': this._onClickTab
		}];
	},
	
	/**
	 * @private
	 * @event  
	 * 
	 * set current active tab
	 */
	_onClickTab: function(event) {
		if(!this.tab.disabled) {
			var children = event.target.parentNode.children,
					currentChild = event.target,
					whereIsTheChild = 0;
			
			for(var i = 0; i < children.length; i++){
				if(children[i] == currentChild){
					whereIsTheChild = i;
				};
			}
			
			var tabs = BlazeComponent.getComponentForElement(event.target.parentNode);
			tabs.setActiveTab(whereIsTheChild);
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_waves: function() {
		if(!this.tab.disabled) { 
			return this.tab.noink() ? '': 'waves-effect';
		}
		
		return '';
	},
	
	/**
	 * @private
	 * @helper
	 */
	_mdi: function() {
		return this.tab.mdi;
	},
	
	/**
	 * @private
	 * @helper
	 */
	_disabled: function() {
		return this.tab.disabled ? 'km-tab--disabled':'';
	}
}).register('KM.Tab');
