import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPoints } from "~/models/point.server";
import { useUser } from "~/utils";
export const loader = async () => {
  return json({
    points: await getPoints(),
  });
};
export default function Admin() {
  const user = useUser();
  const { points } = useLoaderData();
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Satış Noktaları</Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + Yeni Satış Noktası
          </Link>

          <hr />

          {points.length === 0 ? (
            <p className="p-4">No points yet</p>
          ) : (
            <ol>
              {points.map((point) => (
                <li key={point.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={{
                      pathname: `${point.id}`,
                    }}
                  >
                    📝 {point.name}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
