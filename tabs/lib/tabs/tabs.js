KM.Tabs = BlazeComponent.extendComponent(function(data){
	var tabs = {};
	if(data){
		for(var key in data.hash) { 
			if (data.hash.hasOwnProperty(key)) {
				tabs[key] = data.hash[key];
			}
		}
	}
	
	tabs.type = tabs.type || 'fixed'; //scrollable, fixed
	tabs.classList = tabs.classList || undefined;
	
	configs = tabs.configs || {};
	tabs.maxLength = configs.maxLength || 500;
	tabs.minLength = configs.minLength || 500;
	tabs.alignment = configs.alignment || 'full'; //left, right, center, full
	tabs.raised = (configs.raised == false) ? false : true;
	tabs.noBar = (configs.noBar == true) ? true : false;
	tabs.noSlide = (configs.noSlide == true) ? true : false;
	tabs.alignBottom = (configs.alignBottom == false) ? false : true;
	tabs.noink = (configs.noink == true) ? true : false;
	
	tabs._activeTab = new ReactiveField(null);
	
	this.tabs = tabs;	
},{
	template: function() {
		return 'kingsman_tabs';
	},
	
	onCreated: function() {
	},
	
	onRendered: function() {
		var tabs = this.tabs;
		
		this._configureTabs();
		this.setActiveTab(tabs._activeTab());
		this.resizeHandler= this._onResizeWin.bind(this);
		
		window.addEventListener('resize', this.resizeHandler);
	},
	
	onDestroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	
	/**
	 * @private
	 * @event 
	 */
	_onResizeWin: function() {
		this.setActiveTab(this.tabs._activeTab());
	},
	
	/**
	 * @public
	 * @function
	 * @param {int} currentActive - Index of currently active tab
	 * 
	 * set tab indicator
	 * set activeTab to new tab value 
	 */
	setActiveTab: function(currentActive) {
		var _this = this,
				tabs = _this.tabs,
				previousActive = tabs._activeTab(),
				indicator,
				hasIndicator = false,
				hasIndicatorAt = 0,
				target = _this.find('.km-tabs');	
		
		//update tab index
		if(tabs._activeTab() == null || tabs._activeTab() < 0 || previousActive < 0 || previousActive == null) {
			tabs._activeTab(0);
			tabs.previousActive = 0;
		}else{
			tabs._activeTab(currentActive);
		}
		
		if(!tabs.noBar) {
			for(var j = 0; j < target.children.length; j++) {
				if(target.children[j].classList.contains('km-tabs__indicator')) {
					hasIndicator = true;
					hasIndicatorAt = j;
				}
			}
			
			if(!hasIndicator) {
				var DIV = HTML.DIV;

				if(tabs.alignBottom) {
					indicator = DIV({class: 'km-tabs__indicator km-tabs__indicator--bottom'});
				}else{
					indicator = DIV({class: 'km-tabs__indicator km-tabs__indicator--top'});
				}
				
				Blaze.render(indicator, target);
				indicator = this.find('.km-tabs__indicator');
			}else{
				indicator = target.children[hasIndicatorAt];
			}
					
			var	tabsWidth = target.offsetWidth;
					tabWidth = target.children[0].offsetWidth,
					rightPos = tabsWidth - ((currentActive + 1) * tabWidth),
					leftPos = currentActive * tabWidth;
	
			if(!hasIndicator) {
				
				//set initial indicator position
				indicator.style.right = rightPos+'px';
				indicator.style.left = leftPos+'px';
			}else{
				
				// Update indicator position
				if(!tabs.noSlide) {
					if ((currentActive - previousActive) >= 0) {
						if (window.jQuery) {
							$(indicator).velocity(
								{
									"right": rightPos
								}, { 
									duration: 300, 
									queue: false, 
									easing: 'easeOutQuad'
							});
							
							$(indicator).velocity(
								{
									"left": leftPos
								}, {
									duration: 300, 
									queue: false, 
									easing: 'easeOutQuad', 
									delay: 90
							});
						}
					}else{
						if (window.jQuery) {
							$(indicator).velocity(
								{
									"left": leftPos
								}, { 
									duration: 300, 
									queue: false, 
									easing: 'easeOutQuad'
							});
							
							$(indicator).velocity(
								{
									"right": rightPos
								}, {
									duration: 300, 
									queue: false, 
									easing: 'easeOutQuad', 
									delay: 90
							});
						}
					}
				}else{
					indicator.style.right = rightPos+'px';
					indicator.style.left = leftPos+'px';
				}
			}
		}
	},
	
	/**
	 * @private
	 * @function
	 * 
	 * setup tabs configuration
	 */
	_configureTabs: function() {
		var tabs = this.tabs,
				tabsTarget = this.find('.km-tabs');
		
		if(tabs.alignment.toString() != 'full') {
			tabsTarget.style.maxWidth = tabs.maxLength+'px';
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_type: function() {
		var type = this.tabs.type,
				fixed = 'km-tabs--fixed',
				scrollable = 'km-tabs--scrollable';
				
		if(type == 'fixed') {
			return fixed;
		}
		
		if(type == 'scrollable') {
			return scrollable;
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_classList: function() {
		return this.tabs.classList;
	},
	
	/**
	 * @private
	 * @helper
	 */
	_alignment: function() {
		var alignment = this.tabs.alignment,
				full = 'km-tabs--full',
				left = 'km-tabs--align-left',
				right = 'km-tabs--align-right',
				center = 'km-tabs--align-center';
		
		if(alignment == 'full') {
			return full;
		}
		
		if(alignment == 'left') {
			return left;
		}
		
		if(alignment == 'right') {
			return right;
		}
		
		if(alignment == 'center') {
			return center;
		}
	},
	
	/**
	 * 
	 */
	_raised: function() {
		return this.tabs.raised ? 'km-tabs--raised':'';
	},
	
	/**
	 * @public
	 * @function
	 * 
	 * return current active tab
	 */
	getActiveTab: function() {
		return this.tabs._activeTab();
	}
}).register('KM.Tabs');
