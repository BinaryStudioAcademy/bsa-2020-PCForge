import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import db from './data/db/connection';
import routes from './api/routes/index';
import path from 'path';

const port = parseInt(process.env.APP_PORT, 10) || 5001;
const server = fastify();

server.register(db);
server.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'client', 'build'),
  prefix: '/'
});

server.register(routes, { prefix: '/api' });

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
