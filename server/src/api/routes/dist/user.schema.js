"use strict";
exports.__esModule = true;
exports.UpdateUserSchema = exports.CreateUserSchema = exports.GetAllUsersSchema = exports.UserSchema = void 0;
exports.UserSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        name: {
            example: 'username',
            type: 'string',
            minLength: 1,
            nullable: true,
            maxLength: 50
        },
        email: {
            example: 'example@example.com',
            type: 'string',
            minLength: 1,
            format: 'email',
            nullable: false,
            maxLength: 50
        },
        isAdmin: {
            type: 'boolean',
            nullable: false
        },
        avatar: {
            example: 'http://image-server.com/route',
            type: 'string',
            minLength: 1,
            nullable: true
        },
        createdAt: {
            type: 'string',
            minLength: 1,
            format: 'date-time',
            nullable: false
        },
        updatedAt: {
            type: 'string',
            minLength: 1,
            format: 'date-time',
            nullable: false
        }
    }
};
exports.GetAllUsersSchema = {
    type: 'array',
    items: exports.UserSchema
};
exports.CreateUserSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            minLength: 1,
            format: 'email',
            nullable: false,
            maxLength: 50
        },
        password: {
            type: 'string',
            minLength: 1,
            example: '**********',
            nullable: false,
            maxLength: 50
        }
    }
};
exports.UpdateUserSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            nullable: true,
            maxLength: 50
        },
        email: {
            type: 'string',
            minLength: 1,
            format: 'email',
            nullable: false,
            maxLength: 50
        },
        password: {
            type: 'string',
            minLength: 1,
            nullable: false,
            maxLength: 50
        },
        oldPassword: {
            type: 'string',
            minLength: 1,
            nullable: true,
            maxLength: 50
        },
        avatar: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
