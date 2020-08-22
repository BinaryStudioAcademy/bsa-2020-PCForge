"use strict";
exports.__esModule = true;
exports.UpdateNewsSchema = exports.CreateNewsSchema = exports.GetAllNewsResponse = exports.NewsSchema = void 0;
exports.NewsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        title: {
            type: 'string',
            minLength: 1,
            example: 'News title',
            nullable: false
        },
        content: {
            type: 'string',
            minLength: 1,
            example: 'Long Text goes here',
            nullable: false
        },
        image: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'http://image-server.com/route'
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
exports.GetAllNewsResponse = {
    type: 'object',
    properties: {
        meta: {
            type: 'object',
            properties: {
                globalCount: {
                    type: 'integer',
                    minimum: 0,
                    nullable: false
                }
            }
        },
        data: {
            type: 'array',
            items: exports.NewsSchema
        }
    }
};
exports.CreateNewsSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 1,
            example: 'News title',
            maxLength: 50,
            nullable: false
        },
        content: {
            type: 'string',
            minLength: 1,
            example: 'Text goes here...',
            nullable: false
        },
        image: {
            type: 'string',
            minLength: 1,
            example: 'http://image-hosting.com/route',
            maxLength: 50,
            nullable: false
        }
    }
};
exports.UpdateNewsSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 1,
            example: 'News title',
            nullable: true
        },
        power: {
            type: 'integer',
            example: 750,
            nullable: true
        },
        image: {
            type: 'string',
            minLength: 1,
            example: 'http://image-hosting.com/route',
            nullable: true
        }
    }
};
