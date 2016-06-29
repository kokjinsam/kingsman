KM.ItemBody = BlazeComponent.extendComponent(function(data) {
	var itemBody = {};
	if(data){
		for(var key in data.hash) { 
			if (data.hash.hasOwnProperty(key)) {
				itemBody[key] = data.hash[key];
			}
		}
	}
	
	itemBody.twoLine = itemBody.twoLine || false;
	
	this.itemBody = itemBody;
},{
	template: function() {
		return 'kingsman_item_body';
	},
	
	onRendered: function() {
		if(this.itemBody.twoLine) {
			this.find('.km-item__body').classList.add('km-item__body--two-line');
		}
	}
}).register('KM.ItemBody');
