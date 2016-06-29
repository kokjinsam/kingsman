Package.describe({
  name: 'kingsman:input',
  version: '0.0.2',
  summary: 'Kingsman Input Component',
  git: 'https://github.com/kingsman-components/meteor-input',
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
  api.use('komorebi:autosize@3.0.13', 'client', {weak: false});
  
  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/base/base.js',
		'lib/base/base.css',
		'lib/input/input.html',
		'lib/input/input.js',
		'lib/textarea/textarea.html',
		'lib/textarea/textarea.js'
		], 'client');
});
