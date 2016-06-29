Template.hello.onCreated(function(){
	var instance = this;
	
	instance.activeMenu = new ReactiveVar(null);
});

Template.hello.onRendered(function(){
	var menu = BlazeComponent.getComponentForElement(this.find('.km-menu')),
			instance = this;
	
	this.autorun(function() {
		var test = menu.getSelectedItems();
		instance.activeMenu.set(test);
	});
});

Template.hello.helpers({
	selectedTab: function() {
		return Template.instance().activeMenu.get();
	},
	
	classArr: function() {
		return ['bottom'];
	}
});

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {content: 'hello'});
	}
});

FlowRouter.route('/second', {
	action: function() {
		BlazeLayout.render('layout', {content: 'hello2'});
	}
});
