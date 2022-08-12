import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import React from "react";
import { getProduct } from "~/models/product.server";
import { inputClassName } from "~/utils";

export const loader = async ({ request, params }) => {
  const product = await getProduct({ id: parseInt(params.productId) });
  return json({ product });
};
export default function ProductId() {
  const { product } = useLoaderData();
  return (
    <div>
      {" "}
      Product 

      <input
        type="text"
        name="name"
        defaultValue={product?.name}
        className={inputClassName}
      ></input>
      <input
        type="text"
        name="imageSlug"
        defaultValue={product?.imageSlug}
        className={inputClassName}
      ></input>
    </div>
  );
}
