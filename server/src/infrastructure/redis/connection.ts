import Redis from 'redis';
import { promisedRedisFactory } from './factory';
import { PromisedRedis, RedisClientOptions } from './interfaces';

const testRedis = (opts: RedisClientOptions) => {
  const redis = Redis.createClient(opts);
  redis.on('error', (err) => {
    throw err;
  });
  redis.on('connect', () => {
    redis.set('test_key', 'test_value', (err) => {
      console.log('Redis set testing value to test_value...');
      if (err) throw err;
    });
    redis.get('test_key', (err, value) => {
      console.log('Redis get testing value...');
      if (err) throw err;
      console.log('Redis testing value:', value);
      if (value !== 'test_value') throw new Error(`Redis get returns ${value} when should return test_value`);
    });
    console.log('redis connected successfully');
  });
};

const testPromisedRedis = async (opts: RedisClientOptions) => {
  const redis = await promisedRedisFactory().createClient(opts);
  console.log('PromisedRedis set testing value to test_value_promised...');
  await redis.set('test_key_promised', 'test_value_promised');
  console.log('PromisedRedis get testing value...');
  const value = await redis.get('test_key_promised');
  console.log('PromisedRedis testing value:', value);
  if (value !== 'test_value_promised')
    throw new Error(`PromisedRedis get returns ${value} when should return test_value_promised`);
  console.log('redis promised successfully');
};

export const connect = async (opts: RedisClientOptions): Promise<PromisedRedis> => {
  testRedis(opts);
  await testPromisedRedis(opts);
  const promisedRedis = promisedRedisFactory();
  return promisedRedis;
};
