// require:
var lib = require('package/lib');
var modA = require('./foo');
var modB = require('./bar');

// some behaviour for our module
function foo(){
    lib.log('hello world!');
}

// export (expose) foo to other modules
exports.foo = foo;