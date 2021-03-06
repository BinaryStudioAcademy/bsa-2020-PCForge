import Redis from 'redis';
import { promisedRedisFactory } from './factory';
import { PromisedRedis, RedisClientOptions } from './interfaces';

const testRedis = (opts: RedisClientOptions) => {
  return new Promise((resolve, reject) => {
    const redis = Redis.createClient(opts);
    redis.on('error', (err) => {
      return reject(err);
    });
    redis.on('connect', () => {
      redis.set('test_key', 'test_value', (err) => {
        console.log('Redis set testing value to test_value...');
        if (err) return reject(err);
        redis.get('test_key', (err, value) => {
          console.log('Redis get testing value...');
          if (err) return reject(err);
          console.log('Redis testing value:', value);
          if (value !== 'test_value')
            return reject(new Error(`Redis get returns ${value} when should return test_value`));
          console.log('redis is connected successfully');
          resolve();
        });
      });
    });
  });
};

const testPromisedRedis = async (opts: RedisClientOptions) => {
  const redis = await promisedRedisFactory(opts).createClient();
  console.log('PromisedRedis set testing value to test_value_promised...');
  await redis.set('test_key_promised', 'test_value_promised');
  console.log('PromisedRedis get testing value...');
  const value = await redis.get('test_key_promised');
  console.log('PromisedRedis testing value:', value);
  if (value !== 'test_value_promised')
    throw new Error(`PromisedRedis get returns ${value} when should return test_value_promised`);
  console.log('redis is promised successfully');
};

export const connect = async (opts: RedisClientOptions): Promise<PromisedRedis> => {
  await testRedis(opts);
  await testPromisedRedis(opts);
  const promisedRedis = promisedRedisFactory(opts);
  return promisedRedis;
};
