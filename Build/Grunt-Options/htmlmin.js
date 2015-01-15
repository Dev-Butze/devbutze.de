/**
 * Grunt-Contrib-htmlmin
 * @description Minify HTML
 * @docs https://github.com/gruntjs/grunt-contrib-htmlmin
 */

var config = require('../Config');

module.exports = {
	dev: {
		options: {
			removeComments: true,
			collapseWhitespace: true
		},
		files: [{
			expand: true,
			cwd: config.HTML.paths.devDir + '/',
			src: '**/*.html',
			dest: config.HTML.paths.distDir + '/',
		}]
	}
};
