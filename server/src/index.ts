import fastify from 'fastify';
import db from './data/db/connection';
import routes from './api/routes/index';

const port = parseInt(process.env.APP_PORT, 10) || 5001;
const server = fastify();

server.register(db);
server.register(routes);

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
