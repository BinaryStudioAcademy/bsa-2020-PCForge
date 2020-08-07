import { FastifyInstance } from 'fastify';

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.post('/auth/login', {}, async (request, reply) => {
    const { login, password } = request.body;
    if (!login || !password) {
      reply.status(400).send({
        error: true,
        msg: 'Mandatory fields are missing',
      });
    }
    //HERE MUST BE IMPLEMENTED LOGIC WITH DATABASE
    const token = fastify.jwt.sign({}, { expiresIn: 86400 });
    reply.send({ token });
  });

  fastify.get('/auth/google/callback', {}, async function (req, res) {
    // Fastify instance gets decorated with this method on OAuth plugin initialization
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
    res.send({ token: token.access_token });
  });

  next();
}
