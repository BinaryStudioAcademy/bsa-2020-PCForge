import { SwaggerSchema } from '../data/models/swaggerSchema';

interface ISwaggerParams {
  [key: string]: {
    type: string;
    nullable: boolean;
    minimum: number;
  };
}

export function GetOneQuery(schema: SwaggerSchema, querystring?: SwaggerSchema) {
  return {
    schema: {
      params: {
        id: { type: 'integer', nullable: false, minimum: 1 },
      },
      querystring,
      response: {
        200: schema,
        404: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Item not found',
              nullable: false,
            },
            error: {
              type: 'string',
              example: 'Item not found',
              nullable: false,
            },
            status: {
              type: 'integer',
              nullable: false,
              example: 404,
            },
          },
          nullable: false,
        },
      },
    },
  };
}

export function CreateOneQuery(request: SwaggerSchema, response: SwaggerSchema) {
  return {
    schema: {
      body: request,
      response: {
        200: response,
      },
    },
  };
}

export function UpdateOneQuery(toUpdate: SwaggerSchema, newData: SwaggerSchema) {
  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1,
        },
      },
      body: toUpdate,
      response: {
        200: newData,
        404: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Item with id: 1 does not exists',
              nullable: false,
            },
            error: {
              type: 'string',
              example: 'Item with id: 1 does not exists',
              nullable: false,
            },
            status: {
              type: 'integer',
              nullable: false,
              example: 404,
            },
          },
          nullable: false,
        },
      },
    },
  };
}

export function DeleteOneQuery(schema?: SwaggerSchema) {
  return {
    schema: {
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1,
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {},
        },
      },
    },
  };
}

export function GetMultipleQuery(schema: SwaggerSchema, querystring?: SwaggerSchema) {
  return {
    schema: {
      querystring,
      response: {
        200: schema,
      },
    },
  };
}
