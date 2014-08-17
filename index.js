module.exports = jsbeautify;

function jsbeautify ( code, options ) {
	return require( 'js-beautify' ).js_beautify( code, options );
}

jsbeautify.defaults = {
	accept: '.js'
};
