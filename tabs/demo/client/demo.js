Template.hello.onCreated(function(){
	var instance = this;
	
	instance.activeTab = new ReactiveVar(null);
});

Template.hello.onRendered(function(){
	var tabs = BlazeComponent.getComponentForElement(this.find('.km-tabs')),
			instance = this;
	
	console.log(tabs);
	instance.autorun(function() {
		test = tabs.getActiveTab();
		instance.activeTab.set(test);
	});
	
});

Template.hello.helpers({
	selectedTab: function() {
		return Template.instance().activeTab.get();
	}
});

Template.hello.events({
	'click #changeTab': function(event, tmpl){
		var tabs = BlazeComponent.getComponentForElement(tmpl.find('.km-tabs'));
		
		tabs.setActiveTab(1);
	}
});
