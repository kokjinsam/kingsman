Package.describe({
  name: 'kingsman:indicator',
  version: '0.0.1',
  summary: 'Kingsman Indicator Component',
  git: 'https://github.com/kingsman-components/meteor-indicator',
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
		'lib/kitkat/kitkat.html',
		'lib/kitkat/kitkat.js',
		'lib/kitkat/kitkat.css',
		'lib/circular/circular.html',
		'lib/circular/circular.js',
		'lib/circular/circular.css',
		'lib/loader/loader.html',
		'lib/loader/loader.js',
		'lib/loader/loader.css',
		'lib/bar/bar.html',
		'lib/bar/bar.js',
		'lib/bar/bar.css',
		'lib/flip/flip.html',
		'lib/flip/flip.js',
		'lib/flip/flip.css'
		], 'client');
});
