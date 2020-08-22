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
exports.RateService = void 0;
var global_helper_1 = require("../../helpers/global.helper");
var RateService = /** @class */ (function () {
    function RateService(repository) {
        this.repository = repository;
    }
    RateService.prototype.getRateById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var rate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getRateById(id)];
                    case 1:
                        rate = _a.sent();
                        if (!rate) {
                            global_helper_1.triggerServerError("Rate with id: " + id + " does not exists", 404);
                        }
                        return [2 /*return*/, rate];
                }
            });
        });
    };
    RateService.prototype.getAllRates = function (filter) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getAllRates(filter)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RateService.prototype.createRate = function (inputRate, rateMiddleware) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, rateMiddleware(inputRate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.createRate(inputRate)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RateService.prototype.getRatesAverage = function (input) {
        return __awaiter(this, void 0, Promise, function () {
            var average;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getAverageRate(input)];
                    case 1:
                        average = _a.sent();
                        return [2 /*return*/, { average: average }];
                }
            });
        });
    };
    RateService.prototype.updateRateById = function (inputRate, rateMiddleware, initiator) {
        return __awaiter(this, void 0, Promise, function () {
            var id, data, oldRate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = inputRate.id, data = inputRate.data;
                        return [4 /*yield*/, rateMiddleware(data)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.getRateById(id)];
                    case 2:
                        oldRate = _a.sent();
                        if (!oldRate) {
                            global_helper_1.triggerServerError("Rate with id: " + id + " does not exists", 404);
                        }
                        if (oldRate.userId !== initiator.id) {
                            global_helper_1.triggerServerError('Access denied', 403);
                        }
                        return [4 /*yield*/, this.repository.updateRateById(id, data)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RateService.prototype.deleteRateById = function (id, initiator) {
        return __awaiter(this, void 0, Promise, function () {
            var rate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getRateById(id)];
                    case 1:
                        rate = _a.sent();
                        if (!rate) {
                            global_helper_1.triggerServerError("Rate with id: " + id + " does not exists", 404);
                        }
                        if (rate.userId !== initiator.id) {
                            global_helper_1.triggerServerError('Access denied', 403);
                        }
                        return [4 /*yield*/, this.repository.deleteRateById(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, rate];
                }
            });
        });
    };
    return RateService;
}());
exports.RateService = RateService;
