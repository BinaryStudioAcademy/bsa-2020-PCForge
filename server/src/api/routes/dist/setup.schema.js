"use strict";
exports.__esModule = true;
exports.UpdateSetupSchema = exports.CreateSetupSchema = exports.GetAllSetupsResponse = exports.DetailedSetupSchema = exports.SetupSchema = void 0;
var cpu_schema_1 = require("./cpu.schema");
var gpu_schema_1 = require("./gpu.schema");
var motherboard_schema_1 = require("./motherboard.schema");
var ram_schema_1 = require("./ram.schema");
var powerSupply_schema_1 = require("./powerSupply.schema");
exports.SetupSchema = {
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
            example: 'Setup name',
            nullable: false
        },
        description: {
            type: 'string',
            minLength: 1,
            example: 'Setup description',
            nullable: false
        },
        image: {
            type: 'string',
            minLength: 1,
            example: 'http://hosting-url.com/route',
            maxLength: 200,
            nullable: true
        },
        cpuId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        authorId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        gpuId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        motherboardId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        ramId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: false
        },
        powerSupplyId: {
            type: 'integer',
            example: 1,
            minimum: 1,
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
        },
        cpu: cpu_schema_1.CpuSchema,
        gpu: gpu_schema_1.GpuSchema,
        motherboard: motherboard_schema_1.MotherBoardSchema,
        ram: ram_schema_1.RamSchema,
        powerSupply: powerSupply_schema_1.PowerSupplySchema
    }
};
var getDetailedSetupSchema = function () {
    var schema = JSON.parse(JSON.stringify(exports.SetupSchema));
    schema.properties.cpu = cpu_schema_1.CpuSchema;
    schema.properties.gpu = gpu_schema_1.GpuSchema;
    schema.properties.ram = ram_schema_1.RamSchema;
    schema.properties.motherboard = motherboard_schema_1.MotherBoardSchema;
    schema.properties.powerSupply = powerSupply_schema_1.PowerSupplySchema;
    return schema;
};
exports.DetailedSetupSchema = getDetailedSetupSchema();
exports.GetAllSetupsResponse = {
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
            items: exports.DetailedSetupSchema
        }
    }
};
exports.CreateSetupSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 1,
            example: 'Setup title',
            nullable: false
        },
        description: {
            type: 'string',
            minLength: 1,
            example: 'Setup description',
            nullable: false
        },
        image: {
            type: 'string',
            minLength: 1,
            example: 'http://hosting-url.com/route',
            maxLength: 200,
            nullable: true
        },
        cpuId: {
            type: 'integer',
            minimum: 1,
            example: 1,
            nullable: false
        },
        gpuId: {
            type: 'integer',
            minimum: 1,
            example: 1,
            nullable: false
        },
        motherboardId: {
            type: 'integer',
            example: 1,
            nullable: false
        },
        ramId: {
            type: 'integer',
            example: 1,
            nullable: false
        },
        powerSupplyId: {
            type: 'integer',
            example: 1,
            nullable: false
        }
    }
};
exports.UpdateSetupSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 1,
            example: 'Setup title',
            nullable: true
        },
        description: {
            type: 'string',
            minLength: 1,
            example: 'Setup description',
            nullable: true
        },
        image: {
            type: 'string',
            minLength: 1,
            example: 'http://hosting-url.com/route',
            maxLength: 200,
            nullable: true
        },
        cpuId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        gpuId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        motherboardId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        ramId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        },
        powerSupplyId: {
            type: 'integer',
            example: 1,
            minimum: 1,
            nullable: true
        }
    }
};
