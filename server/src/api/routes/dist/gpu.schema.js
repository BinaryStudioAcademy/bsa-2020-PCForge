"use strict";
exports.__esModule = true;
exports.GetAllGpusResponse = exports.UpdateGpuSchema = exports.CreateGpuSchema = exports.GpuSchema = void 0;
exports.GpuSchema = {
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
            example: 'FirePro 3D V3700',
            nullable: false
        },
        interface: {
            type: 'string',
            minLength: 1,
            example: 'PCIe 2.0 x16',
            nullable: false
        },
        memorySize: {
            type: 'integer',
            example: 256,
            minimum: 0,
            nullable: false
        },
        coreClocks: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: false
        },
        opengl: {
            type: 'string',
            minLength: 1,
            example: '3',
            nullable: false
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: false
        },
        performance: {
            type: 'integer',
            example: 160,
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
exports.CreateGpuSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'FirePro 3D V3700',
            nullable: false
        },
        interface: {
            type: 'string',
            minLength: 1,
            example: 'PCIe 2.0 x16',
            nullable: false
        },
        memorySize: {
            type: 'integer',
            example: 256,
            minimum: 0,
            nullable: false
        },
        coreClocks: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: false
        },
        opengl: {
            type: 'string',
            minLength: 1,
            example: '3',
            nullable: false
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: false
        },
        performance: {
            type: 'integer',
            example: 160,
            minimum: 0,
            nullable: false
        }
    }
};
exports.UpdateGpuSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            example: 'FirePro 3D V3700',
            nullable: true
        },
        interface: {
            type: 'string',
            minLength: 1,
            example: 'PCIe 2.0 x16',
            nullable: true
        },
        memorySize: {
            type: 'integer',
            example: 256,
            minimum: 0,
            nullable: true
        },
        coreClocks: {
            type: 'integer',
            example: 800,
            minimum: 0,
            nullable: true
        },
        opengl: {
            type: 'string',
            minLength: 1,
            example: '3',
            nullable: true
        },
        tdp: {
            type: 'number',
            example: 16.2,
            minimum: 0,
            nullable: true
        },
        performance: {
            type: 'integer',
            example: 160,
            minimum: 0,
            nullable: true
        }
    }
};
exports.GetAllGpusResponse = {
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
            items: exports.GpuSchema
        }
    }
};
