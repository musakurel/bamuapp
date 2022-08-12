import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav from "~/nav";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import styles from './styles/app.css';

import { getUser } from "./session.server";
import { useLocation } from "react-router-dom";

/* export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
}; */
export const links = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  const location = useLocation();
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {location.pathname.includes("admin") ? null : <Nav />}

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
