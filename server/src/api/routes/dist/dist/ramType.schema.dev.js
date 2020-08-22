"use strict";

exports.__esModule = true;
exports.UpdateRamTypeSchema = exports.CreateRamTypeSchema = exports.GetAllRamTypesResponse = exports.RamTypeSchema = void 0;
exports.RamTypeSchema = {
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
      example: 'Unique ram type name',
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
exports.GetAllRamTypesResponse = {
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
      items: exports.RamTypeSchema
    }
  }
};
exports.CreateRamTypeSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Ram type name',
      nullable: false
    }
  }
};
exports.UpdateRamTypeSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Unique ram type name',
      nullable: true
    }
  }
};