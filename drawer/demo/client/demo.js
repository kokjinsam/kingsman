Template.hello.onCreated(function(){
	instance = this;
	instance.rightState = new ReactiveVar('close');
	instance.leftState = new ReactiveVar('close');
});

Template.hello.onRendered(function() {
	var instance = this,
			leftDrawer = BlazeComponent.getComponentForElement(document.getElementsByClassName('km-drawer--left')[0]),
			rightDrawer = BlazeComponent.getComponentForElement(document.getElementsByClassName('km-drawer--right')[1]);
	
	instance.autorun(function(){
		instance.leftState.set(leftDrawer.isOpen()?'open':'close');
		instance.rightState.set(rightDrawer.isOpen()?'open':'close');
	});
});

Template.hello.events({
	'click #left': function(e, t) {
    console.log('left');
    var leftDrawer = BlazeComponent.getComponentForElement(document.getElementsByClassName('km-drawer')[2]);
    
    leftDrawer.toggle();
  },
  
	'click #right': function(e, t) {
    console.log('right');
    var rightDrawer = BlazeComponent.getComponentForElement(document.getElementsByClassName('km-drawer--right')[1]);
		
		rightDrawer.toggle();
  }
});

Template.hello.helpers({
	_leftState: function() {
		return Template.instance().leftState.get();
	},
	
	_rightState: function() {
		return Template.instance().rightState.get();
	},
	
	configs: function() {
		return {
			width: 400,
			drawerLocation: '__blaze-root'
		}
	}
});
