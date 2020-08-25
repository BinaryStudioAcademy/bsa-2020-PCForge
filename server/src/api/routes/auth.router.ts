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
} from './auth.schema';
import { OAuth2Client } from 'google-auth-library';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MailService, UserService } = fastify.services;
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
      console.log('functionrouter -> user', user);
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
            const user = await UserService.getUserByLoginOrEmail(userData.email, '');
            response.send({ logged_in: true, user });
          } catch (err) {
            const user = await UserService.createUser({
              name: userData.name,
              email: userData.email,
              password: '',
              avatar: userData.picture,
            });
            response.send({ logged_in: true, user });
          }
        } catch (err) {
          response.send({ logged_in: false });
        }
      } else {
        const user = decoded.user;
        response.send({ logged_in: true, user });
      }
    });
  });

  fastify.post(
    '/reset-password/request',
    ResetPasswordRequestSchema,
    async (request: ResetPasswordRequestRequest, reply) => {
      const { email } = request.body;
      const resetPasswordToken = 'Ajkdjahkjh227d8asjasd'; //generate reset password token and save it to user.resetPasswordToken in DB
      const user = { id: 22 }; //get user by email from DB
      const status = await MailService.sendResetPassword({ to: email, userId: user.id, token: resetPasswordToken });
      reply.send(status);
    }
  );

  fastify.post('/reset-password', ResetPasswordSchema, async (request: ResetPasswordRequest, reply) => {
    const { userId, token, newPassword } = request.body;
    // check if token valid and change password if needed
    reply.send({});
  });

  next();
}
