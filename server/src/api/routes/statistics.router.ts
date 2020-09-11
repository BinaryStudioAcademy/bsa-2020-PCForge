import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';

import { GetAllStatisticRequest, GetAllStatistic, typeStatisticRequests } from './statistics.schema';
import { getMultipleQuery } from '../../helpers/swagger.helper';

import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { StatisticService } = fastify.services;

  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  // const getAllSchema = getMultipleQuery(GetAllStatistic, IFilter.schema);
  fastify.get('/', async (request: GetAllStatisticRequest, reply) => {
    allowForAdmin(request);
    const { type } = request.query;
    switch (type) {
      case typeStatisticRequests.mostUsedHardware: {
        //const statisticDate = await statisticService.getAllTopGames(request.query);
        //reply.send(statisticDate);
        break;
      }
      case typeStatisticRequests.mostActiveUsers: {
        const statistics = await StatisticService.getCountOfUserSetups();
        reply.send(statistics);
        break;
      }
      case typeStatisticRequests.lastNewUsers: {
        break;
      }
      case typeStatisticRequests.lastNewSetups: {
        break;
      }
      case typeStatisticRequests.lastNewRequests: {
        break;
      }
      case typeStatisticRequests.lastNewComments: {
        break;
      }
    }
    //const statisticDate = await statisticService.getAllTopGames(request.query);
    //reply.send(statisticDate);
  });

  next();
}
