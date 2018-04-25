"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cache = /** @class */ (function () {
    function Cache() {
    }
    Object.defineProperty(Cache, "count", {
        get: function () {
            return Object.keys(this.cache).length;
        },
        enumerable: true,
        configurable: true
    });
    Cache.get = function (key) {
        return this.cache[key];
    };
    Cache.set = function (key, value) {
        this.cache[key] = value;
    };
    Cache.remove = function (key) {
        delete this.cache[key];
    };
    Cache.clear = function () {
        this.cache = {};
    };
    Cache.cache = {};
    return Cache;
}());
exports.Cache = Cache;
