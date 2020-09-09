import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';
import { SearchByAllDataRequest } from './searchEngine.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  fastify.get('/all', function (req: SearchByAllDataRequest, res) {
    allowForAuthorized(req);
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name', 'description', 'title', 'content'],
        },
      },
    };

    fastify.elastic
      .search({
        index: ['gpus', 'news', 'rams', 'cpus', 'powersupplies', 'motherboards', 'setups', 'games', 'ssds', 'hdds'],
        body: body,
      })
      .then((results) => {
        console.log('functionrouter -> results', results);
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        console.log('functionrouter -> err', err);
        res.status(404).send(err.message);
      });
  });

  next();
}
