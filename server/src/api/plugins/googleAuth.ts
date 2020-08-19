import fp from 'fastify-plugin';
import oauthPlugin from 'fastify-oauth2';

export default fp((fastify, opts, next) => {
  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/api/auth/google',
    callbackUri: 'https://pcforge.herokuapp.com/api/auth/google/callback',
  });

  next();
});
