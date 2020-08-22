"use strict";
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
var user_schema_1 = require("./user.schema");
var swagger_helper_1 = require("../../helpers/swagger.helper");
var userRequest_middlewarre_1 = require("../middlewares/userRequest.middlewarre");
var global_helper_1 = require("../../helpers/global.helper");
var allowFor_middleware_1 = require("../middlewares/allowFor.middleware");
function router(fastify, opts, next) {
    var _this = this;
    var UserService = fastify.services.UserService;
    var preHandler = userRequest_middlewarre_1.userRequestMiddleware(fastify);
    var getAllSchema = swagger_helper_1.getMultipleQuery(user_schema_1.GetAllUsersSchema);
    fastify.get('/', __assign(__assign({}, getAllSchema), { preHandler: preHandler }), function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allowFor_middleware_1.allowForAuthorized(request);
                    return [4 /*yield*/, UserService.getUsers()];
                case 1:
                    users = _a.sent();
                    reply.send(users);
                    return [2 /*return*/];
            }
        });
    }); });
    var getOneSchema = swagger_helper_1.getOneQuery(user_schema_1.UserSchema);
    fastify.get('/:id', __assign(__assign({}, getOneSchema), { preHandler: preHandler }), function (request, reply) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowFor_middleware_1.allowForAuthorized(request);
                        id = request.params.id;
                        return [4 /*yield*/, UserService.getUser(id)];
                    case 1:
                        user = _a.sent();
                        reply.send(user);
                        return [2 /*return*/];
                }
            });
        });
    });
    var createSchema = swagger_helper_1.createOneQuery(user_schema_1.CreateUserSchema, user_schema_1.UserSchema, false);
    fastify.post('/', createSchema, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserService.createUser(request.body)];
                case 1:
                    user = _a.sent();
                    reply.send(user);
                    return [2 /*return*/];
            }
        });
    }); });
    var updateSchema = swagger_helper_1.updateOneQuery(user_schema_1.UpdateUserSchema, user_schema_1.UserSchema);
    fastify.put('/:id', __assign(__assign({}, updateSchema), { preHandler: preHandler }), function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var id, body, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allowFor_middleware_1.allowForAuthorized(request);
                    id = request.params.id;
                    body = request.body;
                    if (request.user.id !== +id && !request.user.isAdmin) {
                        global_helper_1.triggerServerError('Access Denied', 403);
                    }
                    return [4 /*yield*/, UserService.updateUser(id, body)];
                case 1:
                    user = _a.sent();
                    reply.send(user);
                    return [2 /*return*/];
            }
        });
    }); });
    var deleteOneSchema = swagger_helper_1.deleteOneQuery(user_schema_1.UserSchema);
    fastify["delete"]('/:id', __assign(__assign({}, deleteOneSchema), { preHandler: preHandler }), function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        var id, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allowFor_middleware_1.allowForAdmin(request);
                    id = request.params.id;
                    return [4 /*yield*/, UserService.deleteUser(id)];
                case 1:
                    user = _a.sent();
                    reply.send(user);
                    return [2 /*return*/];
            }
        });
    }); });
    next();
}
exports.router = router;
