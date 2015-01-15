/*
 * Head.min.js
 */

var WebFontJSONLoader = require('./Utilities/webfontjsonloader/Util.js'),
    supportsWoff2 = require('./Utilities/Feature-Detects/Woff2.js'),
    webFontUrl = (supportsWoff2) ? 'WebFonts/DevButze.woff2.json': 'WebFonts/DevButze.woff.json';


// Load the WebFont.
new WebFontJSONLoader({
	url: webFontUrl, // Path to the JSONP.
	timeStamp: '?t=01152015', // Timestamp for the cache.
	callbackName:  'devButzeAttachFonts', //JSONP callback name.
	namespace: 'devButze' // localStorage namespace for the fonts.
});
