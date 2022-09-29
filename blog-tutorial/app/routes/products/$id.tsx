import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getProduct } from "~/models/product.server";

export const loader = async ({ params }: any) => {
  return json({
    Product: await getProduct(params.id),
  });
};

export default function ProductSlug() {
  const { Product } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{Product.title}</h1>
    </main>
  );
}
