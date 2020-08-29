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

  const rpush = (key: string, value: string | string[]): Promise<void | never> => {
    return new Promise((resolve, reject) => {
      client.rpush(key, value, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

  const lpop = (key: string): Promise<void | never> => {
    return new Promise((resolve, reject) => {
      client.lpop(key, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

  const lrange = (key: string, start: number, stop: number): Promise<string[] | null | never> => {
    return new Promise((resolve, reject) => {
      client.lrange(key, start, stop, (err, value) => {
        if (err) reject(err);
        resolve(value);
      });
    });
  };

  const ltrim = (key: string, start: number, stop: number): Promise<void | never> => {
    return new Promise((resolve, reject) => {
      client.ltrim(key, start, stop, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

  const promisedRedisClient: PromisedRedisClient = {
    get,
    set,
    rpush,
    lpop,
    lrange,
    ltrim,
  };
  return promisedRedisClient;
};

export const promisedRedisFactory = (opts: RedisClientOptions): PromisedRedis => {
  const promisedRedis: PromisedRedis = {
    createClient: (): Promise<PromisedRedisClient | never> => {
      return new Promise((resolve, reject) => {
        const client = Redis.createClient(opts);
        client.on('error', (err) => reject(err));
        client.on('connect', async () => {
          const promisedClient = await promisedRedisClientFactory(client);
          resolve(promisedClient);
        });
      });
    },
    end: (): Promise<void> => {
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
