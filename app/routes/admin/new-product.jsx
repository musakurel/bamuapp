import { Form } from "@remix-run/react";
import React from "react";
import { inputClassName } from "~/utils";

export default function Newproduct() {
  return <div>new-product

    <Form method="post">
    <div>
            <label>
              Product Name:{" "}
      
            </label>
              <input type="text" name="name" className={inputClassName}></input>
          </div>
    <div>
            <label>
              ImageSlug:{" "}
      
            </label>
              <input type="text" name="name" className={inputClassName}></input>
          </div>
    </Form>
  </div>;
}
