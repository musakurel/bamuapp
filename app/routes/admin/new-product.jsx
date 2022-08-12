import { Form, useTransition } from "@remix-run/react";
import React from "react";
import { inputClassName } from "~/utils";
import { json, redirect } from "@remix-run/node";
import {
  createProduct,
  getProduct,
  getProducts,
} from "~/models/product.server";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const imageSlug = formData.get("imageSlug");
  await createProduct({ name, imageSlug });
  return redirect("/admin");
};
export default function Newproduct() {
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  return (
    <div>
      new-product
      <Form method="post">
        <div>
          <label>Product Name: </label>
          <input type="text" name="name" className={inputClassName}></input>
        </div>
        <div>
          <label>ImageSlug: </label>
          <input
            type="text"
            name="imageSlug"
            className={inputClassName}
          ></input>
        </div>
        <p className="xs:w-full w-1/2 text-right sm:w-full md:w-full lg:w-1/2">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Post"}
          </button>
        </p>
      </Form>
    </div>
  );
}
