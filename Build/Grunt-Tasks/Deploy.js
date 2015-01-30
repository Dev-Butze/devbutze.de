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
		grunt.task.run(['compile:js:deploy', 'uglify']);

        // Generate the webFont json file.
        grunt.task.run('compile:webfonts');

        // Minify the html.
        grunt.task.run('compile:html');
	});
};
