"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.IRamFilter = void 0;
var base_filter_1 = require("./base.filter");
var types_1 = require("./types");
var IRamFilter = /** @class */ (function (_super) {
    __extends(IRamFilter, _super);
    function IRamFilter() {
        var _this = _super.call(this) || this;
        _this.typeId = types_1.notNull;
        _this.memorySize = {
            minValue: 0,
            maxValue: 100
        };
        _this.name = null;
        return _this;
    }
    IRamFilter.schema = {
        type: 'object',
        properties: __assign(__assign({}, base_filter_1.IFilter.schema.properties), { typeId: {
                type: 'number',
                minimum: 1,
                nullable: true
            }, name: {
                type: 'string',
                minLength: 1,
                minimum: 1,
                nullable: true
            } })
    };
    return IRamFilter;
}(base_filter_1.IFilter));
exports.IRamFilter = IRamFilter;
