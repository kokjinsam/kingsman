KM.RadioGroup = BlazeComponent.extendComponent(function(data) {
	var Rgroup = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    Rgroup[key] = value;
	  });
	}
	
	Rgroup.name = Rgroup.name || undefined;
	
	this.Rgroup = Rgroup;
},{
	template: function() {
		return 'kingsman_radio_group';
	},
	
	onRendered: function() {	
		if(this.Rgroup.name) {
			var group = this.find('.km-radio-group');
			for(var i = 0; i < group.children.length; i++){
				group.children[i].children[0].name = this.Rgroup.name;
			}
		}
	}
}).register('KM.RadioGroup');
