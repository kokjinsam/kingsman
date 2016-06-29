KM.Checkbox = BlazeComponent.extendComponent(function(data){
	var checkbox = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    checkbox[key] = value;
	  });
	}
	
	checkbox.idList = checkbox.idList || undefined;
	checkbox.classList = checkbox.classList || undefined;
	
	checkbox.noink = (checkbox.noink === true) ? true: false;
	checkbox.floatLabel = (checkbox.floatLabel === false) ? false: true;
	checkbox.label = checkbox.label || undefined;
	
	checkbox.disabled = (checkbox.disabled === true) ? true: false;
	checkbox.autofocus = (checkbox.autofocus === true) ? true: false;
	checkbox.autocomplete = (checkbox.autocomplete === true) ? true: false;
	checkbox.readonly = (checkbox.readonly === true) ? true: false;
	checkbox.checked = (checkbox.checked === true) ? true: false;
	checkbox.required = (checkbox.required === true) ? true: false;
	
	checkbox.value = checkbox.value || undefined;
	
	this.checkbox = checkbox;
	
},{
	template: function() {
		return 'kingsman_checkbox';
	},
	
	onRendered: function() {
		var checkbox = this.checkbox,
				checkboxInput = this.find('.km-checkbox input');
		
		checkboxInput.disabled = checkbox.disabled;
		checkboxInput.autofocus = checkbox.autofocus;
		checkboxInput.readonly = checkbox.readonly;
		checkboxInput.autocomplete = checkbox.autocomplete;
		checkboxInput.checked = checkbox.checked;
		checkboxInput.required = checkbox.required;
		
		if(checkbox.value) {
			checkboxInput.value = checkbox.value;
		}
		
		if(!checkbox.noink) {
			checkboxInput.nextElementSibling.classList.add('waves-effect');
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_label: function() {
		return this.checkbox.label;
	}
}).register('KM.Checkbox');
