var globalOne = require('./modules/global-thing1.js');
var globalTwo = require('./modules/global-thing2.js');

var one = require('./modules/thing1.js');

console.log('[global] ' + globalOne.message);
console.log('[global] ' + globalTwo.message);
console.log('[global] ' + one.message);
