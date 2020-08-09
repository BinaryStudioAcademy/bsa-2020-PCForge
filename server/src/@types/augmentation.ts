import * as http from 'http';
import { Services } from '../api/services';
import { OAuth2Namespace } from 'fastify-oauth2';

import { Db } from '../data/db/connection';
declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    db: Db;
    services: Services;
    googleOAuth2: OAuth2Namespace;
  }
}
