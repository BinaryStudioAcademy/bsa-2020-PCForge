import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  fastify.get('/all', function (req, res) {
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
