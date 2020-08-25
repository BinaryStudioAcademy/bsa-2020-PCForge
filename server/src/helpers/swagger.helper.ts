import { SwaggerSchema } from '../data/models/swaggerSchema';
import { RouteShorthandOptions } from 'fastify/types/route';

export function getOneQuery(schema: SwaggerSchema, querystring?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      params: {
        id: { type: 'integer', nullable: false, minimum: 1 },
      },
      querystring,
      response: {
        200: schema,
        404: getNotFoundHeader(),
        ...(isProtected && {403: getForbiddenHeader() })
      },
    },
  };
}

export function createOneQuery(request: SwaggerSchema, response: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      body: {...request, additionalProperties: false},
      response: {
        200: response,
        ...(isProtected && {403: getForbiddenHeader() })
      },
    },
  };
}

export function updateOneQuery(toUpdate: SwaggerSchema, newData: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
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
        404: getNotFoundHeader(),
        ...(isProtected && {403: getForbiddenHeader() })
      },
    },
  };
}

export function deleteOneQuery(schema?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
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
        404: getNotFoundHeader(),
        ...(isProtected && {403: getForbiddenHeader() })
      },
    },
  };
}

export function getMultipleQuery(schema: SwaggerSchema, querystring?: SwaggerSchema, isProtected: boolean = true): RouteShorthandOptions {
  return {
    schema: {
      ...(isProtected && getProtectionHeader()),
      querystring,
      response: {
        200: schema,
        ...(isProtected && {403: getForbiddenHeader() })
      },
    },
  };
}

function getForbiddenHeader() {
  return {
    type: 'object',
    properties: {
      error: {
        type: 'string',
        minLength: 1,
        example: 'Access Denied',
        nullable: false,
      },
      status: {
        type: 'integer',
        nullable: false,
        example: 403,
      },
    },
    nullable: false,
  }
}

function getNotFoundHeader() {
  return {
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
}

function getProtectionHeader() {
  return {
    headers: {
      type: 'object',
      properties: {
        authorization: {
          type: 'string',
          example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ2Wm05L2xtTC4zUlpGRUJVeUpkRWplZkhMTGh0UGQyTU8vOEYwZDVoU205bVhFSGUwbmlNQyIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJhdmF0YXIiOm51bGwsInZlcmlmeUVtYWlsVG9rZW4iOm51bGwsInJlc2V0UGFzc3dvcmRUb2tlbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNTlaIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xMlQxMzoxODowNy4zNjBaIn0sImlhdCI6MTU5ODExMjYxOCwiZXhwIjoxNTk4MTk5MDE4fQ.yC5HktPfVdi_pXgI24Wn7rP7hLRqMsdFM6SDsoykmds',
          description: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2...',
          nullable: false
        }
      }
    }
  }
}
