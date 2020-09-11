import { FastifyRequest } from 'fastify';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';
import { UserSchema } from './user.schema';

export enum typeStatisticRequests {
  mostUsedHardware = 'mostUsedHardware',
  mostActiveUsers = 'mostActiveUsers',
  lastNewUsers = 'lastNewUsers',
  lastNewComments = 'lastNewComments',
  lastNewRequests = 'lastNewRequests',
  lastNewSetups = 'lastNewSetups',
}
export type GetAllStatisticRequest = FastifyRequest<{
  Querystring: { type: typeStatisticRequests };
}> & { user: UserAttributes };

export const StatisticSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: [
        typeStatisticRequests.lastNewComments,
        typeStatisticRequests.lastNewRequests,
        typeStatisticRequests.lastNewSetups,
        typeStatisticRequests.lastNewUsers,
        typeStatisticRequests.mostActiveUsers,
        typeStatisticRequests.mostUsedHardware,
      ],
      nullable: false,
    },
    date: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    userId: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
    user: UserSchema,
    maxCountCreatedSetups: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
  },
  /*newUserId
  countOfComments
  countOfCreatedRequests
  countOfCreatedSetups
  hardwareId
  countUsingHardware*/
};
export const GetAllStatistic: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          minimum: 0,
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          minimum: 0,
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: StatisticSchema,
    },
  },
};
