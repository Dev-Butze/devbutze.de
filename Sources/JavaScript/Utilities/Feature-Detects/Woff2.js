/**
 * supportsWoff2
 * @description A simple feature test for the WOFF2 font format.
 * @see https://github.com/filamentgroup/woff2-feature-test/blob/master/woff2.js
 */
var supportsWoff2 = (function( win ){
	if( !( "FontFace" in win ) ) {
		return false;
	}

    var f = new win.FontFace( "t", 'url( "data:application/font-woff2,4e" ) format( "woff2" )', {} );
    f.load();

	return f.status == 'loading';
})( window );


module.exports = supportsWoff2;