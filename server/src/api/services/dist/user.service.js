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
exports.UserService = void 0;
var bcrypt = require('bcrypt');
var global_helper_1 = require("../../helpers/global.helper");
var UserService = /** @class */ (function () {
    function UserService(repository) {
        this.repository = repository;
    }
    UserService.prototype.getUserByLoginOrEmail = function (login, password) {
        return __awaiter(this, void 0, Promise, function () {
            var user, isPasswordValidForUser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!login || !password) {
                            throw { error: "You are missing login or password", status: 400 };
                        }
                        return [4 /*yield*/, this.repository.getUserByUserNameOrEmail(login)];
                    case 1:
                        user = _b.sent();
                        if (!user) return [3 /*break*/, 3];
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = 0;
                        _b.label = 4;
                    case 4:
                        isPasswordValidForUser = _a;
                        if (!isPasswordValidForUser) {
                            throw {
                                error: "Invalid login or password",
                                status: 401
                            };
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.getUsers = function () {
        return __awaiter(this, void 0, Promise, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getAllUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            global_helper_1.triggerServerError("User with id: " + id + " does not exists", 404);
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.createUser = function (inputUser) {
        return __awaiter(this, void 0, Promise, function () {
            var userAttributes, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userAttributes = __assign(__assign({}, inputUser), { isAdmin: false, password: this.hash(inputUser.password), verifyEmailToken: null, resetPasswordToken: null });
                        return [4 /*yield*/, this.repository.create(userAttributes)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.updateUser = function (id, inputUser) {
        return __awaiter(this, void 0, Promise, function () {
            var oldUser, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getById(id)];
                    case 1:
                        oldUser = _a.sent();
                        if (!oldUser) {
                            global_helper_1.triggerServerError('User with id: ${id} does not exists', 404);
                        }
                        if (inputUser.password) {
                            inputUser.password = this.hash(inputUser.password);
                        }
                        return [4 /*yield*/, this.repository.updateById(id, inputUser)];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            global_helper_1.triggerServerError("User with id: " + id + " does not exists", 404);
                        }
                        return [4 /*yield*/, this.repository.deleteById(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.hash = function (password) {
        var saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    };
    return UserService;
}());
exports.UserService = UserService;
