KM.Item = BlazeComponent.extendComponent({
	template: function() {
		return 'kingsman_item';
	},
	
	onRendered: function() {
		var itemView = Blaze.currentView,
				content = itemView.templateContentBlock,
				parentNode = itemView.firstNode().parentNode;
		
		console.log(parentNode.tagName);
		if(parentNode.classList.contains('km-menu')) {
			//create li view
			var LI = HTML.LI,
					list = LI({'class': 'km-item', 'tabindex': 0}, content),
					listView = Blaze.View(function() {
						return list;
					});
					
			//render li view
			Blaze.render(listView, parentNode);
			
		}else if(parentNode.tagName == 'SELECT') {
			//create OPTION view
			var OPTION = HTML.OPTION,
					option = OPTION({'class': 'km-item', 'tabindex': 0}, content),
					optionView = Blaze.View(function() {
						return option;
					});
					
			//render OPTION view
			Blaze.render(optionView, parentNode);
			
		}else{
			//create div view
			var DIV = HTML.DIV,
					div = DIV({'class': 'km-item', 'tabindex': 0}, content),
					divView = Blaze.View(function() {
						return div;
					});
					
			//render div view
			Blaze.render(divView, parentNode);
		}
		
		this.removeDOMElement(parentNode, this.find('.km-removable'));
	}
}).register('KM.Item');
