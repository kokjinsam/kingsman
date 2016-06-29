KM.Button = BlazeComponent.extendComponent(function (data) {
	var btn = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    btn[key] = value;
	  });
	}
  btn.noink = btn.noink || false;
  btn.event = btn.event || undefined;
  btn.type = btn.type || 'raised'; //raised, flat, fab
  btn.mdi = btn.mdi || undefined;
  btn.disabled = btn.disabled || false;
  btn.togglable = btn.togglable || false;
	
  btn._isToggled = new ReactiveField(false);
  
  this.btn = btn;
}, {
	template: function() {
		return 'kingsman_button';
	},
	
	events: function() {
		return [{
			'click .km-button__raised': this._onClickTogglableButton,
			'click .km-button__flat': this._onClickTogglableButton,
			'click .km-button__fab': this._onClickTogglableButton,
		}];
	},
	
	/**
	 * @private
	 * @event
	 * 
	 * Set button toggle state
	 */
	_onClickTogglableButton: function(event) {
		if(this.btn.togglable == true) {
			var _this = this;
					btn = _this.btn,
					type = btn.type,
					raised = 'km-button__raised--toggled',
					flat = 'km-button__flat--toggled',
					fab = 'km-button__fab--toggled';
			
			if(btn._isToggled() == false) {
				if(type == 'raised') {
					event.target.classList.add(raised);
				}
				
				if(type == 'flat') {
					event.target.classList.add(flat);
				}
				
				if(type == 'fab') {
					event.target.classList.add(fab);
				}
			}
			
			if(btn._isToggled() == true) {
				if(type == 'raised' && event.target.classList.contains(raised)) {
					event.target.classList.remove(raised);
				}
				
				if(type == 'flat' && event.target.classList.contains(flat)) {
					event.target.classList.remove(flat);
				}
				
				if(type == 'fab' && event.target.classList.contains(fab)) {
					event.target.classList.remove(fab);
				}
			}
			
			btn._isToggled(!btn._isToggled());
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_waves: function() {
		return this.btn.noink ? '': 'waves-effect';
	},
	
	/**
	 * @private
	 * @helper
	 */
	_mdi: function() {
		return this.btn.mdi;
	},
	
	/**
	 * @private
	 * @helper
	 */
	_type: function() {
		var type = this.btn.type,
				raised = 'km-button__raised',
				flat = 'km-button__flat',
				fab = 'km-button__fab';
				
		if(type == 'raised') {
			return raised;
		}
		
		if(type == 'flat') {
			return flat;
		}
		
		if(type == 'fab') {
			return fab;
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_disabled: function() {
		return this.btn.disabled ? 'disabled':'';
	},
	
	/**
	 * @private
	 * @helper
	 */
	_classList: function() {
		return this.btn.classList;
	}
}).register('KM.Button');

