/**
 * Grunt-Contrib-Imagemin
 * @description Minify PNG, JPEG and GIF images
 * @docs https://github.com/gruntjs/grunt-contrib-imagemin
 */

var config = require('../Config');

module.exports = {
	images : {
		options : {
			optimizationLevel: config.Images.optimizationLevel,
            svgoPlugins: [{ removeViewBox: false }]
		},
		files: [{
			expand: true,
			cwd: config.Images.paths.devDir,
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: config.Images.paths.distDir
		}]
	}
};
