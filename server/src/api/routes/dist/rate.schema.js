"use strict";
exports.__esModule = true;
exports.UpdateRateSchema = exports.CreateRateSchema = exports.GetAllRates = exports.GetRatesAverage = exports.RateSchema = void 0;
exports.RateSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        ratebleType: {
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
        ratebleId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        value: {
            type: 'number',
            example: 4.5,
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
exports.GetRatesAverage = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                ratebleType: {
                    type: 'string',
                    minLength: 1,
                    "enum": ['news', 'game', 'setup'],
                    nullable: true
                },
                ratebleId: {
                    type: 'integer',
                    minimum: 1,
                    nullable: true
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    average: {
                        type: 'number',
                        nullable: false,
                        example: 2.5
                    }
                }
            }
        }
    }
};
exports.GetAllRates = {
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
            items: exports.RateSchema
        }
    }
};
exports.CreateRateSchema = {
    type: 'object',
    properties: {
        ratebleType: {
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
        ratebleId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        value: {
            type: 'number',
            example: 4.5,
            minimum: 0,
            nullable: false
        }
    }
};
exports.UpdateRateSchema = {
    type: 'object',
    properties: {
        ratebleType: {
            type: 'string',
            minLength: 1,
            example: 'game',
            "enum": ['news', 'game', 'setup'],
            nullable: true
        },
        userId: {
            type: 'integer',
            example: 1,
            nullable: true
        },
        ratebleId: {
            type: 'integer',
            example: 1,
            nullable: true
        },
        value: {
            type: 'number',
            example: 4.2,
            nullable: true
        }
    }
};
