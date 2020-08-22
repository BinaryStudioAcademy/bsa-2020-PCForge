"use strict";
exports.__esModule = true;
exports.GetAllPowerSuppliesResponse = exports.UpdatePowerSupplySchema = exports.CreatePowerSupplySchema = exports.PowerSupplySchema = void 0;
exports.PowerSupplySchema = {
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
        power: {
            type: 'integer',
            example: 750,
            minimum: 0,
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
exports.CreatePowerSupplySchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Power supply name',
            nullable: false
        },
        power: {
            type: 'integer',
            example: 750,
            minimum: 0,
            nullable: false
        }
    }
};
exports.UpdatePowerSupplySchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'Power supply name',
            nullable: true
        },
        power: {
            type: 'integer',
            example: 750,
            minimum: 0,
            nullable: true
        }
    }
};
exports.GetAllPowerSuppliesResponse = {
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
            items: exports.PowerSupplySchema
        }
    }
};
