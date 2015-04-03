var one = require('./modules/thing1.js');
var two = require('./modules/thing2.js');

console.log('[page1] ' + two.message);
one('page1');
