Package.describe({
  name: 'kingsman:drawer',
  version: '0.0.5_2',
  summary: 'Kingsman Drawer Component',
  git: 'https://github.com/kingsman-components/meteor-drawer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use([
		'templating',
		'ecmascript'
  ], ['client']);

  api.use('hammer:hammer@=2.0.4_1', 'client', {weak: false});
  
  /* Peerlibrary */
  api.use('peerlibrary:blaze-components@0.15.0', 'client', {weak: false});
  api.use('peerlibrary:reactive-field@0.1.0', 'client', {weak: false});
  
  /* Komorebi */
  api.use('komorebi:velocityjs@1.2.3', 'client', {weak: false});
  api.use('komorebi:waves@0.7.4', 'client', {weak: false});
  
  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  api.use('kingsman:button@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/drawer/drawer.html',
		'lib/drawer/drawer.js',
		'lib/drawer/drawer.css',
		'lib/content/content.html',
		'lib/content/content.js',
		'lib/content/content.css',
		], 'client');
});
