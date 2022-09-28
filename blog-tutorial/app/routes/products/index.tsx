import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";

import { getProducts } from "~/models/product.server";

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: 8108,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title, description",
    query_by_weights: "4,1",
  },
});

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
      <InstantSearch
        indexName="products"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <div>
          <SearchBox />
          <Hits />
        </div>
      </InstantSearch>

      <h1>Products</h1>
      {products.map((product: any) => (
        <div key={product.id} className="pt-5 pl-5">
          <h1 className="font-extrabold">{product.title}</h1>
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
