Package.describe({
	name: 'spikeyan:jquery.mousewheel',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'jquery.mousewheel',
		// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/spikeyan/jquery-mousewheel-sp.git',
		// By default, Meteor will default to using README.md for documentation.
		// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.addFiles('jquery.mousewheel.js', 'client');
});
