import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { getPost, updatePost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { useTransition } from "react";
import { deletePost } from "../../../models/post.server";
import {inputClassName} from "~/utils";


export const loader = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const post = await getPost(params.slug);
  if (!post) {
    throw new Response("Not found", { status: 404 });
  }
  const html = marked(post.markdown);
  return json({ post, html });
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  if (intent === "delete") {
    await deletePost(params.slug);
    return redirect("/posts/admin");
  }
  const slug = params.slug;
  const title = formData.get("title");
  const markdown = formData.get("markdown");
  await updatePost({ title, markdown, slug });
  return redirect("/posts/admin");
};
export default function PostSlug() {
  const { post } = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  const isDeleting = transition.submission?.formData.get("intent") === "delete";
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Some Post</h1>
      <Link to="/posts" className="rounded bg-blue-500 py-1 px-2 text-white ">
        Back to posts
      </Link>
      <Form method="put">
        <p>
          <label>
            Post Title:{" "}
            {errors?.title ? (
              <em className="text-red-600">{errors.title} </em>
            ) : null}
            <input
              type="text"
              name="title"
              key={post.slug}
              defaultValue={post.title}
              className={inputClassName}
            ></input>
          </label>
        </p>

        <p>
          <label htmlFor="markdown">Markdown:</label>
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown} </em>
          ) : null}
          <br />
          <textarea
            id="markdown"
            rows={15}
            name="markdown"
            key={post.slug}
            className={`${inputClassName} font-mono`}
            defaultValue={post?.markdown}
          ></textarea>
        </p>

        <p className="text-right">
          <button
            type="submit"
            name="intent"
            value="update"
            className="m-5 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Post"}
          </button>
          <button
            type="submit"
            name="intent"
            value="delete"
            className="m-5 rounded bg-red-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Post"}
          </button>
        </p>
        {console.log(post)}
      </Form>
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Oh oh! Post not found</div>;
  }
}

export function ErrorBoundary({ error }) {
  return (
    <div classname="text-red-500">
      Oh something went wrong!
      <pre>{error.message} </pre>
    </div>
  );
}
