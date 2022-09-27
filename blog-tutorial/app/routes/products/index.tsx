import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getProducts } from "~/models/product.server";

export const loader = async () => {
  return json({
    products: await getProducts(),
  });
};

export default function Products() {
  const { products } = useLoaderData();
  console.log("prod", products);
  return (
    <>
      <h1>Products</h1>
      {products.map((product: any) => (
        <div key={product.id} className="pt-5 pl-5">
          <h1 className="font-extrabold">{product.title}</h1>
          <h1>{product.description}</h1>
        </div>
      ))}
    </>
  );
}
