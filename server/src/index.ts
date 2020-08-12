import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import db from './data/db/connection';
import routes from './api/routes/index';
import path from 'path';
import jwtAuth from './api/plugins/auth';
import googleAuth from './api/plugins/googleAuth';
import cors from 'fastify-cors';

const port = parseInt(process.env.APP_PORT, 10) || parseInt(process.env.PORT, 10) || 5001;
const server = fastify();

server.register(cors, {
  origin: process.env.APP_CLIENT_URL,
  optionsSuccessStatus: 200,
});
server.register(jwtAuth);
server.register(googleAuth);
server.register(db);
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'client', 'build'),
  prefix: '/',
});

server.register(routes, { prefix: '/api' });

server.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
