import { SwaggerSchema } from "../data/models/swaggerSchema"

export function GetOneQuery(schema: SwaggerSchema) {
  return {
    schema: {
      params: {
        id: { type: 'integer', nullable: false, minimum: 1 }
      },
      response: {
        200: schema,
        404: {
          type: 'string',
          example: 'Not found',
          nullable: false
        }
      }
    }
  }
}

export function CreateOneQuery(request: SwaggerSchema, response: SwaggerSchema) {
  return {
    schema: {
      body: request,
      response: {
        200: response
      }
    }
  }
}

export function UpdateOneQuery(toUpdate: SwaggerSchema, newData: SwaggerSchema) {
  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1,
        }
      },
      body: toUpdate,
      response: {
        200: newData,
        404: {
          type: 'string',
          example: 'Not found',
          nullable: false
        }
      }
    }
  }
}

export function DeleteOneQuery(schema?: SwaggerSchema) {
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
          properties: {

          }
        },
        404: {
          type: 'string',
          example: 'Not found',
          nullable: false
        }
      }
    }
  }
}

export function GetMultipleQuery(schema: SwaggerSchema, querystring?: SwaggerSchema) {
  return {
    schema: {
      querystring,
      response: {
        200: schema
      }
    }
  }
}