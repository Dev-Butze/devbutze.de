/**
 * Grunt-Compile-Handlebars
 * @description Grunt plugin to compile static html from a handlebars plugin
 * @docs https://github.com/patrickkettner/grunt-compile-handlebars
 */

var config = require('../Config');
console.log(config.Html)
module.exports = {
	site: {
		"template": config.Html.paths.devDir + "/*.handlebars",
		"templateData": config.Html.paths.devDir + "/*.json",
		"output": config.Html.paths.distDir + "/*.html"
	}
};
