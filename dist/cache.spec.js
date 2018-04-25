"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('cache util', function () {
    test('should save item', function () {
        _1.Cache.set('hello', 'world');
        expect(_1.Cache.get('hello')).toBe('world');
        expect(_1.Cache.count).toBe(1);
    });
    test('should save any object', function () {
        var now = new Date();
        _1.Cache.set('hello', now);
        expect(_1.Cache.get('hello')).toBe(now);
    });
    test('should count unique keys', function () {
        _1.Cache.set('hello', 'world');
        _1.Cache.set('hello', 'world');
        _1.Cache.set('hi', 'world');
        _1.Cache.set('hey', 'world');
        expect(_1.Cache.count).toBe(3);
    });
    test('should remove item', function () {
        _1.Cache.set('hello', 'world');
        _1.Cache.remove('hello');
        expect(_1.Cache.get('hello')).toBeUndefined();
    });
    test('should clear all cache', function () {
        _1.Cache.set('hello', 'world');
        _1.Cache.set('hi', 'world');
        _1.Cache.clear();
        expect(_1.Cache.length).toBe(0);
    });
});
