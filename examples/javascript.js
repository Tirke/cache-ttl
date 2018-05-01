const cache = require('../dist').default;

cache.set('foo', 'bar');
console.log(cache.get('foo'));
