var WebFontJSONLoader = require('webfontjsonloader'),
    supportsWoff2 = require('./Utilities/Feature-Detects/Woff2.js'),
    webFontUrl = (supportsWoff2) ? 'WebFonts/DevButze.woff2.json': 'WebFonts/DevButze.woff.json';

// Load the WebFont.
new WebFontJSONLoader({
	url: webFontUrl,
	timeStamp: '?t=01152015',
    JSONPCallbackName:  'devButzeAttachFonts',
	namespace: 'devButze',
    callback: function() {}
});

// Require some polyfills
require('./Vendor/Polyfills/Html5shiv.js');
require('./Vendor/Polyfills/Picturefill.js');
