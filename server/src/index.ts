import fastify from 'fastify';
import db from './data/db/connection';
import routes from './api/routes/index';
import jwtAuth from './api/plugins/auth';
import googleAuth from './api/plugins/googleAuth';

const port = parseInt(process.env.APP_PORT, 10) || 5001;
const server = fastify();

server.register(jwtAuth);
server.register(googleAuth);

server.register(db);
server.register(routes, { prefix: '/api' });

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
