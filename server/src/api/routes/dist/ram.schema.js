"use strict";
exports.__esModule = true;
exports.GetAllRamResponse = exports.UpdateRamSchema = exports.CreateRamSchema = exports.DetailedRamSchema = exports.RamSchema = void 0;
var ramType_schema_1 = require("./ramType.schema");
exports.RamSchema = {
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
            example: 'yam name',
            nullable: false
        },
        memorySize: {
            type: 'integer',
            example: 8,
            minimum: 0,
            nullable: false
        },
        frequency: {
            type: 'integer',
            example: 4200,
            minimum: 0,
            nullable: false
        },
        power: {
            type: 'number',
            example: 1.35,
            minimum: 0,
            nullable: false
        },
        typeId: {
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
var createDetailedRamSchema = function () {
    var schema = JSON.parse(JSON.stringify(exports.RamSchema));
    schema.properties.ramType = ramType_schema_1.RamTypeSchema;
    return schema;
};
exports.DetailedRamSchema = createDetailedRamSchema();
exports.CreateRamSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Ram name',
            nullable: false
        },
        memorySize: {
            type: 'integer',
            example: 8,
            minimum: 0,
            nullable: false
        },
        frequency: {
            type: 'integer',
            example: 4200,
            minimum: 0,
            nullable: false
        },
        power: {
            type: 'number',
            example: 1.35,
            minimum: 0,
            nullable: false
        },
        typeId: {
            type: 'number',
            example: 1,
            minimum: 0,
            nullable: false
        }
    }
};
exports.UpdateRamSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Ram name',
            nullable: true
        },
        memorySize: {
            type: 'integer',
            example: 8,
            nullable: true
        },
        frequency: {
            type: 'integer',
            example: 4200,
            nullable: true
        },
        power: {
            type: 'number',
            example: 1.35,
            nullable: true
        },
        typeId: {
            type: 'number',
            example: 1,
            nullable: true
        }
    }
};
exports.GetAllRamResponse = {
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
            items: exports.DetailedRamSchema
        }
    }
};
