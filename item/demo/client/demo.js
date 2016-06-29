Template.hello.onRendered(function(){
	var item = this.find('.km-item');
	console.log(item);
	
	var itemCom = BlazeComponent.getComponentForElement(item);
	console.log(itemCom);
});
