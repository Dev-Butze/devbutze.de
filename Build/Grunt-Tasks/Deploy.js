/**
 * Deploy task
 * Recompiles the site with deployment options.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('deploy', function() {
		// Compress all images.
		grunt.task.run('compile:images');

		// Compile the stylesheets.
		grunt.task.run('compile:css:deploy');

		// Compile the javascript.
		grunt.task.run('compile:js:deploy');

		// Generate a custom modernizr build.
		grunt.task.run('modernizr:deploy');
	});
};
