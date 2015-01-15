/**
 * Compile HTML task.
 * Minifies all html files.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('compile:html', function(mode) {
		mode = (!mode) ? 'dev' : mode;

		// (Re-)Compile the stylesheets.
		grunt.task.run('htmlmin:' + mode);
	});
};

