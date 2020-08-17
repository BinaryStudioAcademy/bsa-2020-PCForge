import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostAuthRequest,
  IsUserAuthenticated,
  LoginSchema,
  GoogleAuthSchema,
  IsAuthenticatedSchema,
} from './auth.schema';
import { OAuth2Client } from 'google-auth-library';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { UserService } = fastify.services;
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    'http://localhost:5001/api/auth/google/callback'
  );

  fastify.post('/login', LoginSchema, async (request: PostAuthRequest, response) => {
    const { email, password } = request.body || {};
    try {
      //return user
      const user = await UserService.getUserByLoginOrEmail(email, password);
      const token = fastify.jwt.sign({}, { expiresIn: 86400 });
      response.send({ token, user });
    } catch (error) {
      throw {
        error: `User with given credentials does not exist`,
        status: 401,
      };
    }
  });

  fastify.get('/google/callback', GoogleAuthSchema, async function (request, response) {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    response.send({ token: token.access_token });
  });

  fastify.post('/logged_in', IsAuthenticatedSchema, async function (request: IsUserAuthenticated, response) {
    const body = request.body;
    const token = body.token;
    fastify.jwt.verify(token, async (err, decoded) => {
      if (err) {
        try {
          //Return object with information about user
          await oAuth2Client.verifyIdToken({ idToken: token });
          response.send({ logged_in: true });
        } catch (err) {
          response.send({ logged_in: false });
        }
      } else {
        response.send({ logged_in: true });
      }
    });
  });

  next();
}
