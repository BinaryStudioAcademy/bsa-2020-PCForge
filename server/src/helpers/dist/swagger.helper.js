"use strict";
exports.__esModule = true;
exports.GetMultipleQuery = exports.DeleteOneQuery = exports.UpdateOneQuery = exports.CreateOneQuery = exports.GetOneQuery = void 0;
function GetOneQuery(schema, querystring) {
    return {
        schema: {
            params: {
                id: { type: 'integer', nullable: false, minimum: 1 }
            },
            querystring: querystring,
            response: {
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
            }
        }
    };
}
exports.GetOneQuery = GetOneQuery;
function CreateOneQuery(request, response) {
    return {
        schema: {
            body: request,
            response: {
                200: response
            }
        }
    };
}
exports.CreateOneQuery = CreateOneQuery;
function UpdateOneQuery(toUpdate, newData) {
    return {
        schema: {
            params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            },
            body: toUpdate,
            response: {
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
            }
        }
    };
}
exports.UpdateOneQuery = UpdateOneQuery;
function DeleteOneQuery(schema) {
    return {
        schema: {
            params: {
                id: {
                    type: 'integer',
                    nullable: false,
                    minimum: 1
                }
            },
            response: {
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
            }
        }
    };
}
exports.DeleteOneQuery = DeleteOneQuery;
function GetMultipleQuery(schema, querystring) {
    return {
        schema: {
            querystring: querystring,
            response: {
                200: schema
            }
        }
    };
}
exports.GetMultipleQuery = GetMultipleQuery;
