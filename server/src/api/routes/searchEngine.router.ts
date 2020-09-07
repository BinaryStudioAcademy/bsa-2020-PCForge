import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  fastify.get('/gpus', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name', 'interface'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'gpus', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/cpus', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'cpus', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/games', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name', 'description'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'games', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/hdds', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'hdds', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/ssds', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'ssds', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/motherboards', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'motherboards', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/news', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['title', 'content'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'news', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/powersupplies', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'powersupplies', body: body })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/rams', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['name'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'rams', body: body, type: 'setup' })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/setups', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['description', 'title'],
        },
      },
    };

    fastify.elastic
      .search({ index: 'setups', body: body, type: 'setup' })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  fastify.get('/fully-search', function (req, res) {
    const body = {
      size: 5,
      from: 0,
      query: {
        query_string: {
          query: `*${req.query['q']}*`,
          fields: ['description', 'title'],
        },
      },
    };

    fastify.elastic
      .search({
        index: ['*'],
        body: body,
      })
      .then((results) => {
        res.status(200).send(results.body.hits.hits);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  next();
}
