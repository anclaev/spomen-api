import { nodeProfilingIntegration } from '@sentry/profiling-node'
import * as Sentry from '@sentry/node'

const filters = [/Unauthorized/i, /Forbidden/i, /BadRequest/i, /NotFound/i]

const filterSentryEvents = (
  event: Sentry.ErrorEvent,
): Sentry.ErrorEvent | null => {
  if (event.exception!.values!.length > 0) {
    const filtered = event.exception!.values!.filter((ex) =>
      filters.some((filter) => ex.type!.match(filter)),
    )

    if (filtered.length > 0) return null
  }

  if (process.env.NODE_ENV === 'local') {
    console.log(event)
  }

  return event
}

Sentry.init({
  dsn: 'https://da7f865f54172d5aaba97940d38f4722@o4506607592996864.ingest.us.sentry.io/4507530979901440',
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
