"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RamTypeService = void 0;
var global_helper_1 = require("../../helpers/global.helper");
var RamTypeService = /** @class */ (function () {
    function RamTypeService(repository) {
        this.repository = repository;
    }
    RamTypeService.prototype.getRamTypeById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var ramType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getRamTypeById(id)];
                    case 1:
                        ramType = _a.sent();
                        if (!ramType) {
                            global_helper_1.triggerServerError("Ram type with id: " + id + " does not exists", 404);
                        }
                        return [2 /*return*/, ramType];
                }
            });
        });
    };
    RamTypeService.prototype.getAllRamTypes = function (filter) {
        return __awaiter(this, void 0, Promise, function () {
            var ramTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getAllRamTypes(filter)];
                    case 1:
                        ramTypes = _a.sent();
                        return [2 /*return*/, ramTypes];
                }
            });
        });
    };
    RamTypeService.prototype.createRamType = function (inputRamType) {
        return __awaiter(this, void 0, Promise, function () {
            var ramType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.createRamType(inputRamType)];
                    case 1:
                        ramType = _a.sent();
                        return [2 /*return*/, ramType];
                }
            });
        });
    };
    RamTypeService.prototype.updateRamById = function (inputRamType) {
        return __awaiter(this, void 0, Promise, function () {
            var id, data, oldRamType, ramType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = inputRamType.id, data = inputRamType.data;
                        return [4 /*yield*/, this.repository.getRamTypeById(id)];
                    case 1:
                        oldRamType = _a.sent();
                        if (!oldRamType) {
                            global_helper_1.triggerServerError("Ram type with id: " + id + " does not exists", 404);
                        }
                        return [4 /*yield*/, this.repository.updateRamTypeById(id, data)];
                    case 2:
                        ramType = _a.sent();
                        return [2 /*return*/, ramType];
                }
            });
        });
    };
    RamTypeService.prototype.deleteRamTypeById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var ramType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getRamTypeById(id)];
                    case 1:
                        ramType = _a.sent();
                        if (!ramType) {
                            global_helper_1.triggerServerError("Ram type with id: " + id + " does not exists", 404);
                        }
                        return [4 /*yield*/, this.repository.deleteRamTypeById(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, ramType];
                }
            });
        });
    };
    return RamTypeService;
}());
exports.RamTypeService = RamTypeService;
