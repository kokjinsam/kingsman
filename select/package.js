Package.describe({
  name: 'kingsman:select',
  version: '0.0.1',
  summary: 'Kingsman Select Component',
  git: 'https://github.com/kingsman-components/meteor-select',
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

  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/select.html',
		'lib/select.js',
		'lib/select.css'], 'client');
});
