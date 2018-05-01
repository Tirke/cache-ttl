# cache-ttl

[![npm version](https://img.shields.io/npm/v/cache-ttl.svg?style=flat-square)](https://www.npmjs.org/package/cache-ttl)
[![npm downloads](https://img.shields.io/npm/dm/cache-ttl.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cache-ttl)

The key-value storage (with TTL support SOON!), allowing you to add, modify or delete stored data items.

## Install

```
$ npm install cache-ttl
```

## How to use

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
import Cache from 'cache-ttl';
// OR import { Cache } from 'cache-ttl';

Cache.set('foo', 'bar');
console.log(Cache.get<string>('foo'));
```

## Advanced usage

```js
Cache.count(); // Count items
Cache.remove('foo'); // Remove item by key
Cache.clear(); // Flush cache
```
