var helpers = require('./Build/Libary/Helpers');

module.exports = function(grunt) {
	'use strict';

	// Display the execution time of grunt tasks
	require('time-grunt')(grunt);

	// Load all grunt-tasks in 'Build/Grunt-Options'.
	var gruntOptionsObj = require('load-grunt-configs')(grunt, {
		'config' : {
			src: 'Build/Grunt-Options/*.js'
		}
	});
	grunt.initConfig(gruntOptionsObj);

	// Load all grunt-plugins that are specified in the 'package.json' file.
	require('jit-grunt')(grunt);


	/**
	 * Default grunt task.
	 * Compiles the complete site with dev options.
	 */
	grunt.registerTask('default', function() {
		grunt.task.run(['compile:html', 'compile:css', 'compile:webfonts', 'jshint', 'compile:js']);
	});


	/**
	 * Load custom tasks
	 * Load all Grunt-Tasks inside the 'Build/Grunt-Tasks' dir.
	 */
	grunt.loadTasks('Build/Grunt-Tasks/Compilers');
	grunt.loadTasks('Build/Grunt-Tasks');
};
