"use strict";
exports.__esModule = true;
exports.UpdateCommentSchema = exports.CreateCommentSchema = exports.GetAllComments = exports.CommentSchema = void 0;
var user_schema_1 = require("./user.schema");
exports.CommentSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        commentableType: {
            type: 'string',
            minLength: 1,
            example: 'game',
            "enum": ['news', 'game', 'setup'],
            nullable: false
        },
        userId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        user: user_schema_1.UserSchema,
        commentableId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        value: {
            type: 'string',
            minLength: 1,
            example: 'Comment body goes here...',
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
exports.GetAllComments = {
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
            items: exports.CommentSchema
        }
    }
};
exports.CreateCommentSchema = {
    type: 'object',
    properties: {
        commentableType: {
            type: 'string',
            minLength: 1,
            example: 'game',
            "enum": ['news', 'game', 'setup'],
            nullable: false
        },
        commentableId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        userId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        token: {
            type: 'string',
            minLength: 1,
            description: 'This is token that u get while loging in',
            nullable: false,
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc4NjQ5MjQsImV4cCI6MTU5Nzk1MTMyNH0.V8oy05YtI8elNEOl5Z_1hiCZFwD3Fq_ck1bZ4_UXI3o'
        },
        value: {
            type: 'string',
            minLength: 1,
            example: 'Comment body goes here...',
            nullable: false
        }
    }
};
exports.UpdateCommentSchema = {
    type: 'object',
    properties: {
        commentableType: {
            type: 'string',
            minLength: 1,
            example: 'game',
            "enum": ['news', 'game', 'setup'],
            nullable: true
        },
        userId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        commentableId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        value: {
            type: 'string',
            minLength: 1,
            example: 'Comment body goes here...',
            nullable: true
        }
    }
};
