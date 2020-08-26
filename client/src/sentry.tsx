import { sentryDns, sentrySampleRate } from 'common/config';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const SentryInstance = {
  run() {
    if (sentryDns) {
      // there is no way to make sentry use typescript source maps on client
      // https://github.com/getsentry/sentry-javascript/issues/1835
      Sentry.init({
        dsn: sentryDns,
        debug: true,
        integrations: [
          new Integrations.BrowserTracing({
            // eslint-disable-next-line
            routingInstrumentation: Sentry.reactRouterV5Instrumentation(history as any),
          }),
        ],
        normalizeDepth: 6,
        tracesSampleRate: +(sentrySampleRate || 1),
      });
    }
  },
};

export default SentryInstance;
