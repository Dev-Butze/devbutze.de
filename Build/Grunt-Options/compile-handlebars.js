/**
 * Grunt-Compile-Handlebars
 * @description Grunt plugin to compile static html from a handlebars plugin
 * @docs https://github.com/patrickkettner/grunt-compile-handlebars
 */

var config = require('../Config');

module.exports = {
	site: {
		preHTML: config.Html.paths.partialDir + '/Header.html',
      	postHTML: config.Html.paths.partialDir + '/Footer.html',
		template: config.Html.paths.devDir + '/*.handlebars',
		templateData: config.Html.paths.devDir + '/*.json',
		output: config.Html.paths.distDir + '/*.html'
	}
};
