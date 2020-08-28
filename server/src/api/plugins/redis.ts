import fp from 'fastify-plugin';
import Redis from 'redis';

export default fp(async (fastify, opts: Redis.ClientOpts, next) => {
  try {
    const redis = Redis.createClient(opts);
    redis.on('error', (err) => {
      throw err;
    });
    redis.on('connect', () => {
      redis.set('test_key', 'test_value', (err) => {
        console.log('Redis set testing value to test_value...');
        if (err) throw err;
      });
      redis.get('test_key', (err, reply) => {
        console.log('Redis get testing value...');
        if (err) throw err;
        console.log('Redis testing value:', reply);
        if (reply !== 'test_value') throw new Error(`Redis get returns ${reply} when should return test_value`);
      });
      fastify.decorate('redis', redis).addHook('onClose', onClose);
      console.log('redis connected successfully');
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }

  next();
});

const onClose = (fastify, done) => {
  fastify.redis.end(true);
  done();
};
