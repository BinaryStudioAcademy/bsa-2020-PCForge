"use strict";
exports.__esModule = true;
exports.GetAllMotherBoardResponse = exports.UpdateMotherBoardSchema = exports.CreateMotherBoardSchema = exports.DetailedMotherBoardSchema = exports.MotherBoardSchema = void 0;
var ramType_schema_1 = require("./ramType.schema");
var socket_schema_1 = require("./socket.schema");
exports.MotherBoardSchema = {
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
            example: 'Motherboard name',
            nullable: false
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        ramTypeId: {
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
var createDetailedMotherboardSchema = function () {
    var schema = JSON.parse(JSON.stringify(exports.MotherBoardSchema));
    schema.properties.ramType = ramType_schema_1.RamTypeSchema;
    schema.properties.socket = socket_schema_1.SocketSchema;
    return schema;
};
exports.DetailedMotherBoardSchema = createDetailedMotherboardSchema();
exports.CreateMotherBoardSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Motherboard name',
            nullable: false
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        ramTypeId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        }
    }
};
exports.UpdateMotherBoardSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Motherboard name',
            nullable: true
        },
        socketId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        ramTypeId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        }
    }
};
exports.GetAllMotherBoardResponse = {
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
            items: exports.DetailedMotherBoardSchema
        }
    }
};
