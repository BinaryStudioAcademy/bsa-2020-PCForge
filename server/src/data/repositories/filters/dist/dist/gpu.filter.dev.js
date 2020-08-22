"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.IGpuFilter = void 0;

var base_filter_1 = require("./base.filter");

var IGpuFilter =
/** @class */
function (_super) {
  var _name;

  __extends(IGpuFilter, _super);

  function IGpuFilter() {
    var _this = _super.call(this) || this;

    _this.name = null;
    return _this;
  }

  IGpuFilter.schema = {
    type: 'object',
    properties: __assign(__assign({}, base_filter_1.IFilter.schema.properties), {
      name: (_name = {
        type: 'string',
        minLength: 1
      }, _defineProperty(_name, "minLength", 1), _defineProperty(_name, "minimum", 1), _defineProperty(_name, "nullable", true), _name)
    })
  };
  return IGpuFilter;
}(base_filter_1.IFilter);

exports.IGpuFilter = IGpuFilter;