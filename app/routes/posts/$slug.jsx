import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";

export const loader = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  const html = marked(post.markdown);

  return json({ post, html });
};
export default function PostSlug() {
  const { post, html } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Some Post</h1>
      <h2>{post.title} </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/posts" className="bg-blue-500 text-white py-1 px-2 rounded " >Back to posts</Link>
    </main>
  );
}
