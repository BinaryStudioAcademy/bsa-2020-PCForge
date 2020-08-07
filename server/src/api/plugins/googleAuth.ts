import fp from 'fastify-plugin';
import oauthPlugin from 'fastify-oauth2';

export default fp((fastify, opts, next) => {
  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile'],
    credentials: {
      client: {
        id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/login/google',
    callbackUri: 'http://localhost:3000/login/google/callback',
  });

  fastify.get('/auth/google/callback', {}, async function (req, res) {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
    res.redirect('http://localhost:3002/?token=' + token.access_token);
  });
});
