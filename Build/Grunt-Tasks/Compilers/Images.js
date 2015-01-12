/**
 * Compile:images task.
 * Compresses all images.
 */

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('compile:images', function() {
		// Prevent 'imagemin' from executing if the build gets tested on travis to suppress errors.
		if(grunt.option('env') !== 'travis') {
			grunt.task.run('imagemin');
		}
	});
};

