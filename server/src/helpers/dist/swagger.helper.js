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
exports.GetMultipleQuery = exports.DeleteOneQuery = exports.UpdateOneQuery = exports.CreateOneQuery = exports.GetOneQuery = void 0;
function GetOneQuery(schema, querystring, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: { type: 'integer', nullable: false, minimum: 1 }
            }, querystring: querystring, response: {
                200: schema,
                404: {
                    type: 'object',
                    properties: {
                        error: {
                            type: 'string',
                            minLength: 1,
                            example: 'Item not found',
                            nullable: false
                        },
                        status: {
                            type: 'integer',
                            nullable: false,
                            example: 404
                        }
                    },
                    nullable: false
                }
            } })
    };
}
exports.GetOneQuery = GetOneQuery;
function CreateOneQuery(request, response, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { body: __assign(__assign({}, request), { additionalProperties: false }), response: {
                200: response
            } })
    };
}
exports.CreateOneQuery = CreateOneQuery;
function UpdateOneQuery(toUpdate, newData, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            }, body: __assign(__assign({}, toUpdate), { additionalProperties: false }), response: {
                200: newData,
                404: {
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
                }
            } })
    };
}
exports.UpdateOneQuery = UpdateOneQuery;
function DeleteOneQuery(schema, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            }, response: {
                200: schema,
                404: {
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
                }
            } })
    };
}
exports.DeleteOneQuery = DeleteOneQuery;
function GetMultipleQuery(schema, querystring, isProtected) {
    if (isProtected === void 0) { isProtected = true; }
    return {
        schema: __assign(__assign({}, (isProtected && getProtectionHeader())), { querystring: querystring, response: {
                200: schema
            } })
    };
}
exports.GetMultipleQuery = GetMultipleQuery;
function getProtectionHeader() {
    return {
        headers: {
            type: 'object',
            properties: {
                authorization: {
                    type: 'string',
                    example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ2Wm05L2xtTC4zUlpGRUJVeUpkRWplZkhMTGh0UGQyTU8vOEYwZDVoU205bVhFSGUwbmlNQyIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJhdmF0YXIiOm51bGwsInZlcmlmeUVtYWlsVG9rZW4iOm51bGwsInJlc2V0UGFzc3dvcmRUb2tlbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNTlaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNjBaIn0sImlhdCI6MTU5ODExMjYxOCwiZXhwIjoxNTk4MTk5MDE4fQ.yC5HktPfVdi_pXgI24Wn7rP7hLRqMsdFM6SDsoykmds',
                    description: 'It contains the token, that you get, when authorizing followed by "Bearer "',
                    nullable: false
                }
            }
        }
    };
}
