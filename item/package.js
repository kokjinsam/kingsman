Package.describe({
  name: 'kingsman:item',
  version: '0.0.2',
  summary: 'Kingsman Item Component',
  git: 'https://github.com/kingsman-components/meteor-item',
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
		'lib/item/item.html',
		'lib/item/item.js',
		'lib/item/item.css',
		'lib/item_body/item_body.html',
		'lib/item_body/item_body.js',
		'lib/item_body/item_body.css'], 'client');
});
