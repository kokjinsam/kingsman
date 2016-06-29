Package.describe({
  name: 'kingsman:radio-button',
  version: '0.0.1',
  summary: 'Kingsman Radio Button Component',
  git: 'https://github.com/kingsman-components/meteor-radio-button',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use([
		'templating',
		'ecmascript'
  ], ['client']);
  
  /* Peerlibrary */
  api.use('peerlibrary:blaze-components@0.15.0', 'client', {weak: false});
	api.use('peerlibrary:reactive-field@0.1.0', 'client', {weak: false});
	
  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/radio-button/radio-button.html',
		'lib/radio-button/radio-button.js',
		'lib/radio-button/radio-button.css',
		'lib/radio-group/radio-group.html',
		'lib/radio-group/radio-group.js',
		'lib/radio-group/radio-group.css'
		], 'client');
});
