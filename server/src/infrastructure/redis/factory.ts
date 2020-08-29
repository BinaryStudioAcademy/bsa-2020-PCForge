import Redis from 'redis';
import { PromisedRedis, PromisedRedisClient, RedisClientOptions } from './interfaces';

const promisedRedisClientFactory = async (client: Redis.RedisClient): Promise<PromisedRedisClient> => {
  const get = (key: string): Promise<string | null | never> => {
    return new Promise((resolve, reject) => {
      client.get(key, (err, value) => {
        if (err) reject(err);
        else resolve(value);
      });
    });
  };

  const set = (key: string, value: string): Promise<void | never> => {
    return new Promise((resolve, reject) => {
      client.set(key, value, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

  const promisedRedisClient: PromisedRedisClient = {
    get,
    set,
  };
  return promisedRedisClient;
};

export const promisedRedisFactory = (): PromisedRedis => {
  const promisedRedis: PromisedRedis = {
    createClient: (opts: RedisClientOptions): Promise<PromisedRedisClient | never> => {
      return new Promise((resolve, reject) => {
        const client = Redis.createClient(opts);
        client.on('error', (err) => reject(err));
        client.on('connect', async () => {
          const promisedClient = await promisedRedisClientFactory(client);
          resolve(promisedClient);
        });
      });
    },
    end: (opts: RedisClientOptions): Promise<void> => {
      return new Promise((resolve, reject) => {
        const client = Redis.createClient(opts);
        client.on('error', (err) => reject(err));
        client.on('connect', () => {
          client.send_command('SHUTDOWN', (err, value) => {
            console.log('Redis disconnected successfully');
            resolve();
          });
        });
      });
    },
  };
  return promisedRedis;
};
