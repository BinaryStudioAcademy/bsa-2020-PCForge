"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.GetMultipleQuery = exports.DeleteOneQuery = exports.UpdateOneQuery = exports.CreateOneQuery = exports.GetOneQuery = void 0;

function GetOneQuery(schema, querystring) {
  var _error;

  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1
        }
      },
      querystring: querystring,
      response: {
        200: schema,
        404: {
          type: 'object',
          properties: {
            error: (_error = {
              type: 'string',
              minLength: 1
            }, _defineProperty(_error, "minLength", 1), _defineProperty(_error, "example", 'Item not found'), _defineProperty(_error, "nullable", false), _error),
            status: {
              type: 'integer',
              nullable: false,
              example: 404
            }
          },
          nullable: false
        }
      }
    }
  };
}

exports.GetOneQuery = GetOneQuery;

function CreateOneQuery(request, response) {
  return {
    schema: {
      body: request,
      response: {
        200: response
      }
    }
  };
}

exports.CreateOneQuery = CreateOneQuery;

function UpdateOneQuery(toUpdate, newData) {
  var _error2;

  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1
        }
      },
      body: toUpdate,
      response: {
        200: newData,
        404: {
          type: 'object',
          properties: {
            error: (_error2 = {
              type: 'string',
              minLength: 1
            }, _defineProperty(_error2, "minLength", 1), _defineProperty(_error2, "example", 'Item with id: 1 does not exists'), _defineProperty(_error2, "nullable", false), _error2),
            status: {
              type: 'integer',
              nullable: false,
              example: 404
            }
          },
          nullable: false
        }
      }
    }
  };
}

exports.UpdateOneQuery = UpdateOneQuery;

function DeleteOneQuery(schema) {
  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {}
        }
      }
    }
  };
}

exports.DeleteOneQuery = DeleteOneQuery;

function GetMultipleQuery(schema, querystring) {
  return {
    schema: {
      querystring: querystring,
      response: {
        200: schema
      }
    }
  };
}

exports.GetMultipleQuery = GetMultipleQuery;