/**
 * Grunt-Responsive-Images
 * @description Minify PNG, JPEG and GIF images
 * @docs https://github.com/andismith/grunt-responsive-images
 */

var config = require('../Config');

module.exports = {
    images: {
        options: {
            sizes: [{
                width: 320
            },{
                name: 'medium',
                width: 700
            },{
                name: "large",
                width: 1600,
                quality: 60
            }]
        },
        files: [{
            expand: true,
            src: ['Keyvisuals/**.{jpg,gif,png}'],
            cwd: config.Images.paths.distDir + '/',
            dest: config.Images.paths.distDir + '/Responsive/'
        }]
    }
};
