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
exports.__esModule = true;
exports.getMultipleQuery = exports.deleteOneQuery = exports.updateOneQuery = exports.createOneQuery = exports.getOneQuery = exports.queryTypes = void 0;
var queryTypes;
(function (queryTypes) {
    queryTypes[queryTypes["getOne"] = 0] = "getOne";
    queryTypes[queryTypes["getMultiple"] = 1] = "getMultiple";
    queryTypes[queryTypes["createOne"] = 2] = "createOne";
    queryTypes[queryTypes["updateOne"] = 3] = "updateOne";
    queryTypes[queryTypes["deleteOne"] = 4] = "deleteOne";
})(queryTypes = exports.queryTypes || (exports.queryTypes = {}));
function getOneQuery(schema, querystring, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: { type: 'integer', nullable: false, minimum: 1 }
            }, querystring: querystring, response: __assign({ 200: schema, 404: getNotFoundHeader() }, (isProtected && { 403: getForbiddenHeader() })) })
    };
}
exports.getOneQuery = getOneQuery;
function createOneQuery(request, response, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { body: __assign(__assign({}, request), { additionalProperties: false }), response: __assign({ 200: response }, (isProtected && { 403: getForbiddenHeader() })) })
    };
}
exports.createOneQuery = createOneQuery;
function updateOneQuery(toUpdate, newData, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            }, body: __assign(__assign({}, toUpdate), { additionalProperties: false }), response: __assign({ 200: newData, 404: getNotFoundHeader() }, (isProtected && { 403: getForbiddenHeader() })) })
    };
}
exports.updateOneQuery = updateOneQuery;
function deleteOneQuery(schema, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            }, response: __assign({ 200: schema, 404: getNotFoundHeader() }, (isProtected && { 403: getForbiddenHeader() })) })
    };
}
exports.deleteOneQuery = deleteOneQuery;
function getMultipleQuery(schema, querystring, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { querystring: querystring, response: __assign({ 200: schema }, (isProtected && { 403: getForbiddenHeader() })) })
    };
}
exports.getMultipleQuery = getMultipleQuery;
function getForbiddenHeader() {
    return {
        type: 'object',
        properties: {
            error: {
                type: 'string',
                minLength: 1,
                example: 'Access Denied',
                nullable: false
            },
            status: {
                type: 'integer',
                nullable: false,
                example: 403
            }
        },
        nullable: false
    };
}
function getNotFoundHeader() {
    return {
        type: 'object',
        properties: {
            error: {
                type: 'string',
                minLength: 1,
                example: 'Item with id: 1 does not exists',
                nullable: false
            },
            status: {
                type: 'integer',
                nullable: false,
                example: 404
            }
        },
        nullable: false
    };
}
function getProtectionHeader() {
    return {
        headers: {
            type: 'object',
            properties: {
                authorization: {
                    type: 'string',
                    example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ2Wm05L2xtTC4zUlpGRUJVeUpkRWplZkhMTGh0UGQyTU8vOEYwZDVoU205bVhFSGUwbmlNQyIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJhdmF0YXIiOm51bGwsInZlcmlmeUVtYWlsVG9rZW4iOm51bGwsInJlc2V0UGFzc3dvcmRUb2tlbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNTlaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNjBaIn0sImlhdCI6MTU5ODExMjYxOCwiZXhwIjoxNTk4MTk5MDE4fQ.yC5HktPfVdi_pXgI24Wn7rP7hLRqMsdFM6SDsoykmds',
                    description: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2...',
                    nullable: false
                }
            }
        }
    };
}
