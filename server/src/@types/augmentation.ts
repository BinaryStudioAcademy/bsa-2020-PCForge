import * as http from 'http';

import { Db } from '../data/db/connection';
declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    db: Db;
  }
}
