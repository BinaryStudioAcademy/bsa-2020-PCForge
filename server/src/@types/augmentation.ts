import * as http from 'http';
import { Services } from '../api/services';

import { Db } from '../data/db/connection';
declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    db: Db;
    services: Services;
  }
}
