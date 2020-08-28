import { Services } from '../api/services';
import { OAuth2Namespace } from 'fastify-oauth2';
import { FastifyLoggerInstance } from 'fastify';
import { RawServerBase, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression } from 'fastify';
import { Db } from '../data/db/connection';
import { RouteGenericInterface } from 'fastify/types/route';
import { File as MulterFile } from 'fastify-multer/lib/interfaces';
import Mail from 'nodemailer/lib/mailer';
import { Repositories } from '../data/repositories';
import { RedisClient } from 'redis';

interface File extends MulterFile {
  bucket: string;
  key: string;
  acl: string;
  contentType: string;
  contentDisposition: null;
  storageClass: string;
  serverSideEncryption: null;
  metadata: string;
  location: string;
  etag: string;
}

declare module 'fastify' {
  export interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger = FastifyLoggerInstance
  > {
    db: Db;
    repositories: Repositories;
    services: Services;
    googleOAuth2: OAuth2Namespace;
    nodemailer: Mail;
    redis: RedisClient;
  }

  export interface FastifyRequest<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>
  > {
    file?: File;
  }
}
