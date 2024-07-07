import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://16b6d2a2d14944b9242beef5da1f93f7@o4507173721866240.ingest.us.sentry.io/4507557976145920",
    tracesSampleRate: 1,
    autoInstrumentRemix: true,
    captureActionFormDataKeys: {
    key_x: true,
    key_y: true,
  },
  sendDefaultPii: true
})
