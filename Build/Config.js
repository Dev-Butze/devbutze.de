/**
 * Config
 * @description Configure grunt tasks & options.
 */

var Config = function() {
	'use strict';

	/*
	 * Project settings.
	 */
	this.project = {
		browserSupport: ['last 2 version', 'ie 8', 'ie 9'],
		fileBanner: function(description) { // Banner comment for compressed files.
			var banner;

			// Add a delimiter between the description(if one was passed) and the build date.
			description = (description) ? description + ' - ' : '';

			banner = '/*!\n' +
			         '* ' + description + 'Built on: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
			         '* \n' +
			         '* @package ' + this.package.name + '\n' +
			         '* @author ' + this.package.author.name + ' <' +  this.package.author.email + '>' + '\n' +
			         '*/\n';

			return banner;
		}.bind(this)
	};


	/*
	 * Meta data
	 */
	this.package = require('../package'); // Contents of the package.json.


	/*
	 * Paths
	 */
	this.paths = {
		private: 'Sources',
		public: 'Web',
		docs: 'Documentation'
	};


	/*
	 * Handlebars
	 */
	this.Html = {
		paths: {
			devDir: this.paths.private + '/Pages',
			distDir: this.paths.public
		}
	};


	/*
	 * Stylesheets
	 */
	this.Sass = {
		paths: {
			devDir: this.paths.private + '/Sass',
			distDir: this.paths.public + '/Stylesheets'
		}
	};


	/*
	 * Javascript
	 */
	this.JavaScripts = {
		paths: {
			devDir: this.paths.private + '/JavaScript',
			distDir: this.paths.public + '/JavaScript'
		},
		externals: []
	};


	/*
	 * Images
	 */
	this.Images = {
		optimizationLevel : 5,
		paths: {
			devDir: this.paths.private + '/Images',
			distDir: this.paths.public + '/Images'
		}
	};
};

// Singleton.
var config;

module.exports = (function() {
	'use strict';

	if(!config) {
		config = new Config();
	}

	return config;
}());
