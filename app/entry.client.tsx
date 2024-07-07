import * as Sentry from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

Sentry.init({
    dsn: "https://16b6d2a2d14944b9242beef5da1f93f7@o4507173721866240.ingest.us.sentry.io/4507557976145920",
    tracesSampleRate: 1, // 1.0 is capturing 100%
    replaysSessionSampleRate: 0.1, // capture replay for 10% of sessions
    replaysOnErrorSampleRate: 1, // capture replay for 100% of sessions with errors

    integrations: [
      Sentry.browserTracingIntegration({
        useEffect,
        useLocation,
        useMatches
      }), 
      Sentry.replayIntegration(),
    ]
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
