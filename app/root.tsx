import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import { cssBundleHref } from '@remix-run/css-bundle';
import { LinksFunction } from '@remix-run/node';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { Analytics } from '@vercel/analytics/react';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];
export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().toLocaleDateString('en-us', { year: 'numeric' })}
            &nbsp;
            <strong>We Want Web LLC</strong>. All rights reserved.
          </p>
          {/* TODO: add ToS and Privacy Policy */}
          {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav> */}
          <ScrollRestoration />
          <Scripts />
          <SpeedInsights />
          <Analytics />
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
