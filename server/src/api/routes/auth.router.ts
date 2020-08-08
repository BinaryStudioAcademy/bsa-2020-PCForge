import { FastifyInstance } from 'fastify';
import { error } from 'console';
import { bcrypt } from 'bcrypt';
const bcrypt = require('bcrypt');

export function router(fastify: FastifyInstance, opts, next): void {
  const { UserService } = fastify.services;

  fastify.post('/auth/login', {}, async (request, reply) => {
    try {
      const { login, password } = request.body;
      if (login && password) {
        const User = await UserService.getUserByLoginOrEmail(login);
        const isPasswordValidForUser = await bcrypt.compare(password, User.password);
        if (isPasswordValidForUser) {
          const token = fastify.jwt.sign({}, { expiresIn: 86400 });
          reply.send(token);
        } else {
          reply.status(401).send({
            error: true,
            msg: 'Incorrect login or password, please try again',
          });
        }
      } else {
        throw error;
      }
    } catch (error) {
      reply.status(400).send({
        error: true,
        msg: 'Mandatory fields are missing',
      });
    }
  });

  fastify.get('/auth/google/callback', {}, async function (req, res) {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
    res.send({ token: token.access_token });
  });

  next();
}
