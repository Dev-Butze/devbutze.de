/**
 * Compile HTML task.
 * (Re-)Compiles all Sass stylesheets.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('compile:html', function(mode) {
		mode = (!mode) ? 'site' : mode;

		// (Re-)Compile the stylesheets.
		grunt.task.run('compile-handlebars:' + mode);
	});
};

