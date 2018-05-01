import { Cache } from '../dist';

Cache.set('foo', 'bar');
console.log(Cache.get<string>('foo'));
