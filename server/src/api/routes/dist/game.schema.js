"use strict";
exports.__esModule = true;
exports.GetAllGamesResponse = exports.updateGameSchema = exports.CreateGameSchema = exports.GameSchema = void 0;
var cpu_schema_1 = require("./cpu.schema");
var gpu_schema_1 = require("./gpu.schema");
exports.GameSchema = {
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
            example: 'Minecraft',
            nullable: false
        },
        year: {
            type: 'integer',
            nullable: false,
            example: 2020,
            maximum: new Date().getFullYear(),
            minimum: 1920
        },
        image: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'http://hosting-server.com/route'
        },
        description: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'Long game description goes here...'
        },
        minimalRamSize: {
            type: 'integer',
            nullable: false,
            example: 4,
            minimum: 1
        },
        recommendedRamSize: {
            type: 'integer',
            nullable: false,
            example: 8,
            minimum: 1
        },
        minimalCpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        recommendedCpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        minimalGpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        recommendedGpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        minimalCpu: cpu_schema_1.CpuSchema,
        recommendedCpu: cpu_schema_1.CpuSchema,
        minimalGpu: gpu_schema_1.GpuSchema,
        recommendedGpu: gpu_schema_1.GpuSchema,
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
exports.CreateGameSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'FirePro 3D V3700',
            nullable: false
        },
        year: {
            type: 'integer',
            nullable: false,
            example: 2020,
            maximum: new Date().getFullYear(),
            minimum: 1920
        },
        image: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'http://hosting-server.com/route'
        },
        description: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'Long game description goes here...'
        },
        minimalRamSize: {
            type: 'integer',
            nullable: false,
            example: 4,
            minimum: 0
        },
        recommendedRamSize: {
            type: 'integer',
            nullable: false,
            example: 8,
            minimum: 0
        },
        minimalCpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        recommendedCpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        minimalGpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        },
        recommendedGpuId: {
            type: 'integer',
            nullable: false,
            example: 1,
            minimum: 1
        }
    }
};
exports.updateGameSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'FirePro 3D V3700',
            nullable: true
        },
        year: {
            type: 'integer',
            nullable: true,
            example: 2020,
            maximum: new Date().getFullYear(),
            minimum: 1920
        },
        image: {
            type: 'string',
            minLength: 1,
            nullable: true,
            example: 'http://hosting-server.com/route'
        },
        description: {
            type: 'string',
            minLength: 1,
            nullable: true,
            example: 'Long game description goes here...'
        },
        minimalRamSize: {
            type: 'integer',
            nullable: true,
            example: 4,
            minimum: 0
        },
        recommendedRamSize: {
            type: 'integer',
            nullable: true,
            example: 8,
            minimum: 0
        },
        minimalCpuId: {
            type: 'integer',
            nullable: true,
            example: 1,
            minimum: 1
        },
        recommendedCpuId: {
            type: 'integer',
            nullable: true,
            example: 1,
            minimum: 1
        },
        minimalGpuId: {
            type: 'integer',
            nullable: true,
            example: 1,
            minimum: 1
        },
        recommendedGpuId: {
            type: 'integer',
            nullable: true,
            example: 1,
            minimum: 1
        }
    }
};
exports.GetAllGamesResponse = {
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
            items: exports.GameSchema
        }
    }
};
