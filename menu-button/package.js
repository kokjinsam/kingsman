Package.describe({
  name: 'kingsman:menu-button',
  version: '0.0.3_5',
  summary: 'Kingsman Menu Button Component',
  git: 'https://github.com/kingsman-components/meteor-menu-button',
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
		'lib/menu-button.html',
		'lib/menu-button.js',
		'lib/menu-button.css'], 'client');
});
