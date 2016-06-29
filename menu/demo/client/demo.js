Template.hello.onCreated(function(){
	var instance = this;
	
	instance.activeItem = new ReactiveVar(null);
	instance.activeItem1 = new ReactiveVar(null);
});

Template.hello.onRendered(function(){
	var menu = BlazeComponent.getComponentForElement(this.find('.km-menu')),
			instance = this;
	
	instance.autorun(function() {
		test = menu.getSelectedItem();
		instance.activeItem.set(test);
	});
	
	var menu1 = BlazeComponent.getComponentForElement(this.findAll('.km-menu')[2])
	
	instance.autorun(function() {
		test1 = menu1.getSelectedItem();
		instance.activeItem1.set(test1);
	});
});

Template.hello.helpers({
	selectedItem: function() {
		return Template.instance().activeItem.get();
	},
	
	selectedItem1: function() {
		return Template.instance().activeItem1.get();
	}
});

Template.hello.events({
	'click #changeItem': function(event, tmpl){
		var menu = BlazeComponent.getComponentForElement(tmpl.find('.km-menu'));
		
		menu.setSelectedItem(1);
	},
	
	'click #changeItem1': function(event, tmpl){
		var menu = BlazeComponent.getComponentForElement(tmpl.findAll('.km-menu')[2]);
		
		menu.setSelectedItem(3);
	}
});
