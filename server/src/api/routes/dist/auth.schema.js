"use strict";
exports.__esModule = true;
exports.IsAuthenticatedSchema = exports.GoogleAuthSchema = exports.LoginSchema = void 0;
var user_schema_1 = require("./user.schema");
var LoginRequest = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            minLength: 1,
            nullable: false,
            format: 'email'
        },
        password: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: '**********'
        }
    }
};
var LoginResponse = {
    200: {
        type: 'object',
        properties: {
            token: {
                type: 'string',
                minLength: 1,
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
                nullable: false
            },
            user: user_schema_1.UserSchema
        }
    },
    401: {
        type: 'object',
        properties: {
            error: {
                type: 'string',
                minLength: 1,
                example: 'User with given credential does not exist',
                nullable: false
            }
        }
    }
};
exports.LoginSchema = {
    schema: {
        body: LoginRequest,
        response: LoginResponse
    }
};
var GoogleAuthResponse = {
    type: 'object',
    properties: {
        token: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU'
        }
    }
};
var GoogleAuthRequest = {
    type: 'object',
    additionalProperties: true
};
exports.GoogleAuthSchema = {
    schema: {
        response: {
            200: GoogleAuthResponse
        },
        body: GoogleAuthRequest
    }
};
var isAuthenticatedResponse = {
    type: 'object',
    properties: {
        logged_in: {
            type: 'boolean',
            nullable: false
        }
    }
};
var isAuthenticatedRequest = {
    type: 'object',
    properties: {
        token: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU'
        }
    }
};
exports.IsAuthenticatedSchema = {
    schema: {
        body: isAuthenticatedRequest,
        response: {
            200: isAuthenticatedResponse
        }
    }
};
