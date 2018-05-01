# cache-ttl

[![npm version](https://img.shields.io/npm/v/cache-ttl.svg?style=flat-square)](https://www.npmjs.org/package/cache-ttl)
[![npm downloads](https://img.shields.io/npm/dm/cache-ttl.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cache-ttl)

The key-value storage with TTL support, allowing you to add, modify or delete stored data items.

## Installation

```
npm install --save cache-ttl
```

## Example

**JavaScript:**

```js
const cache = require('cache-ttl').Cache;
// OR const cache = require('cache-ttl').default;
// OR const { Cache } = require('cache-ttl');

cache.set('foo', 'bar');
console.log(cache.get('foo'));
```

**TypeScript:**

```js
import { Cache } from 'cache-ttl';
// OR import Cache from 'cache-ttl';

Cache.set('foo', 'bar');
console.log(Cache.get<string>('foo'));
```
