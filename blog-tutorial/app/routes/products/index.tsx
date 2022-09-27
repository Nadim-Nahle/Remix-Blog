import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProducts } from "~/models/product.server";

export const loader = async () => {
  return json({ getProducts });
};

function Products() {
  const { products } = useLoaderData();
  return (
    <div>
      {products.map((product: any) => (
        <>
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
        </>
      ))}
    </div>
  );
}

export default Products;
