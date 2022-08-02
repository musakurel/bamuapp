import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({
    posts: await getPosts()
  });
};

export default function Posts() {
  const { posts } = useLoaderData();
  return (
    <main>
        <Link to="admin" className="text-red-600 underline">
  Admin
</Link>
      <h1>Posts Page</h1>
      <ul>
        {
            posts.map((post,index)=>(
                <li key={index}>
                    <Link
                    to={post.slug}
                    className="text-blue-600 underline"
                    >
                    {post.title}
                    </Link>
                </li>
            ))
        }
      </ul>
    </main>
  );
}
