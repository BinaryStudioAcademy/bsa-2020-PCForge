import { FastifyInstance } from 'fastify';
import { error } from 'console';
import { bcrypt } from 'bcrypt';
import { PostAuthRequest, IsUserAuthenticated } from './auth.schema';
import { OAuth2Client } from 'google-auth-library';

export function router(fastify: FastifyInstance, opts, next): void {
  const { UserService } = fastify.services;
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    'http://localhost:5001/api/auth/google/callback'
  );

  fastify.post('/login', {}, async (request: PostAuthRequest, response) => {
    try {
      const { login, password } = request.body;
      if (login && password) {
        const User = await UserService.getUserByLoginOrEmail(login);
        const isPasswordValidForUser = await bcrypt.compare(password, User.password);
        if (isPasswordValidForUser) {
          const token = fastify.jwt.sign({}, { expiresIn: 86400 });
          response.send(token);
        } else {
          response.status(401).send({
            error: true,
            msg: 'Incorrect login or password, please try again',
          });
        }
      } else {
        throw error;
      }
    } catch (error) {
      response.status(400).send({
        error: true,
        msg: 'Mandatory fields are missing',
      });
    }
  });

  fastify.get('/google/callback', {}, async function (request, responses) {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    responses.send({ token: token.access_token });
  });

  fastify.post('/logged_in', {}, async function (request: IsUserAuthenticated, response) {
    const body = request.body;
    const token = body.token;
    fastify.jwt.verify(token, async (err, decoded) => {
      if (err) {
        try {
          //Return object with information about user
          await oAuth2Client.verifyIdToken({ idToken: token });
          response.send({ logged_in: true });
        } catch (err) {}
        response.send({ logged_in: false });
      } else {
        response.send({ logged_in: true });
      }
    });
  });

  next();
}
