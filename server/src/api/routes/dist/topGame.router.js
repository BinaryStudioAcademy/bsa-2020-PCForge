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
exports.router = void 0;
var topGame_schema_1 = require("./topGame.schema");
var swagger_helper_1 = require("../../helpers/swagger.helper");
var base_filter_1 = require("../../data/repositories/filters/base.filter");
function router(fastify, opts, next) {
    var _this = this;
    var TopGameService = fastify.services.TopGameService;
    var getAllSchema = swagger_helper_1.GetMultipleQuery(topGame_schema_1.GetAllTopGames, base_filter_1.IFilter.schema);
    fastify.get('/', getAllSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var TopGames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TopGameService.getAllTopGames(request.query)];
                case 1:
                    TopGames = _a.sent();
                    reply.send(TopGames);
                    return [2 /*return*/];
            }
        });
    }); });
    var getOneSchema = swagger_helper_1.GetOneQuery(topGame_schema_1.TopGameSchema);
    fastify.get('/:id', getOneSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var id, TopGame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = request.params.id;
                    return [4 /*yield*/, TopGameService.getTopGameById(id)];
                case 1:
                    TopGame = _a.sent();
                    reply.send(TopGame);
                    return [2 /*return*/];
            }
        });
    }); });
    var createOneSchema = swagger_helper_1.CreateOneQuery(topGame_schema_1.CreateTopGameSchema, topGame_schema_1.TopGameSchema);
    fastify.post('/', createOneSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var TopGame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TopGameService.createTopGame(request.body)];
                case 1:
                    TopGame = _a.sent();
                    reply.send(TopGame);
                    return [2 /*return*/];
            }
        });
    }); });
    var updateOneSchema = swagger_helper_1.UpdateOneQuery(topGame_schema_1.UpdateTopGameSchema, topGame_schema_1.TopGameSchema);
    fastify.put('/:id', updateOneSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var id, newTopGame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = request.params.id;
                    return [4 /*yield*/, TopGameService.updateTopGameById({ id: id, data: request.body })];
                case 1:
                    newTopGame = _a.sent();
                    reply.send(newTopGame);
                    return [2 /*return*/];
            }
        });
    }); });
    var deleteOneSchema = swagger_helper_1.DeleteOneQuery(topGame_schema_1.TopGameSchema);
    fastify["delete"]('/:id', deleteOneSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var id, topGame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = request.params.id;
                    return [4 /*yield*/, TopGameService.deleteTopGameById(id)];
                case 1:
                    topGame = _a.sent();
                    reply.send(topGame);
                    return [2 /*return*/];
            }
        });
    }); });
    next();
}
exports.router = router;
