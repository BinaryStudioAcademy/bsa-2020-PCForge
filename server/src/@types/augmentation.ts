import { Services } from '../api/services';
import { OAuth2Namespace } from 'fastify-oauth2';
import { FastifyLoggerInstance } from 'fastify';
import { RawServerBase, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression } from 'fastify';

import { Db } from '../data/db/connection';
declare module 'fastify' {
  export interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger = FastifyLoggerInstance
  > {
    db: Db;
    services: Services;
    googleOAuth2: OAuth2Namespace;
  }
}
