"use strict";
exports.__esModule = true;
exports.GetAllCpusResponse = exports.UpdateCpuSchema = exports.CreateCpuSchema = exports.DetailedCpuSchema = exports.CpuSchema = void 0;
var socket_schema_1 = require("./socket.schema");
exports.CpuSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        name: {
            type: 'string',
            minLength: 1,
            example: 'Intel Celeron D 347 @ 3.06GHz',
            nullable: false
        },
        cores: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        "class": {
            type: 'string',
            minLength: 1,
            example: 'Desktop',
            nullable: false
        },
        clockspeed: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: false
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: false
        },
        performance: {
            type: 'integer',
            example: 160,
            minimum: 0,
            nullable: false
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        createdAt: {
            type: 'string',
            minLength: 1,
            nullable: false,
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            minLength: 1,
            nullable: false,
            format: 'date-time'
        }
    }
};
var createDetailedCpuSchema = function () {
    var schema = JSON.parse(JSON.stringify(exports.CpuSchema));
    schema.properties.socket = socket_schema_1.SocketSchema;
    return schema;
};
exports.DetailedCpuSchema = createDetailedCpuSchema();
exports.CreateCpuSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Intel Celeron D 347 @ 3.06GHz',
            nullable: false
        },
        cores: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        "class": {
            type: 'string',
            minLength: 1,
            example: 'Desktop',
            nullable: false
        },
        clockspeed: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: false
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: false
        },
        performance: {
            type: 'integer',
            example: 160,
            minimum: 0,
            nullable: false
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        }
    }
};
exports.UpdateCpuSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Intel Celeron D 347 @ 3.06GHz',
            nullable: false
        },
        cores: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        "class": {
            type: 'string',
            minLength: 1,
            example: 'Desktop',
            nullable: false
        },
        clockspeed: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: false
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: false
        },
        performance: {
            type: 'integer',
            example: 160,
            minimum: 0,
            nullable: false
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        }
    }
};
exports.GetAllCpusResponse = {
    type: 'object',
    properties: {
        meta: {
            type: 'object',
            properties: {
                globalCount: {
                    type: 'integer',
                    nullable: false
                },
                countAfterFiltering: {
                    type: 'integer',
                    nullable: false
                }
            }
        },
        data: {
            type: 'array',
            items: exports.DetailedCpuSchema
        }
    }
};
