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
exports.IGameFilter = void 0;
var base_filter_1 = require("./base.filter");
var types_1 = require("./types");
var IGameFilter = /** @class */ (function (_super) {
    __extends(IGameFilter, _super);
    function IGameFilter() {
        var _this = _super.call(this) || this;
        _this.name = null;
        _this.year = types_1.notNull;
        _this.orderBy = null;
        return _this;
    }
    IGameFilter.schema = {
        type: 'object',
        properties: __assign(__assign({}, base_filter_1.IFilter.schema.properties), { year: {
                type: 'integer',
                nullable: true
            }, name: {
                type: 'string',
                minLength: 1,
                nullable: true
            }, orderBy: {
                type: 'object',
                properties: {
                    cpu: {
                        type: 'object',
                        properties: {
                            recommended: {
                                type: 'string',
                                minLength: 1
                            }
                        }
                    },
                    gpu: {
                        type: 'object',
                        properties: {
                            recommended: {
                                type: 'string',
                                minLength: 1
                            }
                        }
                    },
                    ram: {
                        type: 'object',
                        properties: {
                            recommended: {
                                type: 'string',
                                minLength: 1
                            }
                        }
                    }
                },
                nullable: true
            } })
    };
    return IGameFilter;
}(base_filter_1.IFilter));
exports.IGameFilter = IGameFilter;
