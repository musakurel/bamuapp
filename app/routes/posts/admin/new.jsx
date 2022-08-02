import { Form, useActionData, useTransition } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { createPost } from "../../../models/post.server";
import {inputClassName} from "~/utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json(errors);
  }
  await createPost({ title, slug, markdown });
  return redirect("/posts/admin");
};

export default function NewPost() {
  const errors = useActionData();
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title} </em>
          ) : null}
          <input type="text" name="title" className={inputClassName}></input>
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.title} </em>
          ) : null}
          <input type="text" name="slug" className={inputClassName}></input>
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
          className={`${inputClassName} font-mono`}
        ></textarea>
      </p>

      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </p>
    </Form>
  );
}
