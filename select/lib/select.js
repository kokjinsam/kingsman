KM.Select = BlazeComponent.extendComponent(function (data) {
	var select = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    select[key] = value;
	  });
	}

	select.label = select.label || undefined;
  
  this.select = select;
}, {
	template: function() {
		return 'kingsman_select';
	},
	
	onRendered: function() {
		//create label
		var LABEL = HTML.LABEL,
				label = LABEL({'class': 'km-select__label'}),
				labelView = Blaze.View(function() {
					return label;
				});
				
		//render label view
		Blaze.render(labelView, this.find('.km-select'));
		
	},
	
	/**
	 * @private
	 * @helper
	 */
	_label: function() {
		return this.select.label;
	}
}).register('KM.Select');
