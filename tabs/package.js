Package.describe({
  name: 'kingsman:tabs',
  version: '0.0.2_2',
  summary: 'Kingsman Tabs Component',
  git: 'https://github.com/kingsman-components/meteor-tabs',
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
  api.use('komorebi:velocityjs@1.2.3', 'client', {weak: false});
  api.use('komorebi:waves@0.7.4', 'client', {weak: false});
  
  /* Kingsman Components */
  api.use('kingsman:base@0.0.3', 'client', {weak: false});
  
  api.addFiles([
		'lib/tabs/tabs.html',
		'lib/tabs/tabs.js',
		'lib/tabs/tabs.css',
		'lib/tab/tab.html',
		'lib/tab/tab.js',
		'lib/tab/tab.css',
		], 'client');
});
