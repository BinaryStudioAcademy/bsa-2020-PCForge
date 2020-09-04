import fastify from 'fastify';
import qs from 'qs';
import fastifyStatic from 'fastify-static';
import db from './data/db/connection';
import path from 'path';
import jwtAuth from './api/plugins/auth';
import googleAuth from './api/plugins/googleAuth';
import cors from 'fastify-cors';
import multer from 'fastify-multer';
import swagger from 'fastify-swagger';
import SwaggerMainSchema from './api/routes/swaggerMain.schema';
import { validateBody } from './helpers/bodyValidator.helper';
import nodemailer from './api/plugins/nodemailer';
import services from './api/services';
import routes from './api/routes/index';
import redis from './api/plugins/redis';
import websocket from './api/plugins/websocket';

const port = parseInt(process.env.APP_PORT, 10) || parseInt(process.env.PORT, 10) || 5001;
const redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;
const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const server = fastify({
  querystringParser: (str) => {
    const parsed = qs.parse(str, { comma: true });
    return parsed as { [key: string]: string | string[] };
  },
});
server.addContentTypeParser('application/json', { parseAs: 'string' }, (req, body, done) => validateBody(body, done));

server.register(cors, {
  origin: false,
  optionsSuccessStatus: 200,
});
server.register(swagger, SwaggerMainSchema);
server.register(db);
server.register(multer.contentParser);
server.register(jwtAuth);
server.register(googleAuth);
server.register(nodemailer, {
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const redisParams = process.env.REDIS_URL
  ? {
      url: process.env.REDIS_URL,
    }
  : {
      port: redisPort,
      host: redisHost,
    };

server.register(redis, redisParams);
server.register(websocket);
server.register(services);
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'client', 'build'),
  prefix: '/',
});

server.register(routes, { prefix: '/api' });

server.ready((err) => {
  if (err) throw err;
  const spec = server.swagger();
  delete spec.paths['api/auth/google/callback'];
});

server.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
