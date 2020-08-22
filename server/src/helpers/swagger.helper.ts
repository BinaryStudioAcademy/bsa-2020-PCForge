import { SwaggerSchema } from '../data/models/swaggerSchema';
import { RouteShorthandOptions } from 'fastify/types/route';

export function GetOneQuery(schema: SwaggerSchema, querystring?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      params: {
        id: { type: 'integer', nullable: false, minimum: 1 },
      },
      querystring,
      response: {
        200: schema,
        404: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              minLength: 1,
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

export function CreateOneQuery(request: SwaggerSchema, response: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      body: {...request, additionalProperties: false},
      response: {
        200: response,
      },
    },
  };
}

export function UpdateOneQuery(toUpdate: SwaggerSchema, newData: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1,
        },
      },
      body: {...toUpdate, additionalProperties: false},
      response: {
        200: newData,
        404: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              minLength: 1,
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

export function DeleteOneQuery(schema?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      params: {
        id: {
          type: 'integer',
          nullable: false,
          minimum: 1,
        },
      },
      response: {
        200: schema,
        404: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              minLength: 1,
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
        }
      },
    },
  };
}

export function GetMultipleQuery(schema: SwaggerSchema, querystring?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      querystring,
      response: {
        200: schema,
      },
    },
  };
}

function getProtectionHeader(){
  return {
    headers: {
      type: 'object',
      properties: {
        authorization: {
          type: 'string',
          example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ2Wm05L2xtTC4zUlpGRUJVeUpkRWplZkhMTGh0UGQyTU8vOEYwZDVoU205bVhFSGUwbmlNQyIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJhdmF0YXIiOm51bGwsInZlcmlmeUVtYWlsVG9rZW4iOm51bGwsInJlc2V0UGFzc3dvcmRUb2tlbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNTlaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNjBaIn0sImlhdCI6MTU5ODExMjYxOCwiZXhwIjoxNTk4MTk5MDE4fQ.yC5HktPfVdi_pXgI24Wn7rP7hLRqMsdFM6SDsoykmds',
          description: 'It contains the token, that you get, when authorizing followed by "Bearer "',
          nullable: false
        }
      }
    }
  }
}
