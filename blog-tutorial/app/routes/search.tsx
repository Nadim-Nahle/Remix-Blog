import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
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

function Search() {
  return <div>Search</div>;
}

export default Search;
