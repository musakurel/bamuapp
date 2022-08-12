import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import React from "react";
import { getProduct, updateProduct } from "~/models/product.server";
import { inputClassName } from "~/utils";

export const loader = async ({ request, params }) => {
  const product = await getProduct({ id: parseInt(params.productId) });
  return json({ product });
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const imageSlug = formData.get("imageSlug");
  const id = parseInt(params.productId);
  await updateProduct({ id, name, imageSlug });
  return redirect("/admin");
};
export default function ProductId() {
  const { product } = useLoaderData();
  const transition = useTransition();
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  return (
    <div>
      {" "}
      Product Details
      <Form method="post">
        <div className="xs:w-full mb-6 grid w-1/2 gap-6 sm:w-full md:w-full md:grid-cols-2 lg:w-1/2 ">
        <label>
              Product Name:{" "}
          <input
            type="text"
            key={product?.id}
            name="name"
            defaultValue={product?.name}
            className={inputClassName}
          ></input>
          </label>
           <label>
               imageSlug:{" "}
          <input
            type="text"
            key={product?.id}
            name="imageSlug"
            defaultValue={product?.imageSlug}
            className={inputClassName}
          ></input>
                    </label>

        </div>
        <button
          type="submit"
          name="intent"
          value="update"
          className="m-5 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Post"}
        </button>
      </Form>
    </div>
  );
}
