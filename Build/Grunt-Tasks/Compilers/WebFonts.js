/**
 * Compile:webfonts task.
 * Compiles the WebFonts into base64 encoded json files.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('compile:webfonts', function() {
		grunt.task.run('webfontjson');
	});
};

