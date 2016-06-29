FlowRouter.route('/',{
	name: 'hello',
	action: function(){
		DocHead.setTitle('Drawer Example');
		var description = {
			name: 'description',
			content: 'Polymer-like component. Drawer component built using Blaze Components'
		};
		DocHead.addMeta(description);
		
		BlazeLayout.render('layout', {content: 'hello'});
	}
});

FlowRouter.route('/test',{
	name: 'test',
	action: function(){
		DocHead.setTitle('Test');
		BlazeLayout.render('layout', {content: 'test'});
	}
});
