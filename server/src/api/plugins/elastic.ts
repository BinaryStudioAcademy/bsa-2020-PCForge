import fp from 'fastify-plugin';
import { Client, ClientOptions } from '@elastic/elasticsearch';

export default fp(async (fastify, opts: ClientOptions, next) => {
  const client = new Client({
    node: opts.node,
  });

  fastify.decorate('elastic', client).addHook('onClose', async (fastify, done) => {
    await client.close();
    done();
  });

  try {
    client.ping({}, function (error) {
      if (error) {
        console.error('Elasticsearch cluster is down!');
      } else {
        console.log('Everything is ok');
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error('Cannot connect to Elasticsearch');
  }
  next();
});
