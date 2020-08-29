import Redis from 'redis';

export type RedisClientOptions = Redis.ClientOpts;

export interface PromisedRedis {
  createClient: () => Promise<PromisedRedisClient>;
  end: () => Promise<void>;
}

export interface PromisedRedisClient {
  get: (key: string) => Promise<string | null | never>;
  set: (key: string, value: string) => Promise<void | never>;
  rpush: (key: string, value: string | string[]) => Promise<void | never>;
  lpop: (key: string) => Promise<void | never>;
  lrange: (key: string, start: number, stop: number) => Promise<string[] | null | never>;
  ltrim: (key: string, start: number, stop: number) => Promise<void | never>;
}
