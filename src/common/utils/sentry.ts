import { nodeProfilingIntegration } from '@sentry/profiling-node'
import * as Sentry from '@sentry/node'

const filters = [
  /Unauthorized/i,
  /Forbidden/i,
  /BadRequest/i,
  /NotFound/i,
  /Conflict/i,
]

const filterSentryEvents = (
  event: Sentry.ErrorEvent,
): Sentry.ErrorEvent | null => {
  if (event.exception!.values!.length > 0) {
    const filtered = event.exception!.values!.filter((ex) =>
      filters.some((filter) => ex.type!.match(filter)),
    )

    if (filtered.length > 0) return null
  }

  return event
}

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  serverName: 'Spomen API',
  includeLocalVariables: true,
  defaultIntegrations: [
    Sentry.httpIntegration(),
    Sentry.prismaIntegration(),
    Sentry.graphqlIntegration({
      ignoreTrivalResolveSpans: true,
    }),
  ],
  // enabled: process.env.NODE_ENV !== 'local',
  ignoreErrors: [...filters],
  beforeSend: filterSentryEvents,
})
