import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { addProduct } from "~/models/product.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const description = formData.get("description");

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof description === "string", "description must be a string");

  await addProduct({ title, description });

  return redirect("/products");
};

function NewProduct() {
  return (
    <div className="w-60">
      <Form method="post" className="flex flex-col">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          className=" w-60 rounded border border-gray-500 "
        />

        <label htmlFor="title">description</label>
        <input
          type="description"
          name="description"
          className=" w-60 rounded border border-gray-500 "
        />

        <button
          type="submit"
          className="rounded border bg-gray-600 text-neutral-200"
        >
          Add Product
        </button>
      </Form>
    </div>
  );
}

export default NewProduct;
