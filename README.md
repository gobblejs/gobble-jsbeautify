# gobble-jsbeautify

Beautify JavaScript files with gobble and [js-beautify](https://github.com/beautify-web/js-beautify).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-jsbeautify
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'uglycode' ).map( 'jsbeautify', jsBeautifyOptions );
```

The js-beautify options are as per the [documentation](https://github.com/beautify-web/js-beautify#options).

## Source code

```js
module.exports = jsbeautify;

function jsbeautify ( code, options ) {
  return require( 'js-beautify' ).js_beautify( code, options );
}

jsbeautify.defaults = {
  accept: '.js'
};
```


## License

MIT. Copyright 2014 Rich Harris
