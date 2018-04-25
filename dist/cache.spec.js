"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('cache util', function () {
    test('should save item', function () {
        _1.default.set('hello', 'world');
        expect(_1.default.get('hello')).toBe('world');
        expect(_1.default.count).toBe(1);
    });
    test('should save any object', function () {
        var now = new Date();
        _1.default.set('hello', now);
        expect(_1.default.get('hello')).toBe(now);
    });
    test('should count unique keys', function () {
        _1.default.set('hello', 'world');
        _1.default.set('hello', 'world');
        _1.default.set('hi', 'world');
        _1.default.set('hey', 'world');
        expect(_1.default.count).toBe(3);
    });
    test('should remove item', function () {
        _1.default.set('hello', 'world');
        _1.default.remove('hello');
        expect(_1.default.get('hello')).toBeUndefined();
    });
    test('should clear all cache', function () {
        _1.default.set('hello', 'world');
        _1.default.set('hi', 'world');
        _1.default.clear();
        expect(_1.default.length).toBe(0);
    });
});
