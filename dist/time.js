"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.watch = function (key, ttl, expired) {
        var _this = this;
        this.timers[key] = setTimeout(function () {
            _this.unwatch(key);
            expired(key);
        }, ttl * 1000);
    };
    Time.unwatch = function (key) {
        clearTimeout(this.timers[key]);
        delete this.timers[key];
    };
    Time.unwatchAll = function () {
        var keys = Object.keys(this.timers);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.unwatch(key);
        }
    };
    Time.timers = {};
    return Time;
}());
exports.default = Time;
