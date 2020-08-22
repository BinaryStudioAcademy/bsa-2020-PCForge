"use strict";
exports.__esModule = true;
exports.UpdateSocketSchema = exports.CreateSocketSchema = exports.GetAllSockets = exports.SocketSchema = void 0;
exports.SocketSchema = {
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
            example: 'Unique socket name',
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
exports.GetAllSockets = {
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
            items: exports.SocketSchema
        }
    }
};
exports.CreateSocketSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'socket name',
            nullable: false
        }
    }
};
exports.UpdateSocketSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'socket name',
            nullable: true
        }
    }
};
