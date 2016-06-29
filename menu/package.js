Package.describe({
  name: 'kingsman:menu',
  version: '0.0.2',
  summary: 'Kingsman Menu Component',
  git: 'https://github.com/kingsman-components/meteor-menu',
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
		'lib/menu.html',
		'lib/menu.js',
		'lib/menu.css'], 'client');
});
