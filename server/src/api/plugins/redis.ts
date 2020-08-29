import fp from 'fastify-plugin';
import { connect } from '../../infrastructure/redis/connection';
import { RedisClientOptions } from '../../infrastructure/redis/interfaces';

export default fp(async (fastify, opts: RedisClientOptions, next) => {
  try {
    const promisedRedis = await connect(opts);
    fastify.decorate('redis', promisedRedis).addHook('onClose', async (fastify, done) => {
      await fastify.redis.end();
      done();
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
  next();
});
