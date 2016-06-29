KM.RadioButton = BlazeComponent.extendComponent(function(data) {
	var radioBtn = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    radioBtn[key] = value;
	  });
	}
	
	radioBtn.label = radioBtn.label || undefined;
	radioBtn.checked = (radioBtn.checked == true) ? true : false;
	
	this.radioBtn = radioBtn;
},{
	template: function() {
		return 'kingsman_radio_button';
	},
	
	onRendered: function() {
		var radioTarget = this.find('.km-radio input');
		
		radioTarget.checked = this.radioBtn.checked;
	},
	
	/**
	 * @private
	 * @helper
	 */
	_label: function() {
		return this.radioBtn.label;
	}
}).register('KM.RadioButton');
