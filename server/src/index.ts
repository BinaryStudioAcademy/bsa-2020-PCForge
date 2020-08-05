import fastify from 'fastify';
import db from './data/db/connection';

const port = parseInt(process.env.APP_PORT, 10) || 5001;
const server = fastify();

// after server was created
server.register(db);
server.get('/ping', async (request, reply) => {
  return 'pong\n';
});

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
