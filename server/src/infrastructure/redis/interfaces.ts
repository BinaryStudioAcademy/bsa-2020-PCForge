import Redis from 'redis';

export type RedisClientOptions = Redis.ClientOpts;

export interface PromisedRedis {
  createClient: (opts: Redis.ClientOpts) => Promise<PromisedRedisClient>;
  end: (opts: Redis.ClientOpts) => Promise<void>;
}

export interface PromisedRedisClient {
  get: (key: string) => Promise<string | null | never>;
  set: (key: string, value: string) => Promise<void | never>;
}
