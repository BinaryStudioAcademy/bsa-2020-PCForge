"use strict";
exports.__esModule = true;
exports.UpdateAddRequestSchema = exports.CreateAddRequestSchema = exports.GetAllAddRequest = exports.AddRequestSchema = void 0;
exports.AddRequestSchema = {
    type: 'object',
    description: 'User request for adding some hardware',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        userId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        requestedType: {
            type: 'string',
            minLength: 1,
            example: 'cpu',
            "enum": ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
            nullable: false
        },
        requestBody: {
            type: 'string',
            minLength: 1,
            example: 'Request body goes here...',
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
exports.GetAllAddRequest = {
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
            items: exports.AddRequestSchema
        }
    }
};
exports.CreateAddRequestSchema = {
    type: 'object',
    properties: {
        userId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        requestedType: {
            type: 'string',
            minLength: 1,
            example: 'cpu',
            "enum": ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
            nullable: false
        },
        requestBody: {
            type: 'string',
            minLength: 1,
            example: 'Request body goes here...',
            nullable: false
        }
    }
};
exports.UpdateAddRequestSchema = {
    type: 'object',
    properties: {
        userId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        requestedType: {
            type: 'string',
            minLength: 1,
            example: 'cpu',
            "enum": ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
            nullable: true
        },
        requestBody: {
            type: 'string',
            minLength: 1,
            example: 'Request body goes here...',
            nullable: true
        }
    }
};
