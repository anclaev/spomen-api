import { nodeProfilingIntegration } from '@sentry/profiling-node'
import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: 'https://da7f865f54172d5aaba97940d38f4722@o4506607592996864.ingest.us.sentry.io/4507530979901440',
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  serverName: 'Spomen API',
  includeLocalVariables: true,
  defaultIntegrations: [Sentry.httpIntegration(), Sentry.prismaIntegration()],
})
