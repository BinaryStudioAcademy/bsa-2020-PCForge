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
exports.CommentService = void 0;
var global_helper_1 = require("../../helpers/global.helper");
var CommentService = /** @class */ (function () {
    function CommentService(repository) {
        this.repository = repository;
    }
    CommentService.prototype.getCommentById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getCommentById(id)];
                    case 1:
                        comment = _a.sent();
                        if (!comment) {
                            global_helper_1.triggerServerError("Comment with id: " + id + " does not exists", 404);
                        }
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentService.prototype.getAllComments = function (filter) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getAllComments(filter)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommentService.prototype.createComment = function (inputComment, commentMiddleware) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentMiddleware(inputComment)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.createComment(inputComment)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommentService.prototype.updateCommentById = function (inputComment, CommentMiddleware) {
        return __awaiter(this, void 0, Promise, function () {
            var id, data, oldComment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = inputComment.id, data = inputComment.data;
                        return [4 /*yield*/, CommentMiddleware(data)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.getCommentById(id)];
                    case 2:
                        oldComment = _a.sent();
                        if (!oldComment) {
                            global_helper_1.triggerServerError("Comment with id: " + id + " does not exists", 404);
                        }
                        return [4 /*yield*/, this.repository.updateCommentById(id, data)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommentService.prototype.deleteCommentById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.getCommentById(id)];
                    case 1:
                        comment = _a.sent();
                        if (!comment) {
                            global_helper_1.triggerServerError("Comment with id: " + id + " does not exists", 404);
                        }
                        return [4 /*yield*/, this.repository.deleteCommentById(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    return CommentService;
}());
exports.CommentService = CommentService;
