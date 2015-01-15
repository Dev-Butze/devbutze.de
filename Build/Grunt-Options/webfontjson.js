/**
 * Grunt-Webfontjson
 * @description Grunt plugin for webfontjson.
 * @docs https://github.com/ahume/grunt-webfontjson
 */

var config = require('../Config');

module.exports = {
	woff: {
		options: {
			filename: config.WebFonts.paths.distDir + '/DevButze.woff.json',
			callback: 'devButzeAttachFonts',
			fonts: [{
				'font-family': 'InterstateLight',
				'font-weight': 'normal',
				file: config.WebFonts.paths.devDir + '/interstate_light-webfont.woff',
				format: 'woff'
			}, {
				'font-family': 'InterstateRegular',
				'font-weight': 'normal',
				file: config.WebFonts.paths.devDir + '/interstate_regular-webfont.woff',
				format: 'woff'
			}]
		}
	},
	woff2: {
		options: {
			filename: config.WebFonts.paths.distDir + '/DevButze.woff2.json',
			callback: 'devButzeAttachFonts',
			fonts: [{
				'font-family': 'InterstateLight',
				'font-weight': 'normal',
				file: config.WebFonts.paths.devDir + '/interstate_light-webfont.woff2',
				format: 'woff'
			}, {
				'font-family': 'InterstateRegular',
				'font-weight': 'normal',
				file: config.WebFonts.paths.devDir + '/interstate_regular-webfont.woff2',
				format: 'woff'
			}]
		}
	}
};
