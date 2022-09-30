import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteProduct, getProducts } from "~/models/product.server";

export const loader = async () => {
  return json({
    products: await getProducts(),
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const id = formData.get("id");
  console.log("before", id);

  invariant(typeof id === "string", "title must be a string");

  await deleteProduct(id);
  console.log("after", id);
  return redirect("/products");
};

export default function Products() {
  const { products } = useLoaderData();
  console.log("prod", products);
  return (
    <>
      <h1>Products</h1>
      {products.map((product: any) => (
        <div className="pt-5 pl-5" key={product.id}>
          <Form method="post">
            <Link to={product.id} className="text-blue-600 underline">
              <h1 className="font-extrabold">{product.title}</h1>
            </Link>
            <input type="hidden" name="id" value={product.id} />
            <button type="submit" className="round bg-blue-800 p-2 text-white">
              Delete
            </button>
          </Form>

          <h1>{product.description}</h1>
        </div>
      ))}
      <p>
        <Link to="new" className="text-blue-600">
          Add New Product
        </Link>
      </p>
    </>
  );
}
