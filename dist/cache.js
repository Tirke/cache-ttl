"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = require("./time");
var Cache = /** @class */ (function (_super) {
    __extends(Cache, _super);
    function Cache() {
        return _super.call(this) || this;
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
    Cache.set = function (key, value, ttl) {
        var _this = this;
        this.unwatch(key);
        this.cache[key] = value;
        if (ttl >= 0) {
            this.watch(key, ttl, function (key) { return _this.remove(key); });
        }
    };
    Cache.remove = function (key) {
        this.unwatch(key);
        delete this.cache[key];
    };
    Cache.clear = function () {
        this.unwatchAll();
        this.cache = {};
    };
    Cache.cache = {};
    return Cache;
}(time_1.default));
exports.default = Cache;
