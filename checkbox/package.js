Package.describe({
  name: 'kingsman:checkbox',
  version: '0.0.1',
  summary: 'Kingsman Checbox Component',
  git: 'https://github.com/kingsman-components/meteor-checkbox',
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
  
  /* Komorebi */
  api.use('komorebi:waves@0.7.4', 'client', {weak: false});
  
  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/checkbox.html',
		'lib/checkbox.js',
		'lib/checkbox.css'
		], 'client');
});
