import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostAuthRequest,
  IsUserAuthenticated,
  LoginSchema,
  GoogleAuthSchema,
  IsAuthenticatedSchema,
  ResetPasswordRequestRequest,
  ResetPasswordRequestSchema,
  ResetPasswordSchema,
  ResetPasswordRequest,
  VerifyEmailRequest,
  verifyEmailRequest,
} from './auth.schema';
import { OAuth2Client } from 'google-auth-library';
import { triggerServerError } from '../../helpers/global.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MailService, UserService, AuthService } = fastify.services;
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
      const token = fastify.jwt.sign({ user }, { expiresIn: 86400 });
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
          const userData = (await oAuth2Client.verifyIdToken({ idToken: token })).getPayload();
          try {
            const user = await UserService.getByEmail(userData.email);
            response.send({ logged_in: true, user });
          } catch (err) {
            const user = await UserService.createUser({
              name: userData.name,
              email: userData.email,
              password: '',
              avatar: userData.picture,
            });
            if (!user) {
              triggerServerError('User with given email exists', 403);
            }
            response.send({ logged_in: true, user });
          }
        } catch (err) {
          response.code(400);
          response.send({ logged_in: false, user: {} });
        }
      } else {
        const user = decoded.user;
        response.send({ logged_in: true, user });
      }
    });
  });

  fastify.get('/verify-email/:token', verifyEmailRequest, async (request: VerifyEmailRequest, reply) => {
    const { token } = request.params;
    const user = await AuthService.verifyEmail(token);
    reply.send({ user, verified: true });
  });

  fastify.post(
    '/reset-password/request',
    ResetPasswordRequestSchema,
    async (request: ResetPasswordRequestRequest, reply) => {
      const { email } = request.body;
      const status = await AuthService.resetPasswordByEmail(email);
      reply.send(status);
    }
  );

  fastify.post('/reset-password', ResetPasswordSchema, async (request: ResetPasswordRequest, reply) => {
    const status = await AuthService.resetPassword(request.body);
    reply.send(status);
  });

  next();
}
