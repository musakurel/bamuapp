import { Form, useActionData, useTransition } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { createPoint } from "~/models/point.server";
import { inputClassName } from "~/utils";
import cities from "~/cities.json";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const adress = formData.get("adress");
  const city = formData.get("city");
  console.log(city,"city")
  const tel = formData.get("tel");
  const errors = {
    name: name ? null : "name is required",
    adress: adress ? null : "adress is required",
    city: city ? null : "city is required",
    tel: tel ? null : "tel is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json(errors);
  }
  await createPoint({ name, adress, city, tel });
  return redirect("/admin");
};

export default function New() {
  const errors = useActionData();
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  return (
    <div>
      New point
      <Form method="post">
        <div className="mb-6 grid gap-6 w-1/2 md:grid-cols-2 lg:w-1/2 md:w-full sm:w-full xs:w-full ">
          <div>
            <label>
              Point Name:{" "}
              {errors?.name ? (
                <em className="text-red-600">{errors.name} </em>
              ) : null}
            </label>
              <input type="text" name="name" className={inputClassName}></input>
          </div>
          <div>
            <label>
              Point Adress:{" "}
              {errors?.adress ? (
                <em className="text-red-600">{errors.adress} </em>
              ) : null}
              <input
                type="text"
                name="adress"
                className={inputClassName}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Point city:{" "}
              {errors?.city ? (
                <em className="text-red-600">{errors.city} </em>
              ) : null}
              <select name="city" id="small" className={inputClassName}>
                {cities.map((city) => {
                  return <option  key={city?.name} value={city?.name} >{city?.name}</option>;
                })}
              </select>
            </label>
          </div>
          <div>
            <label>
              Point Tel:{" "}
              {errors?.tel ? (
                <em className="text-red-600">{errors.tel} </em>
              ) : null}
              <input
                type="text"
                pattern="[0-9]*"
                name="tel"
                className={inputClassName}
              ></input>
            </label>
          </div>
        </div>

        <p className="text-right w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full">
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
