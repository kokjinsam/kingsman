Package.describe({
  name: 'kingsman:base',
  version: '0.0.4',
  summary: 'Base for Kingsman Components',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
		'ecmascript',
  ], ['client']);
  
  api.use('peerlibrary:blaze-components@0.13.0', 'client', {weak: false});
	
  api.addFiles([
		'lib/base.js',], 'client');
		
  api.export('KM');
});
