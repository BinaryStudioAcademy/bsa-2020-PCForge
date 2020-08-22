"use strict";
exports.__esModule = true;
exports.GetAllTopGames = exports.UpdateTopGameSchema = exports.CreateTopGameSchema = exports.TopGameSchema = void 0;
var game_schema_1 = require("./game.schema");
exports.TopGameSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        gameId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        game: game_schema_1.GameSchema,
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
exports.CreateTopGameSchema = {
    type: 'object',
    properties: {
        gameId: {
            example: 1,
            minimum: 1,
            type: 'integer',
            nullable: false
        }
    }
};
exports.UpdateTopGameSchema = {
    type: 'object',
    properties: {
        gameId: {
            example: 1,
            minimum: 1,
            type: 'integer',
            nullable: true
        }
    }
};
exports.GetAllTopGames = {
    type: 'object',
    properties: {
        meta: {
            type: 'object',
            properties: {
                globalCount: {
                    type: 'integer',
                    minimum: 0,
                    nullable: false
                },
                countAfterFiltering: {
                    type: 'integer',
                    minimum: 0,
                    nullable: false
                }
            }
        },
        data: {
            type: 'array',
            items: exports.TopGameSchema
        }
    }
};
