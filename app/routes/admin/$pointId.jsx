import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { updatePoint, getPoint, deletePoint } from "~/models/point.server";
import { inputClassName } from "~/utils";
export const loader = async ({ request, params }) => {
  const point = await getPoint({ id: parseInt(params.pointId) });
  return json({ point });
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const id = parseInt(params.pointId);

  const intent = formData.get("intent");
  if (intent === "delete") {
    await deletePoint(parseInt(params.pointId));
    return redirect("/admin");
  }
  const name = formData.get("name");
  const adress = formData.get("adress");
  const tel = formData.get("tel");
  await updatePoint({ id, name, adress, tel });
  return redirect("/admin");
};

export default function PointsDetailPage() {
  const { point } = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  const isDeleting = transition.submission?.formData.get("intent") === "delete";

  return (
    <div>
      Points Details
      <Form method="post">
        <div className="xs:w-full mb-6 grid w-1/2 gap-6 sm:w-full md:w-full md:grid-cols-2 lg:w-1/2 ">
          <p>
            <label>
              Point Name:{" "}
              {errors?.name ? (
                <em className="text-red-600">{errors.name} </em>
              ) : null}
              <input
                type="text"
                key={point.id}
                name="name"
                defaultValue={point.name}
                className={inputClassName}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Point Adress:{" "}
              {errors?.adress ? (
                <em className="text-red-600">{errors.adress} </em>
              ) : null}
              <input
                type="text"
                key={point.id}
                name="adress"
                defaultValue={point.adress}
                className={inputClassName}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Point city:{" "}
              {errors?.city ? (
                <em className="text-red-600">{errors.city} </em>
              ) : null}
              <input
                type="text"
                name="city"
                                key={point.id}

                defaultValue={point?.city}
                className={inputClassName}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Point Tel:{" "}
              {errors?.tel ? (
                <em className="text-red-600">{errors.tel} </em>
              ) : null}
              <input
                type="text"
                pattern="[0-9]*"
                name="tel"
                key={point.id}
                defaultValue={point?.tel}
                className={inputClassName}
              ></input>
            </label>
          </p>
        </div>

        <p className="xs:w-full w-1/2 text-right sm:w-full md:w-full lg:w-1/2">
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
            className="rounded bg-red-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isUpdating}
          >
            {isDeleting ? "Deleting..." : "Delete Post"}
          </button>
        </p>
      </Form>
    </div>
  );
}
