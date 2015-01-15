/**
 * Grunt-Contrib-Watch
 * @description Run tasks whenever watched files change.
 * @docs https://github.com/gruntjs/grunt-contrib-watch
 */

var config = require('../Config');

module.exports = {
	options: {
		nospawn: true
	},
	html: {
		files: [config.HTML.paths.devDir + '/**/*.html'],
		tasks: ['compile:html']
	},
	css: {
		files: [config.Sass.paths.devDir + '/**/*.scss'],
		tasks: ['compile:css']
	},
	js: {
		files: [config.JavaScripts.paths.devDir + '/**/*.js'],
		tasks: ['compile:js']
	},
	jshint: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	}
};
